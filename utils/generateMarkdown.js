// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const cap = word => word[0].toUpperCase() + word.slice(1,word.length)

const makeSections = (sections) => {
  var headers = Object.keys(sections);
  return headers.filter(header => sections[header] !== '' )
  .map(header => {
    return`
## ${cap(header)}

${sections[header]}
  `}).join('')
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}

## Table of Contents

${makeSections(data.sections)}

## Usage

## Tests

## Questions

`;
}

module.exports = generateMarkdown;
