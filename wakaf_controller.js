const Wakaf = require("./wakaf_model");

exports.findAll = function(req, res) {
  Wakaf.findAll(function(err, wakaf) {
    if (err) res.send(err);
    res.send(wakaf);
  });
};

exports.create = function(req, res) {
  const new_wakaf = new Wakaf(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Wakaf.create(new_wakaf, function(err, wakaf) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Wakaf added successfully!",
        data: wakaf,
      });
    });
  }
};

exports.findById = function(req, res) {
  Wakaf.findById(req.params.id, function(err, wakaf) {
    if (err) res.send(err);
    res.json(wakaf);
  });
};

exports.update = function(req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Wakaf.update(req.params.id, new Wakaf(req.body), function(err, wakaf) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Wakaf updated successfully!",
      });
    });
  }
};

exports.delete = function(req, res) {
  Wakaf.delete(req.params.id, function(err, wakaf) {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "Wakaf deleted successfully!",
    });
  });
};
