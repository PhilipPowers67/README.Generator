// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseBadge = [];
  license.forEach(item => {
    licenseBadge.push(`![GitHub license](https://img.shields.io/badge/license-${item}-blue.svg)`)
  });
  return licenseBadge.join(" ");
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description
${data.projectDescription}

## Table of Contents:
- [Description](#Description)
- [Installation](#Installation)
- [Usages](#Usages)
- [Licenses](#Licenses)
- [Contributing](#Contributing)
- [Test](#Tests)
- [Questions](#Questions)

 ## Installation
 ${data.projectInstall}
 ## Usages
 ${data.projectUsages}
 ## Licenses
 ${renderLicenseBadge(data.projectLicense)}
 ## Contribution
 ${data.projectContribute}
 ## Tests
${data.projectTests}
 ## Questions
 Any Questions or concerns you may have, You may reach me by email @ ${data.projectEmail} or message me on github @ [${data.projectGithub}](https://github.com/${data.projectGithub})
`;
}

module.exports = generateMarkdown;