var dbConn = require("./db");

var Sedekah = function(sedekah) {
  this.jenis = sedekah.jenis;
};

Sedekah.create = function(newSedekah, result) {
  dbConn.query("INSERT INTO sedekah SET ?", newSedekah, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Sedekah.findAll = function(result) {
  dbConn.query("SELECT * FROM sedekah", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Sedekah: ", res);
      result(null, res);
    }
  });
};

Sedekah.findById = function(id, result) {
  dbConn.query("SELECT * FROM sedekah WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Sedekah: ", res);
      result(null, res);
    }
  });
};

Sedekah.update = function(id, sedekah, result) {
  dbConn.query(
    "UPDATE sedekah SET jenis=? WHERE id = ?",
    [sedekah.jenis, id],
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

Sedekah.delete = function(id, result) {
  dbConn.query("DELETE FROM sedekah WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Sedekah;
