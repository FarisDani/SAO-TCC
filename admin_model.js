var dbConn = require("./db");

// Define the Admin constructor
var Admin = function(admin) {
  this.id = admin.id;
  this.password = admin.password;
};

// Method to create a new admin
Admin.create = function(newAdmin, result) {
  dbConn.query("INSERT INTO admin SET ?", newAdmin, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
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

// Method to update an admin by ID
Admin.update = function(id, admin, result) {
  dbConn.query(
    "UPDATE admin SET password=? WHERE id = ?",
    [admin.password, id],
    function(err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

// Method to delete an admin by ID
Admin.delete = function(id, result) {
  dbConn.query("DELETE FROM admin WHERE id = ?", [id], function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Admin;
