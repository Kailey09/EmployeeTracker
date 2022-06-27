INSERT INTO department(name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

INSERT INTO role(title, salary, department_id)
VALUES ("Lead engineer", 150000, 2), ("Software engineer", 120000,2), ("Salesperson", 80000,1), ("Legal Team Lead", 250000, 4), ("Lawyer", 190000, 4), ("Accountant", 125000, 3), ("Account Manager", 160000, 3), ("Sales Lead", 120000, 1);

INSERT INTO employee(first_name,last_name,role_id,manager_id) 
VALUES ("Will", "Smith",1, NULL), ("Beyonce", "Knowels",8, NULL),("Kanye", "West", 4,NULL),("Sean", "Carter",7, NULL),("Jada","Smith",2, 1),("Blue", "Carter",3,2),("Pete", "Davidson",5,3),("Kid", "Cudi",6,4);