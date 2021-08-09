const fs = require('fs');
const pageTemplate = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [userName, github] = profileDataArgs;

pageTemplate.generatePage(userName, github);

fs.writeFile("./index.html", pageTemplate.generatePage(userName,github), err => {
    if (err) throw err;

    console.log("Portfolio Complete! checkout index.html to see the output!");
})