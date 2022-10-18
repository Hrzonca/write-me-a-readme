// Packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let generateMarkdown = require('./utils/generateMarkdown.js')

// Array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'projectName'
        },
        {
            type: 'input',
            message: 'Write a description of your project.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'How do you install your application?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What are the uses for your application?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Who contributed to this application?',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'How do you test this application?',
            name: 'testing'
        },
        {
            type: 'input',
            message: 'What is your GitHub URL?',
            name: 'gitHub'
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'list',
            message: 'What license did you use?',
            choices: ['MIT', 'GPLv3', 'apache', 'ISC', 'unlicensed', 'other'],
            name: 'license'
        }

    ])
    //Answer is any answer from the questions list
    .then((answer) => {
        //after questions are answered the generateMarkDown page creates the readme file
        const mark = generateMarkdown(answer);
        console.log(mark);
        //writing the readme file 
        fs.writeFile('userREADME.md', mark, (err) => err ? console.log(err) : console.log('Successfully created README'))

    })




