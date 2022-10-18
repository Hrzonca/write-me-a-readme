// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(data) {
    let licenseType = data.license;
    let userLicense = '';
    if (licenseType === 'MIT') {
        userLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-blueviolet.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseType === 'GPLv3') {
        userLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-green.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseType === 'apache') {
        userLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-critical.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (licenseType === 'ISC') {
        userLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-informational.svg)](https://opensource.org/licenses/ISC)`
    } else if (licenseType === 'unlicensed') {
        userLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-lightgrey.svg)](http://unlicense.org/)`
    } else if (licenseType = 'other') {
        userLicense = ``
    }
    return userLicense;
}

// Function that returns the license section of README
function renderLicenseSection(data) {
    return renderLicenseBadge(data);

}

//function to format the readme
const formatReadMe = ({ projectName, description, installation, usage, contribution, testing, gitHub, email }) => {

    return `
# ${projectName}

## Table of Content
- [Decription](#description)
- [Instaltion](#installation)
- [Usagae](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Question](#question)

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
}
// Function to generate markdown for README. 
function generateMarkdown(data) {
    //including the formatReadMe content in the markdown
    var format = formatReadMe(data);
    //return this on the readme
    return `
    ${renderLicenseSection(data)}

    ${format}
    ## License
    ${renderLicenseSection(data)}
`
}


module.exports = generateMarkdown;