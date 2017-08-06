var fs = require("fs");
var inquirer = require("inquirer");

// link modules
var bamazonCustomer = require("./bamazonCustomer.js");
var bamazonManager = require("./bamazonManager.js");

inquirer
  .prompt([
     {type: "list",
      message: "What is your function?",
      choices: ["Customer", "Manager"],
      name: "command"
    }
 ])
  .then(function(inquirerResponse) {
      switch(inquirerResponse.command) {
          case "Customer":
              bamazonCustomer.startCustomer();
              break;
          case "Manager":
              bamazonManager.startManager();
              break;
          default:

          }
    }); //end function(inquirerResponse)