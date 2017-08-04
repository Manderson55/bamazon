var fs = require("fs");
var inquirer = require("inquirer");

// link modules
var bamazonCustomer = require("./bamazonCustomer.js");
var bamazonManager = require("./bamazonManager.js");

inquirer
  .prompt([
     {type: "list",
      message: "What is your function?",
      choices: ["Customer", "Manager", "Supervisor"],
      name: "command"
    }
 ])
  .then(function(inquirerResponse) {
        switch(inquirerResponse.command) {
          case "Customer":

              break;
          case "Manager":

              break;
          default:

          }
    }); //end function(inquirerResponse)