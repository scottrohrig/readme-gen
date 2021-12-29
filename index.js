const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const cla = process.argv.slice(2);

const mockData = {
  title: 'Professional README Generator',
  description: 'Reduce the overhead when creating project repositories by using this readme generator. A node-based CLI to streamline the process of making professional project README files.',
  installation: '`git clone` this repository. `npm i` to intall the dependencies from `./package.json`, etc. [`inquirer`](https://www.npmjs.com/package/inquirer)',
  contributing: 'Not taking pull requests at the moment.',
  usage: "To run this Node.js CLI, navigate to the repository's root directory and execute the following command, `node index.js`. Follow the prompts to add your GitHub information and project details. You may view the output file located at `./dist/README.md`",
  tests: '',
  questions: 'To get in touch, see below:',
  license: 'CC0',
  confirmLicense: true,
  github: 'scottrohrig',
  email: 'scott.rohrig@gmail.com',
  link: 'readme-gen'
};

const questions = [
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
    name: 'title',
    message: 'TITLE: What is the title of your project? (Required)',
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
    name: 'link',
    message: 'Enter your repository name',
    validate: link => {
      if (link) {
        return true;
      } else {
        console.log('Provide a valid url')
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
    message: 'INSTALLATION: What are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'USAGE: Provide instructions and examples for use.'
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'CONTRIBUTING: Add any specifications for others to contribute to this project.'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'TESTS: Go the extra mile and write tests for your application. Then provide examples on how to run them.'
  },
  {
    type: 'input',
    name: 'questions',
    message: 'QUESTIONS: Write a short description directing users to contact you (e.g., You can contact me at the links below).'
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
    choices: ['CC0', 'MIT', 'GPL-3.0', 'Apache-2.0'],
    when: ({ confirmLicense }) => confirmLicense
  }
];

const writeToFile = (fileContent) => {
  fs.writeFile("./dist/README.md", fileContent, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log('File write success')
  });
};

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
