class idQuery {
  constructor(id) {
    this.id = id;
  }

  viewAll_Q() {
    return `SELECT staff.id, staff.first_name, staff.last_name, job.title, job.salary, department.branch, manager_id AS manager
FROM employee staff
INNER JOIN job ON job.id = staff.job_id
INNER JOIN department ON department.id = job.department_id;`;
  }

  viewDepartment_Q() {
    return `SELECT staff.id, staff.first_name, staff.last_name, job.title, job.salary, department.branch, concat_ws(',',staff.manager_id) AS manager
FROM employee staff
INNER JOIN job ON job.id = staff.job_id
INNER JOIN department ON department.id = job.department_id
WHERE staff.manager_id = ${this.id};`;
  }

  viewManager_Q() {
    return `SELECT staff.id, staff.first_name, staff.last_name, job.title, job.salary, department.branch, concat_ws(',',staff.manager_id) AS manager, department.id AS department_id
FROM employee staff
INNER JOIN job ON job.id = staff.job_id
INNER JOIN department ON department.id = job.department_id
WHERE staff.manager_id = ${this.id};`;
  }

  viewRoles_Q() {
    return `SELECT job.title AS Title, job.salary AS Salary, department.branch AS Department
FROM job
INNER JOIN department ON  department.id = job.department_id ;`;
  }

  addDepartment_Q() {
    return `INSERT INTO department (branch) VALUES ("${this.id}")`;
  }

  removeDepart() {}

  updateDepart() {}

  addRole() {}

  removeRole() {}
}

module.exports = idQuery;
