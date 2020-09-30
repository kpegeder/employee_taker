// Validation functions
function verifyNumber(input) {
  if (isNaN(input) || input === "") {
    return "Please enter a number";
  } else if (input.length >= 9) {
    return "Please enter a number under 10 digits";
  } else if (input < 0) {
    return "Please enter a positive number";
  }

  return true;
}

function verifyName(name) {
  if (name === "") {
    return "Please enter a name";
  } else if (!isNaN(name)) {
    return "Please don't enter a number";
  } else if (name.length > 26) {
    return "Please enter a shorter name";
  }

  return true;
}

function verifySchool(name) {
  if (name === "") {
    return "Please enter a school name";
  } else if (!isNaN(name)) {
    return "Please don't enter a number";
  } else if (name.length > 26) {
    return "Please enter a shorter school name";
  }
  return true;
}

function verifyEmail(name) {
  if (name === "") {
    return "Please enter an email name";
  } else if (!name.includes("@")) {
    return "Please enter an email with @";
  } else if (name.length > 26) {
    return "Please enter a shorter name";
  }
  return true;
}

function verifyGithub(name) {
  if (name === "") {
    return "Please enter a name";
  } else if (name.length > 39) {
    return "Please enter a shorter username";
  }
  return true;
}

const addEmployee = [
  {
    type: "input",
    message: "What is the employee's first name?",
    name: "employeeFirstName",
    validate: verifyName,
  },
  {
    type: "input",
    message: "What is the employee's last name?",
    name: "employeeLastName",
    validate: verifyName,
  },
  {
    type: "list",
    message: "What is the employee's role?",
    name: "employeeRole",
    choices: [
      "Sales Lead",
      "Salesperson",
      "Lead Engineer",
      "Software Engineer",
      "Account Manager",
      "Accountant",
      "Legal Team Lead",
      "Laywer",
    ],
  },
  // },
  // {
  //   type: "list",
  //   message: "What is your engineer's GitHub username?",
  //   name: "engineerGithub",
  //   validate: verifyGithub,
  // },
];

module.exports = addEmployee;
