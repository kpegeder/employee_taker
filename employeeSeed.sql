-- Delete and Create an empolyee database
DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

-- Use Employee db
USE employee_db;

-- Create tables
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  branch VARCHAR(30) NOT NULL,
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
  CONSTRAINT FK_manager FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);

INSERT INTO department (branch) VALUES ("Sales"),("Engineering"),("Finance"),("Legal");

INSERT INTO job (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),("Salesperson", 80000, 1), ("Lead Engineer", 150000, 2),("Software Engineer", 120000, 2),("Accountant", 125000, 3),("Legal Team Lead", 100000,4),("Lawyer", 100000, 4);

INSERT INTO employee (first_name, last_name, job_id)
VALUES ("John", "Doe", 1 ), ("Mike", "Chan", 2), ("Ashley", "Rodriguez", 3), ("Kevin", "Tupik", 4), ("Malia", "Brown", 5), ("Sarah", "Lourd", 6), ("Tom", "Allen", 7);

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
