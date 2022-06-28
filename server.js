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

          case "View all employees by Department":
              allEmployeeDepartment();
              break;

              case "Add employee":
                  addEmployee();
                  break;

                  case "Remove Employee":
                      removeEmployee();
                      break;

                      case "View all roles":
                          allRoles()
                          break;

                          case "Exit":
                              connection.end();
                              break;
      }
  });
};
