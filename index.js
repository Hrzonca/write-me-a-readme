//ask about renderlicensesection and geratemarkdown in class

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
let generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
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
            message: 'How can people contribute to this application?',
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
    .then((answer) => {
        const mark = generateMarkdown(answer);
        console.log(mark);
    
        fs.writeFile('README.md', mark, (err) => err ? console.log(err) : console.log('Successfully created README'))

    })

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



