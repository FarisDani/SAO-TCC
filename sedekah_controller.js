const Sedekah = require("./sedekah_model");

exports.findAll = function(req, res) {
  Sedekah.findAll(function(err, sedekah) {
    if (err) res.send(err);
    res.send(sedekah);
  });
};

exports.create = function(req, res) {
  const new_sedekah = new Sedekah(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Sedekah.create(new_sedekah, function(err, sedekah) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Sedekah added successfully!",
        data: sedekah,
      });
    });
  }
};

exports.findById = function(req, res) {
  Sedekah.findById(req.params.id, function(err, sedekah) {
    if (err) res.send(err);
    res.json(sedekah);
  });
};

exports.delete = function(req, res) {
  Sedekah.delete(req.params.id, function(err, sedekah) {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "Sedekah deleted successfully!",
    });
  });
};
