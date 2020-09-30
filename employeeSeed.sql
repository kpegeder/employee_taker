-- Delete and Create an empolyee database
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

-- Use Employee db
USE employee_db;

-- Create tables
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL(10,2) NOT NULL,
  department_id INTEGER(10) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INTEGER(10) NOT NULL,
  manager_id INTEGER(10),
  PRIMARY KEY (id)
);

INSERT INTO department (name) VALUES ("Sales"),("Engineering"),("Finance"),("Legal");

INSERT INTO role (title, salary, department_id)
 VALUES ("Sales Lead", 100000, (SELECT id FROM department where id = 1));
INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 80000, (SELECT id FROM department where id = 1));
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, (SELECT id FROM department where id = 2));
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 120000, (SELECT id FROM department where id = 2));
INSERT INTO role (title, salary, department_id)
VALUES ("Accountant", 125000, (SELECT id FROM department where id = 3));
INSERT INTO role (title, salary, department_id)
VALUES ("Legal Team Lead", 100000,(SELECT id FROM department where id = 4));
INSERT INTO role (title, salary, department_id)
VALUES ("Lawyer", 100000, (SELECT id FROM department where id = 4));

INSERT INTO employee (first_name, last_name, role_id)
VALUES ("John", "Doe", (SELECT id FROM role where id = 1));
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Mike", "Chan",(SELECT id FROM role where id = 2));
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Ashley", "Rodriguez",(SELECT id FROM role where id = 3));
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Kevin", "Tupik",(SELECT id FROM role where id = 4));
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Malia", "Brown",(SELECT id FROM role where id = 5));
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Sarah", "Lourd",(SELECT id FROM role where id = 6));
INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Tom", "Allen",(SELECT id FROM role where id = 7));

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


SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name, employee.manager_id
FROM ((employee
INNER JOIN role ON employee.role_id = role.id)
INNER JOIN department ON role.department_id = department.id);
