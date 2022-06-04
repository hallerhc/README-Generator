// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer=require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require("./utils/questions");

// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(`${process.cwd()}/${fileName}`, data)
}

// TODO: Create a function to initialize app
function init() {
    console.log("Hello, welcome")
    inquirer
        .prompt(questions)
        .then(res => {
            console.log("generating");
            writeToFile('test.md', generateMarkdown(res))
        })
}

// Function call to initialize app
init();
