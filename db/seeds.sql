INSERT INTO department(name)
VALUES ('Sales'), ('Engineering'), ('Finance'), ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES ("Lead engineer", 150000, 2), ("Software engineer", 120000,2), ("Salesperson", 80000,1), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4), ("Accountant", 125000, 3), ("Account Manager", 160000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Lowery", 7, NULL), ("Beth", "Johnson", 6, 1), ("Olivia", "Benson", 1, NULL), ("Simon", "Silk", 2, 3), ("Percy", "Jackson", 3, NULL), ("Collin", "Kapernick", 4, NULL), ("Naomi", "Lee", 5, 5);