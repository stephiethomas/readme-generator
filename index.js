// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const generateMarkdown = require('./potential-enigma/utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'Project Title'
},
{
    type: 'input',
    name: 'description',
    message: 'Project Description'
},
{
    type: 'input',
    name: 'tests',
    message: 'Tests'
},
{
    type: 'input',
    name: 'installation',
    message: 'Installation'
},
{
    type: 'input',
    name: 'usage',
    message: 'Usage'
},
{
    type: 'input',
    name: 'email',
    message: 'Email Address'
},
{
    type: 'List',
    name: 'questions',
    message: 'GitHub Username'
},
{
    type: 'input',
    name: 'contributing',
    message: 'Contributions'
},
{
    type: 'list',
    name: 'license',
    message: 'License',
    choices: ['MIT', 'ISC', 'Apache', 'None'],
},
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('newReadMe.md', data, err => {
        if (err) {throw err}
        else {console.log("ReadMe Generated")}
    })

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        if (answers) {
            console.log("Success")

        } else {
            console.log ("No try again!")
        }
        const data = generateMarkdown.generateMarkdown(answers)
        writeToFile(data);
    })
}

// Function call to initialize app
init();
