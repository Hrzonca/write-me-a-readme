// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

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
            choices: ['MIT', 'GPL', 'CC--0'],
            name: 'license'
        }

    ])
    .then((answer) => {
        console.log(answer);
        const readMePage = formatReadMe(answer);
        fs.writeFile('README.md', readMePage, (err) => err ? console.log(err) : console.log('Successfully created README')
        );
    });

const formatReadMe = ({ projectName, description, installation, usage, contribution, testing, gitHub, license, email }) => {
    return `
# ${projectName}

## Decription
${description}

## Table of Content
- [project decription](#description)
- [project instaltion](#installation)
- [project usagae](#usage)
- [project contribution](#contribution)
- [project testing](#testing)
- [project github](#github)

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

## License
<span class='badge badge-danger'>${license}</span>

`}

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository done
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions done Switch the layout
// WHEN I enter my project title
// THEN this is displayed as the title of the README done
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions done
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests done
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README