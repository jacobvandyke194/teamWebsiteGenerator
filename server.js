const inquirer = require('inquirer');
const fs = require('fs');
const engineerConstructor = require('./helpers/engineerConstructor.js');
const internConstructor = require('./helpers/internConstructor.js');
const managerConstructor = require('./helpers/managerConstructor.js');
const teamNameConstructor = require('./helpers/teamNameConstructor.js');
let createSite;
const teamConstruct = [];
let teamTitle = [];

// inits prompts and creates website in functional order:
init()
.then(managerQuestion)
.then(employeeQuestions)
.then(teamConstruct => {
    return createTeamPage(teamConstruct);
})
.catch(err => {
    console.log(err);
})


function init(){
    return inquirer
    .prompt([
        {
            type: "input",
            name: 'teamName',
            message: "Enter Team Name Name:"
        }
    ])
    .then(answers => {  
        teamTitle.push(answers.teamName);
        console.log(teamTitle);
    })
}
function managerQuestion(){
    return inquirer
    .prompt([
        {
            type: "input",
            name: 'name',
            message: "Enter Manager Name:"
        },
        {
            type: "input",
            name: "id",
            message: "Enter Manager ID:"
        },
        {
            type: "input",
            name: 'email',
            message: "Enter Manager's Email:"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter Office Number:"
        }
    ]) 
    .then(answers => {
        const manager = new managerConstructor(answers.teamName, answers.name, answers.id, answers.email, answers.officeNumber);
        console.log(manager);
        teamConstruct.push(manager);

    })
};

function employeeQuestions(){
    console.log("Would you like to add additional staff members?");
    return inquirer
    .prompt([
        {
            type: "list",
            name: "role",
            message: "Select and employee role you would like to add:",
            choices: ["intern", "engineer"]
        },
        {
            type: 'input',
            name: 'name',
            message: `Enter Employee Name:`,
        },
        {
            type: 'input',
            name: 'email',
            message: `Enter Employee Email:`,
        },
        {
            type: 'input',
            name: 'id',
            message: `Enter Employee ID:`,
        },
        {
            type: 'input',
            name: 'school',
            message: `Enter Employee School Name:`,
            when: (input) => input.role == 'intern',
        },
        {
            type: 'input',
            name: 'github',
            message: `Enter Engineer GitHub:`,
            when: (input) => input.role == 'engineer',
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: "Would you like to input more Employees?"
        }
    ])
    .then(answers => {
        let {teamName, name, email, id, role, school, github, confirm } = answers;
        let employee = answers;
        if (role == "intern") {
            employee = new internConstructor (answers.name, answers.id, answers.email, answers.school);
            console.log(employee);
        }
        else if (role == "engineer") {
            employee = new engineerConstructor (answers.name, answers.email, answers.id, answers.github);
            console.log(employee);
        }
        teamConstruct.push(employee);
        if (confirm) {
            return employeeQuestions(teamConstruct);
        } else {
            console.log(teamConstruct);
            return teamConstruct;
        }
    })
};

const createTeamPage = () => {
    HTML = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <!-- links to stylesheets -->
        <link rel="stylesheet" href="./assets/style.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    
    <body>
        <div class="card">
            <div class="card-header bg-success ">
                <h1 class="teamName">${teamTitle[0]}</h1>
            </div>
        </div>`;
teamConstruct.forEach(employee => {
    createCard(employee);
});
HTML += ` 
<script src="./script.js"></script>
<script src="./index.js"></script>
</div>

</body>

</html>`;

fs.writeFile(`./public/${teamTitle}.html`, HTML, err => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Creating Team Website...")
    }
});

};

const createCard = employee => {
    HTML += `
    <!-- Below is mockup of Cards -->
    <div class="card-columns d-flex flex-wrap justify-content-center">
        <div class="card d-flex align-self-center" style="width: 18rem;">
            <div class="card-body">
                <h3 class="card-title">${employee.name}</h3>
                <h5> ${employee.getRole()}</h5>
                <ul>
                <li>ID: ${employee.id}</li>
                <li>Electronic Mail: <a href="mailto:${employee.email}">${employee.email}</a></li>`

                if (employee.getRole() == 'Manager'){
                    HTML += `<li>Office #: ${employee.officeNumber}</li>`
                } if (employee.getRole() == 'Intern'){
                    HTML += `<li>University: ${employee.school}</li>`
                } if (employee.getRole() == 'Engineer'){
                    HTML += `<li>GitHub: <a href="https://www.github.com/${employee.github}/">${employee.github}</a></li>`
                }

              HTML +=  `
                </ul>
            </div>
        </div>
    `
};

