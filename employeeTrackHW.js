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
        choices: [
            "View All Employees",
            "View All Employees By Roles",
            "View All Employees By Departments",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Update Employee"
        ]
    }).then((answer) => {
        
    })
}