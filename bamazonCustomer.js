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
//  console.log("connected as id " + connection.threadId + "\n");
  displayProducts();
  // give the user a 3 second delay to look at the products before inquirer is run
  setTimeout(function(){ userInput()},  3000); 
  
});

function displayProducts() {
//  console.log("Selecting all products...\n");
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
 //   Log all results of the SELECT statement
 //   console.log(res);
    console.log("PRODUCT ID" + " | " + 
                "       PRODUCT        " + " | " +
                "   PRICE   ");
    console.log("------------------------------------------------");
    for (var i = 0; i < res.length; i++) {
      console.log("    " + res[i].item_id + "    " + 
                  "      " + res[i].product_name + "    "  +
                  "            " + res[i].price);
    }
    console.log("------------------------------------------------");
  });
}

function userInput(){
      inquirer.prompt([
      {
        type: 'input',
        name: 'itemId',
        message: 'What is the PRODUCT ID of the item you want to purchase?',
        validate: function(input) {
            var integer = Number.isInteger(parseFloat(input));
            //Math.sign will return 1 if the number is a positive number
            var sign = Math.sign(input); 

            if (input === '') {
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
        type: 'input',
        name: 'quantity',
        message: 'How many would you like to purchase?',
        validate: function(input) {
            var integer = Number.isInteger(parseFloat(input));
            //Math.sign will return 1 if the number is a positive number
            var sign = Math.sign(input); 

            if (input === '') {
                    console.log("Please enter the number of items you want to purchase");
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
          console.log("Customer has selected: \n    item_id = "  + 
                       input.itemId + 
                       "\n    quantity = " + input.quantity);
          var item = input.itemId;
          var quantity = input.quantity;

          var queryStr = "SELECT * FROM products WHERE ?"; 
          // connect to the DB products table with the item id supplied by the user
          connection.query(queryStr, {item_id: item}, function(err, data) {
            //if there is an error stop processing
            if (err) throw err;
            //if there is no information returned ptompt to user to pick a different item and display table
            if (data.length === 0) {
              console.log("ERROR: Invalid Item ID. Please select a valid Item ID.");
              console.log(" ");
              console.log(" ");  
              displayProducts();
              setTimeout(function(){ userInput()},  1000); 
            } else {
              var productData = data[0];
              // select the first entry of the object returned and compare the quantity ordered with the stock_quantity
              if (quantity <= productData.stock_quantity) {
                console.log("Placing your Order");
                console.log(" ");
                console.log(" ");               

                var updateQueryStr = "UPDATE products SET stock_quantity = " + 
                (productData.stock_quantity - quantity) + 
                " WHERE item_id =  " + item;

                connection.query(updateQueryStr, function(err, data) {
                  if (err) throw err;

                  console.log("Your order has been successfully placed. \n Your total is $ "+ productData.price * quantity);
                  //end the connection
                  connection.end();
                })
              } else {
                console.log("Your order can't be fullfilled. \n We only have " + productData.stock_quantity + " in stock.");
                console.log("Please modify your order.");
                console.log(" ");
                console.log(" ");  
                displayProducts();
                setTimeout(function(){ userInput()},  1000); 

              }
            }
          });
        });
 }   