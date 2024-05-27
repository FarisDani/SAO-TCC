const mysql = require("mysql");


const dbConn = mysql.createConnection({
  host: "34.101.187.105",
  user: "root",
  password: "",
  database: "sao",
});


dbConn.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected!");
});


module.exports = dbConn;
