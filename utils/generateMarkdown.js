// TODO: Create a function that returns a license badge based on which license is passed in

// const { default: inquirer } = require("inquirer");

// console.log(answer);
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseType = license;
   
    let userLicense = '';
    if (licenseType === 'MIT') {
        userLicense = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    } else if (licenseType === 'GPLv3') {
        userLicense = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (licenseType === 'apache') {
        userLicense = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    } else if (licenseType === 'ISC') {
        userLicense = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`    
    } else if (licenseType === 'unlicensed') {
        userLicense = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    } else if (licenseType = 'other') {
        userLicense = ``
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
    renderLicenseBadge(data);

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const formatReadMe = ({ data });
 
return `
  ## License
  ${renderLicenseBadge(data)}
  ${renderLicenseSection(data)}


`

}

module.exports = generateMarkdown;