//Create license badge for any license that has a badge. If license not listed, return an empty string
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
      licenseBadge = '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
      break;
    case "Creative Commons Zero":
      licenseBadge = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = ''
      break;
    case "GNU Aferro General Public License v3.0":
      licenseBadge = ''
      break;
    case "GNU General Public License v2.0":
      licenseBadge = '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'
      break;
    case "GNU General Public License v2.1":
      licenseBadge = ''
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
      break;
    case "The Unlicensed":
      licenseBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
      break;
    default: 
      licenseBagde = ''
    }

  return licenseBadge
}

//Create license badge for any license that has a badge. If license not listed, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache 2.0":
      licenseLink = 'https://opensource.org/licenses/Apache-2.0'
      break;
    case "GNU General Public License v3.0":
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0'
      break;
    case "MIT License":
      licenseLink = 'https://opensource.org/licenses/MIT'
      break;
    case "BSD 2":
      licenseLink = 'https://opensource.org/licenses/BSD-2-Clause'
      break;
    case "BSD 3":
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause'
      break;
    case "Boost Software License 1.0":
      licenseLink = '(https://www.boost.org/LICENSE_1_0.txt'
      break;
    case "Creative Commons Zero":
      licenseLink = 'http://creativecommons.org/publicdomain/zero/1.0/'
      break;
    case "Eclipse Public License 2.0":
      licenseLink = ''
      break;
    case "GNU Aferro General Public License v3.0":
      licenseLink = ''
      break;    
    case "GNU General Public License v2.0":
      licenseLink = 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
      break;
    case "GNU General Public License v2.1":
      licenseLink = ''
      break;
    case "Mozilla Public License 2.0":
      licenseLink = 'https://opensource.org/licenses/MIT'
      break;
    case "The Unlicensed":
      licenseLink = 'https://opensource.org/licenses/MIT'
      break;    
    default: 
      licenseLink = ''
    }

    return licenseLink 
}

//Create License Section in README using the functions above. If no license, return an empty string
function renderLicenseSection(license) {
  licenseBadge = renderLicenseBadge(license)
  licenseLink = renderLicenseLink(license)
  
  
  if(license == "") {
    return ""
  }
    return `## License: ${licenseBadge} [${license}](${licenseLink})`
}

//Generate README
function generateMarkdown(data) {
   
  const title = `# ${data.title}`
  const description =  `## Description: 
  ${data.description}`
  
  const license =  renderLicenseSection(data.license)
  
  let installation;
  if(data.installation == "") {
      installation = "";
  }
  else {
      installation = `## Installation: 
  ${data.installation}`
  }
  
  let usage
  if(data.usage == "") {
    usage = ""
  }
  else {
    usage = `## Usage: 
  ${data.usage}`
  }

  let contribution 
  if(data.contribution == "") {
    contribution = ""
  }  
  else {
    contribution = `## Contributions: 
  ${data.contribution}`
  }

  let test
  if(data.test == "") {
    test = ""; 
  }
  else {
    test = `## Testing: 
  ${data.test}` 
  } 
  
  const questions = `## Questions: 
  Github: [github.com/${data.github}](https://github.com/${data.github}) Email: ${data.email}`
  
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

  ${questions}`
}

module.exports = generateMarkdown;
