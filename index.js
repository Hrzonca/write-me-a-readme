//ask about renderlicensesection and geratemarkdown in class

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
    .then(({ license, projectName, description, installation, usage, contribution, testing, gitHub, email }) => {
        console.log(license);
        const readMePage = formatReadMe(license, projectName, description, installation, usage, contribution, testing, gitHub, email);
        console.log(readMePage);
        const mark = generateMarkdown(license);
        console.log(mark);
        fs.writeFile('README.md', readMePage, (err) => err ? console.log(err) : console.log('Successfully created README'))

    })

const formatReadMe = ({ projectName, description, installation, usage, contribution, testing, gitHub, email }) => {

    return `
# ${projectName}

## Table of Content
- [project decription](#description)
- [project instaltion](#installation)
- [project usagae](#usage)
- [project contribution](#contribution)
- [project testing](#testing)
- [project github](#github)

## Decription
${description}

## Installation
${installation}

## Usage
${usage}

## Constibution
${contribution}

## Testing
${testing}

## Questions
${gitHub}
${email}
`
    formatReadMe();

}

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under



