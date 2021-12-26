// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer =  require('inquirer');
const { resolve } = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

const cla = process.argv//.slice(1);

const mockData = {
  title: 'readme gen',
  sections: {
    description: 'a readme generator',
    installation: 'install node, npm install inquirer, node init',
    contributing: 'Not taking pull requests at the moment.',
    usage: '`node index.js ["-d" for debug]`',
    tests: 'do some tests',
    license: 'CC0',
  },
  sectionsArr: [
    {
      section: 'Description',
      description: 'a readme gen',
      text: ''
    }
  ],
  confirmLicense: true,
  github: 'scottrohrig',
  email: 'sco@email.co',
  link: 'https://github.com/scottrohrig'
};

// TODO: Create an array of questions for user input
/* README.md is generated with the title of my project and 
sections entitled: Description, Table of Contents, Installation, 
Usage, License, Contributing, Tests, and Questions
Section Titles: Description, Installation, Usage, Contributing, and Tests
license, gh-username, email */
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'TITLE: What is the title of your document? (Required)',
    validate: title => {
      if (title) {
        return true;
      } else {
        console.log('Provide a valid title')
        return false;
      }
    }

  },
  {
    type: 'input',
    name: 'description',
    message: 'DESCRIPTION: Provide a short description pertaining to your project. (Required)',
    validate: description => {
      if (description) {
        return true;
      } else {
        console.log('Provide a valid description')
        return false;
      }
    }

  },
  {
    type: 'input',
    name: 'installation',
    message: 'INSTALLATION: What are the steps required to install your project?',    
  },
  {
    type: 'input',
    name: 'usage',
    message: 'USAGE: Provide instructions and examples for use.',    
  },
  {
    type: 'input',
    name: 'tests',
    message: 'TESTS: Go the extra mile and write tests for your application. Then provide examples on how to run them.',
    
  },
  {
    type: 'input',
    name: 'confirmLicense',
    message: 'Would you like to add a license?',
    default: true
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license type',
    choices: ['CC0', 'MIT', 'GPL v3', 'Apache 2.0'],
    when: ({confirmLicense}) => confirmLicense 
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username',
    validate: github => {
      if (github) {
        return true;
      } else {
        console.log('Provide a valid github')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email',
    validate: email => {
      if (email) {
        return true;
      } else {
        console.log('Provide a valid email')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'link',
    message: 'Enter your project url',
    validate: link => {
      if (link) {
        return true;
      } else {
        console.log('Provide a valid url')
        return false;
      }
    }
  },
];

// TODO: Create a function to write README file
const writeToFile = (fileContent) => {
    return new Promise((resolve, reject) => {
      fs.writeFile("./dist/README.md", fileContent, (err) => {
        if (err) {
          reject(err);
          return;
        }
  
        resolve({
          ok: true,
          message: "File created!",
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() {

  if (cla.includes('-d')) {
    let data = generateMarkdown(mockData);
    writeToFile(data);
    return;
  }
  inquirer.prompt(questions)
    .then(answers => {
      let data = generateMarkdown(answers);
      writeToFile(data);
    });
}

// Function call to initialize app
init();
