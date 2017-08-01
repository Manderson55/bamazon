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

      inquirer.prompt([
      {
        type: 'input',
        name: 'itemId',
        message: 'What is the PRODUCT ID of the item you want to purchase?',
        validate: function(input) {
               if (input === '') {
                   console.log('Please enter the PRODUCT ID');
                   return false;
               } else {
                   return true;
                  }
            }
      },
      {
        type: 'input',
        name: 'quantity',
        message: 'How many would you like to purchase?',
        validate: function(input) {
               if (input === '') {
                   console.log('Please enter a valid quantity');
                   return false;
               } else {
                   return true;
                 }
            }
      },
      ]).then(function(answers) {
          console.log("after user input!");
      });
  

  // logs the actual query being run
//  console.log(query.sql);
//}

// function updateProducts() {
//   console.log("Updating Products...\n");
//   var query = connection.query(
//     "UPDATE products SET ? WHERE ?",
//     [
//       {
//         stock_quantity: 100
//       },
//       {
//         product_name: "Rocky Road"
//       }
//     ],
//     function(err, res) {
//       console.log(res.affectedRows + " products updated!\n");

//       // decide what function to call after product quantity is updated
//     }
//   );

//   // logs the actual query being run
//   console.log(query.sql);
// }



 //   connection.end();
