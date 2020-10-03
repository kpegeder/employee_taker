const idQuery = require("./idQuery");

class updateQuery extends idQuery {
  constructor(id, updateID) {
    super(id);
    this.updateID = updateID;
  }

  updateJob_Q() {
    return `UPDATE employee
    SET job_id = ${this.updateID}
    WHERE id = ${this.id}`;
  }

  updateManager_Q() {
    if (isNaN(this.updateID)) {
      this.updateID = null;
    }

    return `UPDATE employee
    SET manager_id = ${this.updateID}
    WHERE id = ${this.id}`;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = updateQuery;
