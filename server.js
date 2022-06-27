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