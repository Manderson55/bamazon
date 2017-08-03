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
                    displayProducts();
                    // wait 2 seconds after displayProducts and before addToInventory prompts
                    setTimeout(function(){ addToInventory()},  2000);                     
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
    console.log(" ");
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
  //end the connection
  connection.end();

} // end function displayLowInventory

//--------------------------------------------------------------------------------

function addToInventory() {

    
    inquirer.prompt([
      {
        type: "input",
        name: "itemId",
        message: "What is the PRODUCT ID of the item you want to add Inventory to?",
        validate: function(input) {
            var integer = Number.isInteger(parseFloat(input));
            //Math.sign will return 1 if the number is a positive number
            var sign = Math.sign(input); 

            if (input === " ") {
                    console.log("Please enter the Product ID");
                    return false;
            } else {
                   if (integer && (sign === 1)) {
                        return true;
                    } else {
                        return "Please enter a number greater than 0 with no decimals.";
                        return false;
                       }
                   }
                   
            }

      },
      {
        type: "input",
        name: "quantity",
        message: "How many would you like to add to the Inventory?",
        validate: function(input) {
            var integer = Number.isInteger(parseFloat(input));
            //Math.sign will return 1 if the number is a positive number
            var sign = Math.sign(input); 

            if (input === " ") {
                    console.log("Please enter the number of items you want to add");
                    return false;
            } else {
                   if (integer && (sign === 1)) {
                        return true;
                    } else {
                        console.log("   Please enter a number greater than 0 with no decimals.");
                        return false;
                       }
                    }
          }          
      },
      ]).then(function(input) {
          console.log("\n You want to add " + input.quantity + " to item ID # "  +  input.itemId);
          var item = input.itemId;
          var quantity = parseInt(input.quantity);
          console.log(typeof(quantity));
          var queryStr = "SELECT * FROM products WHERE ?"; 
          // connect to the DB products table with the item id supplied by the manager
          connection.query(queryStr, {item_id: item}, function(err, data) {
            //if you can't find the product and returns an error
            if (err) throw err;
            //if there is no information returned prompt to manager to check the item ID and display the products again
            if (data.length === 0) {
              console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
              console.log(" ");
              console.log(" ");  
              displayProducts();
              setTimeout(function(){ addToInventory()},  1000); 
            } else {

              var productData = data[0];
              // select the first entry of the object returned and compare the quantity ordered with the stock_quantity
    
              console.log("Product = " + productData.product_name); //display item being ordered
              console.log("Quantity Available = " + productData.stock_quantity); //display quantity available

              console.log(" "); 
              console.log("Updating Inventory");
              console.log(" ");
              
              // updating the stock_quantity in the DB to add the new Inventory amount
              var newStockQuantity = 0;
              console.log(typeof(newStockQuantity));
              console.log(typeof(quantity));
              newStockQuantity = productData.stock_quantity + quantity;
              console.log(newStockQuantity);
              console.log(typeof(newStockQuantity));

              var updateQueryStr = "UPDATE products SET stock_quantity = " + 
                newStockQuantity + 
                " WHERE item_id =  " + item;

                connection.query(updateQueryStr, function(err, data) {
                  if (err) throw err;
 
                  console.log("Your have succesfully added to the Inventory");
                  console.log("The new Stock Quantity for Item ID # " + item + " is " + newStockQuantity);
                  console.log(" ");
                  console.log(" ");  

                  //end the connection
                  connection.end();
                });
              } //end else if data length is === 0
            }); // end connection query
          }); // end then.
       
  } // end function addToInventory

//--------------------------------------------------------------------------------

function addNewProduct() {


} // end function addNewProduct

