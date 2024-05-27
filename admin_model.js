var dbConn = require("./db");

// Define the Admin constructor
var Admin = function(admin) {
  this.id = admin.id;
  this.password = admin.password;
};


// Method to retrieve all admins
Admin.findAll = function(result) {
  dbConn.query("SELECT * FROM admin", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Admins: ", res);
      result(null, res);
    }
  });
};

// Method to retrieve an admin by ID
Admin.findById = function(id, result) {
  dbConn.query("SELECT * FROM admin WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Admin: ", res);
      result(null, res);
    }
  });
};

module.exports = Admin;
