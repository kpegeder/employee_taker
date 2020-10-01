// Dependencies
const mysql = require("mysql");
const inquirer = require("inquirer");
const addEmployee = require("./questions/addEmployee");

// Create a connection to the database
const connection = mysql.createConnection({
  host: "localhost",

  //Your port; if not 3306
  port: 3306,

  // Your username
  user: "homework",

  // Your password
  password: "Hello123",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) throw err;
  console.log(`
  ,----------------------------------------------------------.
  |      ______                 _                            |
  |     |   __/ _ __ ___  _ __ | | ___  _   _  ___  ___      |
  |     |   _| |  _ '  _ \\  _ \\| |/ _ \\| | | |/ _ \\/ _ \\     |
  |     |  |___  | | | | | |_) | | (_) | |_| |  __/  __/     |
  |     |______|_| |_| |_|  __/|_|\\___/\\___, |\\___|\\___|     |
  |                      |__|           |___/                |
  |                                                          |
  |         __  __                                           |
  |        |  \\/  | __ _ _ __   __ _  __ _  ___ _ __         |
  |        | |\\/| |/ _' | '_ \\ / _' |/ _' |/ _ \\ '__|        |
  |        | |  | | (_| | | | | (_| | (_| |  __/ |           |
  |        |_|  |_|\\__,_|_| |_|\\__,_|\\__, |\\___|_|           |
  |                                  |___/                   |
  '----------------------------------------------------------'
    `);
  start();
  // removeEmployee();
});

async function start() {
  let answers = await inquirer.prompt(introQuestion);
  switch (answers.action) {
    case "View All Employees":
      break;
    case "View All Employees By Department":
      break;
    case "View All Employees By Manager":
      break;
    case "Add Employee":
      addNewEmployee();
      break;
    case "Remove Employee":
      removeEmployee();
      break;
    case "Update Employee Role":
      break;
    case "Update Employee Manager":
      break;
    case "Add Department":
      break;
    case "Remove Department":
      break;
    case "Update Department":
      break;
    case "Add Role":
      break;
    case "Remove Role":
      break;

    default:
      connection.end();
  }
}

// Questions
const introQuestion = [
  {
    name: "action",
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View All Employees",
      "View All Employees By Department",
      "View All Employees By Manager",
      "Add Employee",
      "Remove Employee",
      "Update Employee Role",
      "Update Employee Manager",
      "Add Department",
      "Remove Department",
      "Update Department",
      "Add Role",
      "Remove Role",
      "Exit",
    ],
  },
];

async function addNewEmployee() {
  let newEmployee = await inquirer.prompt(addEmployee);
  connection.query(
    "INSERT INTO employee SET ?",
    {
      first_name: newEmployee.employeeFirstName,
      last_name: newEmployee.employeeLastName,
      job_id: newEmployee.employeeRole,
    },
    function (err) {
      if (err) throw err;
      console.log("You succesfully added an new employee!");
      // re-prompt the user for if they want to bid or post
      start();
    }
  );
}

async function removeEmployee() {
  connection.query("SELECT first_name, last_name FROM employee", function (
    err,
    results
  ) {
    if (err) throw err;
    // console.log(results);
    inquirer
      .prompt([
        {
          name: "removeEmployee",
          type: "list",
          message: "Which employee doe you want to remove?",
          choices: function () {
            let choiceArr = [];
            for (let i = 0; i < results.length; i++) {
              choiceArr.push(
                i + " " + results[i].first_name + " " + results[i].last_name
              );
              // + " " + results[i].last_name);
            }
            return choiceArr;

            // choiceArr.push(results[i].)
          },
        },
      ])
      .then(function (response) {
        let name = response.removeEmployee.split(" ")[0];
        console.log(name);
        connection.query(
          "DELETE FROM employee WHERE ?",
          {
            id: name,
          },
          function (err, res) {
            if (err) throw err;
            console.log("You have removed an employee.");
            // Call readProducts AFTER the DELETE completes
            start();
          }
        );
        // response.removeEmployee.split(" ")[1];
        // console.log(response.removeEmployee.split(" ")[0]);
      });
  });
}
