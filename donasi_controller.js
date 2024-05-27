const Donasi = require("./donasi_model");

exports.findAll = function(req, res) {
  Donasi.findAll(function(err, donasi) {
    if (err) res.send(err);
    res.send(donasi);
  });
};

exports.create = function(req, res) {
  const new_donasi = new Donasi(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Donasi.create(new_donasi, function(err, donasi) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Donasi added successfully!",
        data: donasi,
      });
    });
  }
};

exports.findById = function(req, res) {
  Donasi.findById(req.params.id, function(err, donasi) {
    if (err) res.send(err);
    res.json(donasi);
  });
};

exports.update = function(req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Donasi.update(req.params.id, new Donasi(req.body), function(err, donasi) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Donasi updated successfully!",
      });
    });
  }
};

exports.delete = function(req, res) {
  Donasi.delete(req.params.id, function(err, donasi) {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "Donasi deleted successfully!",
    });
  });
};
