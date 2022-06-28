const mysql = require("mysql2");
const inquirer = require("inquirer");
const consoleTables = require("console.table");
var roles = [];
var employees = [];


const connection = mysql.createConnection({
    host:"localhost",
    port: 3001,
    user: "root",
    password: "Nalabean13",
    database: "employeesDB"
});

// get Role
const getRole = () => {
    connection.query(`SELECT title, role_id FROM role`, (err,res) => {
        if (err) throw err;
        roles =[];
        for (let i = 0; i < res.length; i++) {
            const id = res[i].role_id;
            const title = res[i].title;
            var newRole ={
                name: title,
                value: id
            }
            roles.push(newRole)
        }
        return roles;
    });
};

// get employee
const getEmployee = () => {
    connection.query(`SELECT first_name, last_name, id FROM employee`, (err,res) => {
        if (err) throw err;
        employees = [];
        for (let i = 0; i < res.length; i++) {
            const id = res[i].id;
            const firstName = res[i].first_name;
            const last_name = res[i].last_name;
            // new employee
            var newEmployees = {
                name: first_name.comcat(" ", lastName),
                value: id
            }
            employees.push(newEmployees);
        }
        return employees;
    });
};

const roleCheck = `SELECT id employee.first_name, employee.last_name, title, salary, department.role, manager_id
FROM employee
JOIN role ON employee.role_id = role.role_id
JOIN department ON role.department_id = department.department_id`;

const init = () => {
    getEmployee();
    getRole();
  inquirer
  .prompt({
      name: "init",
      type: "rawlist",
      message: "What would you like to do?",
      choices: [
          "View All Employees",
          "View all Employees by Department",
          "Add employee",
          "Update employee role",
          "Remove employee",
          "View all roles"
      ],
  })
  .then((answer) => {
      switch (answer.init) {
          case "View All Employees":
          allEmployees();
          break;

          case "View all roles":
                 allRoles()
                 break;

          case "View all employees by Department":
              allEmployeeDepartment();
              break;

              case "Add employee":
                  addEmployee();
                  break;

                  case "Remove Employee":
                      removeEmployee();
                      break;

                          case "Exit":
                              connection.end();
                              break;
      }
  });
};

const allEmployees = () => {
    connection.query(roleCheck, (err, res) => {
        console.log("\nALL EMPLOYEES\n");
        if(err) throw err;
        console.table(res);
        init();
    })
};

const allRoles = () => {
    connection.query(`SELECT title FROM role`, (err, res) => {
        console.log("\nALL ROLES\n");
        if (err) throw err;
        console.table(res);
        init();
    })
};

const allEmployeeDepartment = () => {
    inquirer
    .prompt({
        type: "rawlist",
        name: "Choose a department",
        choice: ["Enginerring", "Finance", "Legal"]
    }).then((answer) => {
        if (answer.departments === 'Enginerring') {
            connection.query(`SELECT employee.first_name, employee.last_name FROM employee
            JOIN role ON employee.role_id = role.role_id
            JOIN department ON role.department_id and department.department_id = "Enginerring"`,(err, res) => {
                console.log("\nEnginerring\n");
                if (err) throw err;
                console.table(res);
                init();
            })
        }
        else if (answer.departments === "Finance") {
            connection.query(`SELECT employee.first_name, employee.last_name FROM employee
            JOIN role ON employee.role_id = role.role_id
            JOIN deparment ON role.department_id = department.department_id and department.role = "Finance`, (err, res) => {
                console.log("\nFinance\n");
                console.table(res);
                init();
            })
        }
        else if (answer.departments === "Legal") {
            connection.query(`SELECT employee.first_name, employee.last_name FROM employee
            JOIN role ON  employee.role_id = role.role_id
            JOIN department ON role.department_id = department.department_id and department.role = "legal"`, (err, res) => {
                console.log("\nLegal\n");
                if (err) throw err;
                console.table(res);
                init();
            })
        }
    }) 
}
