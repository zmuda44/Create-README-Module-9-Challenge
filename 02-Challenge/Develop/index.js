// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')
console.log(generateMarkdown)

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your README",
    name: "title",
  },
  {
    type: "input",
    message: "What is the description of your README",
    name: "description",
  },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>
    console.log(response)
  );
}

// Function call to initialize app
init(generateMarkdown());
