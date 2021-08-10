// imports
const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const inquirer = require('inquirer');

// variables
// const profileDataArgs = process.argv.slice(2, process.argv.length);
const promtProject = (portfolioData) => {

    if (!portfolioData.projects) {
        portfolioData.projects = [];
    }

    console.log(`
        =================
        Add a new Project
        =================
    `)
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter porject name (Required): ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "Enter your GitHub username: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub uesername');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Enter a description about the project: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter project description');
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "languages",
            message: "Select what tools were used to build this porject: ",
            choices: ["JavaScript", "HTML", "CSS", "Node", "ES6", "jQuery", "Bootstrap",]
        },
        {
            type: "input",
            name: "link",
            message: "Enter GitHub link to your project: ",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter project link');
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "feature",
            message: "Confirm if you would like to feature this project: ",
            default: false
        },
        {
            type: "confirm",
            name: "confirmAddProject",
            message: "Confirm if you would like to add another project: ",
            default: false
        }
    ]).then(answers => {
        portfolioData.projects.push(answers);
        console.log(portfolioData.projects);
        if (answers.confirmAddProject) {
            return promtProject(answers);
        } else {
            return answers;
        }
    });
}

promtProject([]);
// Function calls
// pageTemplate.generatePage(userName, github);

// fs.writeFile("./index.html", pageTemplate.generatePage(userName, github), err => {
//     if (err) throw err;

//     console.log("Portfolio Complete! checkout index.html to see the output!");
// })