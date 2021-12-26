// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { return license }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

const cap = word => word[0].toUpperCase() + word.slice(1,word.length)

function renderLink(header) {
  return `[${cap(header)}](#${header})`
}

const filteredSection = (header, text) => {
  if (!text) {
    return '';
  } else {
    return `
## ${header}

${text}`
  }
};


  
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, sections, github, email, link} = data
  const headers = Object.keys(sections);

  return `# ${title}

## Description

${sections.description}

## Table of Contents

${headers.map(header => renderLink(header)).join(' \n\n')}

[Questions](#questions)

${filteredSection('Installation',sections.installation)}

${filteredSection('Usage',sections.usage)}

## License

${renderLicenseBadge(sections.license)}

${filteredSection('Contributing',sections.contributing)}

${filteredSection('Tests',sections.tests)}

## Questions

GitHub Username: ${github}

GitHub Profile: https://github.com/${github}

Email: ${email}

Project Repository/URL: ${link}

`;
}

module.exports = generateMarkdown;
