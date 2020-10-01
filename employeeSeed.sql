-- Delete and Create an empolyee database
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

-- Use Employee db
USE employee_db;

-- Create tables
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  unit VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE  job (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT FK_department FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  job_id INT NOT NULL,
  manager_id INT,
  PRIMARY KEY (id),
  CONSTRAINT FK_job FOREIGN KEY (job_id) REFERENCES job(id) ON DELETE CASCADE,
  CONSTRAINT FK_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE CASCADE
);

INSERT INTO department (unit) VALUES ("Sales"),("Engineering"),("Finance"),("Legal");

INSERT INTO job (title, salary, department_id)
VALUES ("Sales Lead", 100000, (SELECT id FROM department where id = 1)),("Salesperson", 80000, (SELECT id FROM department where id = 1)), ("Lead Engineer", 150000, (SELECT id FROM department where id = 2)),("Software Engineer", 120000, (SELECT id FROM department where id = 2)),("Accountant", 125000, (SELECT id FROM department where id = 3)),("Legal Team Lead", 100000,(SELECT id FROM department where id = 4)),("Lawyer", 100000, (SELECT id FROM department where id = 4));

INSERT INTO employee (first_name, last_name, job_id)
VALUES ("John", "Doe", (SELECT id FROM job where id = 1)), ("Mike", "Chan",(SELECT id FROM job where id = 2)), ("Ashley", "Rodriguez",(SELECT id FROM job where id = 3)), ("Kevin", "Tupik",(SELECT id FROM job where id = 4)), ("Malia", "Brown",(SELECT id FROM job where id = 5)), ("Sarah", "Lourd",(SELECT id FROM job where id = 6)), ("Tom", "Allen",(SELECT id FROM job where id = 7));

UPDATE employee
SET manager_id = 3
WHERE id = 1;

UPDATE employee
SET manager_id = 3
WHERE id = 4;

UPDATE employee
SET manager_id = 6
WHERE id = 7;

UPDATE employee
SET manager_id = 1
WHERE id = 2;

SET SalesLeadID = (SELECT id FROM job.id WHERE name = "Sales Lead")

SELECT employee.id, employee.first_name, employee.last_name, job.title, job.salary, department.unit, employee.manager_id
FROM ((employee
INNER JOIN job ON employee.job_id = job.id)
INNER JOIN department ON job.department_id = department.id);
