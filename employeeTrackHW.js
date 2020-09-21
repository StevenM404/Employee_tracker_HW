var mysql = require("mysql");
var inquirer = require("inquirer");
var consoleTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "employeeHW_DB"
});

connection.connect((err) => {
    if (err) throw err;

    console.log("Employee Tracker Running...")
    trackerChoices();
})

function trackerChoices(){
    inquirer.prompt({
        type: "list",
        message: "Choices",
        name: "choices",
        choices: [
            "View All Employees",
            "View All Roles",
            "View All Departments",
            "Add Employee",
            "Add Department",
            "Add Role"
        ]
    }).then((answer) => {
        switch (answer.choices) {
            case "View All Employees":
                viewAllEmployees();
                break;

            case "View All Roles":
                viewAllRoles();
                break;

            case "View All Departments":
                viewAllDepartments();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add Department":
                addDeptartment();
                break;

            case "Add Role":
                addRole();
                break;
        };
    });
};

function viewAllEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        if (err) throw err;
        console.table(res);
        trackerChoices();
    });
};

function viewAllRoles() {
    connection.query("SELECT * FROM role", function (err, res) {
        if (err) throw err;
        console.table(res);
        trackerChoices();
    });
};

function viewAllDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        console.table(res);
        trackerChoices();
    });
};

function addEmployee() {
    inquirer.prompt([{
        name: "firstName",
        type: "input",
        message: "First Name: "
    },{
        name: "lastName",
        type: "input",
        message: "Last Name: "
    }]).then((answer) => {
        connection.query("INSERT INTO employee SET ?", {
            first_name: `${answer.firstName}`,
            last_name: `${answer.lastName}`
        },function (err, res) {
            if (err) throw err;
            console.log("Employee Added!");
            trackerChoices();
        });
    });
};

function addDeptartment() {
    inquirer.prompt([{
        name: "name",
        type: "input",
        message: "Department Name: "
    }]).then((answer) => {
        connection.query("INSERT INTO department SET ?", {
            name: `${answer.name}`
        },function (err, res) {
            if (err) throw err;
            console.log("Department Added!");
            trackerChoices();
        });
    });
};

function addRole() {
    inquirer.prompt([{
        name: "title",
        type: "input",
        message: "Title: "
    },{
        name: "salary",
        type: "input",
        message: "Salary: "
    }]).then((answer) => {
        connection.query("INSERT INTO role SET ?", {
            title: `${answer.title}`,
            salary: `${answer.salary}`
        },function (err, res) {
            if (err) throw err;
            console.log("Role Added!");
            trackerChoices();
        });
    });
};