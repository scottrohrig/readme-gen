// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return `![${license} License](https://img.shields.io/badge/License-${license}-orange)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { return `[${renderLicenseBadge(license)}](https://choosealicense.com/licenses/${license.toLowerCase()})` }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, confirmLicense) { return confirmLicense ? `
## License

${renderLicenseLink(license)}

` : ''}

const cap = word => word[0].toUpperCase() + word.slice(1,word.length)

function renderLink(header) {
  return `[${cap(header)}](#${header})`
}

const filterSection = (header, text) => {
  return !text ? '' : `
## ${header}

${text}`
};


  
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { 
    title, github, email, link, description, installation, usage, license, contributing, tests, confirmLicense, questions
  } = data

  // list of sections containing content
  const headers = [
    'description','installation','usage',
    'contributing','tests','license']
      .filter(v => data[v] !== '');

  return `# ${title}

***

## Description

${description}

## Table of Contents

${headers.map(header => renderLink(header)).join(' \n\n')}

[Questions](#questions)

${filterSection('Installation', installation)}

${filterSection('Usage', usage)}

${renderLicenseSection(license, confirmLicense)}

${filterSection('Contributing', contributing)}

${filterSection('Tests', tests)}

***

## Questions

${questions}

- GitHub Profile: [@${github}](https://github.com/${github})

- Email: ${email}

- Project Repository/URL: https://github.com/${github}/${link}

`;
}

module.exports = generateMarkdown;
