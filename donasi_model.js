var dbConn = require("./db");

var Donasi = function(donasi) {
  this.nama = donasi.nama;
  this.kontak = donasi.kontak;
  this.email = donasi.email;
  this.catatan = donasi.catatan;
  this.program = donasi.program;
  this.jenis = donasi.jenis;
  this.jumlah = donasi.jumlah;
  this.pembayaran = donasi.pembayaran;
  this.status = donasi.status;
};

Donasi.create = function(newDonasi, result) {
  dbConn.query("INSERT INTO donasi SET ?", newDonasi, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Donasi.findAll = function(result) {
  dbConn.query("SELECT * FROM donasi", function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Donasi: ", res);
      result(null, res);
    }
  });
};

Donasi.findById = function(id, result) {
  dbConn.query("SELECT * FROM donasi WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log("Donasi: ", res);
      result(null, res);
    }
  });
};

Donasi.update = function(id, donasi, result) {
  dbConn.query(
    "UPDATE donasi SET nama=?, kontak=?, email=?, catatan=?, program=?, jenis=?, jumlah=?, pembayaran=?, status=? WHERE id = ?",
    [donasi.nama, donasi.kontak, donasi.email, donasi.catatan, donasi.program, donasi.jenis, donasi.jumlah, donasi.pembayaran, donasi.status, id],
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

Donasi.delete = function(id, result) {
  dbConn.query("DELETE FROM donasi WHERE id = ?", id, function(err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Donasi;
