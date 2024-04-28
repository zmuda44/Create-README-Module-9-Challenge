//gb added code remove
// const fs = require('fs')
// const index = require('')



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache 2.0":
      licenseBadge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
      break;
    case "GNU General Public License v3.0":
      licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case "MIT License":
      licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
      break;
    case "BSD 2":
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
      break;
    case "BSD 3":
      licenseBadge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
      break;
    case "Boost Software License 1.0":
      licenseBadge = ''
      break;
    case "Creative Commons Zero":
      licenseBadge = ''
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = ''
      break;
    case "GNU Aferro General Public License v3.0":
      licenseBadge = ''
      break;
    case "GNU General Public License v2.0":
      licenseBadge = ''
      break;
    case "GNU General Public License v2.1":
      licenseBadge = ''
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = ''
      break;
    case "The Unlicensed":
      licenseBadge = ''
      break;
    default: 
      licenseBagde = ''
    }

  return licenseBadge

// switch [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

// [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

// [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)

// [![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)

// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)

// [Badge License]: https://img.shields.io/badge/Boost-1.0-628c95?style=for-the-badge&labelColor=7cb0bc



}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case "GNU General Public License v3.0":
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
      break
    case "MIT License":
      licenseLink = 'https://opensource.org/licenses/MIT'
    default: 
      licenseLink = ''
    }

    return licenseLink
 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  licenseBagde = renderLicenseBadge(license)
  licenseLink = renderLicenseLink(license)
  console.log(licenseLink)  
  
  return `## License: ${licenseBadge} [${license}](${licenseLink})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // return `# ${data}`;
  // data = JSON.stringify(data)
  // writeToFile(fileName, data.title)
  
  const title = `# ${data.title}`
  const description =  `## Description: 
  ${data.description}`
  const license =  renderLicenseSection(data.license)
  const installation = `## Installation: 
  ${data.installation}`
  const usage = `## Usage: 
  ${data.usage}`
  const contribution = `## Contributions: 
  ${data.constribution}`
  const test = `## Testing: 
  ${data.test}`  
  const questions = `## Questions: 
  Github: [github.com/${data.github}](https://github.com/${data.github}) Email: [${data.email}](mailto: ${data.email})`
  
  return `${title}
  ${license}
  ## Table of Contents
  * [Description](#description)
  * [Installation Instructions](#installation)
  * [Usage Instructions](#usage)
  * [Contribution Information](#contributions)
  * [Test Information](#testing)
  * [Questions](#questions)
  ${description}
  ${installation}
  ${usage}
  ${contribution}
  ${test}  
  ${questions}
  works cited: https://gist.github.com/kofiav/c1059e1075b67582e86b07aa9759e20d`





  // function writeToFile(data) {
//   fs.writeFile("readme2.md", `${title}
// ${description}
// ${license}`, (err) =>
//   err ? console.error(err) : console.log("Thanks! Your Professional Readme is generated"))

// }

}

module.exports = generateMarkdown;
