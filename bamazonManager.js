var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
 
  managerSelection();
});

function managerSelection(){

      inquirer
        .prompt([
           {type: "list",
            message: "Products/Inventory Options",
            choices: ["View Products for Sale",
                      "View Low Inventory",
                      "Add to Inventory",
                      "Add New Product"],

            name: "command"
          }
       ])
        .then(function(inquirerResponse) {

            switch(inquirerResponse.command) {
                case "View Products for Sale":
                    displayProducts();
                    break;
                case "View Low Inventory":
                    displayLowInventory();
                    break;
                case "Add to Inventory":
                     addToInventory();
                    break;
                default:
                    addNewProduct();
            }
          }); //end inquirer 

} // end function managerSelection
//--------------------------------------------------------------------------------
function displayProducts() {
//  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
 //   Log all results of the SELECT statement
 //   console.log(res);
    console.log("PRODUCT ID" + " | " + 
                "       PRODUCT        " + " | " +
                "   PRICE   " + " | " +
                "   QUANTITY   ");
    console.log("-------------------------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log("    " + res[i].item_id + "    " + 
                  "      " + res[i].product_name + "    "  +
                  "            " + res[i].price  + "    " +
                  "          " + res[i].stock_quantity );
    }
    console.log("-------------------------------------------------------------------");
  });
} // end function displayProducts

//--------------------------------------------------------------------------------

function displayLowInventory() {

    connection.query("SELECT * FROM products", function(err, res) {

        if (err) throw err;

        console.log(" "); //forcing a space before the results
        console.log("-----------------Items with Low Inventory--------------------");

        var lowInventoryCount = 0; //setting a variable to daiplay a msg if all items have enough inventory

        for (var i = 0; i < res.length; i++) {
          
            if (res[i].stock_quantity < 5){
              lowInventoryCount += 1;
              console.log("Item ID " + res[i].item_id + "   " +
                          res[i].product_name +
                          " has only " + 
                          res[i].stock_quantity +
                          " left.");
            }
    }
    if (lowInventoryCount === 0){
      console.log("  ");
      console.log("       ***   All items have enough Inventory  ***   ");
      console.log("  ");
    }
    console.log("-------------------------------------------------------------------");
  });


} // end function displayLowInventory

//--------------------------------------------------------------------------------

function addToInventory() {


  } // end function addToInventory

//--------------------------------------------------------------------------------

function addNewProduct() {


} // end function addNewProduct

