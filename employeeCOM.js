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
  connection.end();
});

async function start() {
  let answers = await inquirer.prompt(introQuestion);
  console.log(answers);
}

// Questions
const introQuestion = [
  {
    name: "choice",
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
