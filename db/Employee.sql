CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE department {
    department_id INT AUTO_INCREMENT, PRIMARY KEY
    role VARCHAR(30)
};

INSERT INTO department(role)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

CREATE TABLE role {
    role_id INT, AUTO_INCREMENT,PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10, 2)
    department_id INT
};

INSERT INTO roles(title, salary, department_id)
VALUES ("Lead engineer", 150000, 2), ("Software engineer", 120000,2), ("Salesperson", 80000,1), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4), ("Accountant", 125000, 3), ("Account Manager", 160000, 3);


CREATE TALBE empolyee {
    id INT AUTO_INCREMENT, PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT NULL,
    manager_id INT NULL
}
