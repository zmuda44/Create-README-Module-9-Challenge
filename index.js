const fs = require("fs");
const inquirer = require("inquirer")
const generateMarkdown = require('./utils/generateMarkdown')


// User input
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
  {
    type: "input",
    message: "Please enter installation instructions",
    name: "installation",
  }, 
  {
    type: "input",
    message: "Please enter how to use the application",
    name: "usage",
  }, 
  {
    type: "input",
    message: "Please enter any contributions guidelines",
    name: "contribution",
  }, 
  {
    type: "input",
    message: "Please enter any test instructions",
    name: "test",
  }, 
  {
    type: 'list',
      message: 'Choose your license for your project.',
      name: 'license',
      choices: [
          { value: 'Apache 2.0' },   
          { value: 'GNU General Public License v3.0' },  
          { value: 'MIT License' },  
          { value: 'BSD 2' },  
          { value: 'BSD 3' }, 
          { value: 'Boost Software License 1.0' }, 
          { value: 'Creative Commons Zero' }, 
          { value: 'Eclipse Public License 2.0' }, 
          { value: 'GNU Aferro General Public License v3.0' }, 
          { value: 'GNU General Public License v2.0' }, 
          { value: 'GNU General Public License v2.1' }, 
          { value: 'Mozilla Public License 2.0' }, 
          { value: 'The Unlicensed' },           
      ]
  },
  {
    type: "input",
    message: "Please enter your github user name",
    name: "github",
  },
  {
    type: "input",
    message: "Please enter your email",
    name: "email",
  },  
];

function writeToFile(fileName, data) {
  // console.log(data)
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
  err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))
}

//Function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
    const fileName = "sample-README.md";
    writeToFile(fileName, response);
    }
  );
}

// Function call to initialize app
init();

