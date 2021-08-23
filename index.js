//import inquirer
const inquirer = require("inquirer");
//write html
const fs = require('fs');
const generatedHTML = './dist/generatedHTML';
//import the employee classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");


/*9.THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
10.WHEN I enter the team manager’s name, employee ID, email address, and office number
11.THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
12.WHEN I select the engineer option
13.THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
14.WHEN I select the intern option
15.THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
16.WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated*/



// TODO: Create an array of questions for user input
const userInput = ([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "what is the team manager's id?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is team manager's email?",
     
    },
    {
      type: "input",
      name: "managerNumber",
      message: "What is team manager's office number?",
      
    },
    {
        type: "list",
        name: "employeeType",
        message: "Which type of team member would like to add?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    }
  ])
  .then(answers => {
      //
      fs.writeFileSync(generatedHTML, "");
  })
.catch(error => {
    if (error.isTtyError) {
        
    } else {

    }
});
  

