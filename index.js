// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// const util = require('utils');
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt([
        {
           type: 'input',
           name: 'projectTitle',
           message: 'What is the title of your Project?'
        },
        {
            type: 'input',
            name: 'projectDescription',
            message: 'Please enter a description about your project.'
        },
        {
            type: 'input',
            name: 'projectInstall',
            message: 'Please explain the install needed.'
        },
        {
            type: 'input',
            name: 'projectUsages',
            message: 'What are the projects usages?'
        },
        {
            type: 'checkbox',
            name: 'projectLicense',
            message: 'Please choose the licenses you used for this project.',
            choices: [
                "MIT",
                "Apache",
                "BSD",
                "GPL",
                "Mozilla"
            ] 
        },
        {
            type: 'input',
            name: 'projectContribute',
            message: "Who Contributed with you on this project?"
        },
        {
            type: 'input',
            name: 'projectTests',
            message: 'Are there any test for this project?'
        },
        {
            type: 'input',
            name: 'projectQuestions',
            message: 'If you have any issues or questions, email me or send a message to GitHub'
        }
    ])
}

// Function call to initialize app
init();
