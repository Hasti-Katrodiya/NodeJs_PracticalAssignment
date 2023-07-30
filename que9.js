const mysql = require('nodejs-mysql').default;

const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "employee"
}

const db = mysql.getInstance(config)



db.connect()
    .then(function () {
        console.log(" Connection Sucessfull..!!");

        var sql = "INSERT INTO employee (e_name, e_salary, e_designation) VALUES ('KARTIK', 30000, 'IOS Developer')";
        return db.exec(sql);

    }).then(function (res) {
        console.log(res);
        return db.exec("SELECT * FROM employee");
    }).then(function (result) {
        console.log("======================================================================")
        for (var i in result) {
            console.log('Emp_Name : ' + result[i].e_name + "  Emp_Salary : " + result[i].e_salary + "   Emp_Designation : " + result[i].e_designation);
        }
        console.log("======================================================================")

        process.exit(0);
    }).catch(function (err) {
        console.log("Error");
        process.exit(0);
    })