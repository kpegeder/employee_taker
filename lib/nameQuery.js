const idQuery = require("./idQuery");

class nameQuery extends idQuery {
  constructor(id, title, salary) {
    super(id);
    this.title = title;
    this.salary = salary;
  }

  addRole_Q() {
    return `INSERT INTO job (title, salary, department_id)
VALUES ("${this.title}", ${this.salary}, ${this.id})`;
  }
}

module.exports = nameQuery;
