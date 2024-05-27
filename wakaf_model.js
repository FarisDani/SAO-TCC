var dbConn = require("./db");

var Wakaf = function(wakaf) {
  this.jenis = wakaf.jenis;
};

Wakaf.create = function(newWakaf, result) {
  dbConn.query("INSERT INTO wakaf SET ?", newWakaf, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Wakaf.findAll = function(result) {
  dbConn.query("SELECT * FROM wakaf", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Wakaf: ", res);
      result(null, res);
    }
  });
};

Wakaf.findById = function(id, result) {
  dbConn.query("SELECT * FROM wakaf WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Wakaf: ", res);
      result(null, res);
    }
  });
};



Wakaf.delete = function(id, result) {
  dbConn.query("DELETE FROM wakaf WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Wakaf;
