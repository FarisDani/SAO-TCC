const Admin = require("./admin_model");

// Controller method to get all admins
exports.findAll = function(req, res) {
  Admin.findAll(function(err, admin) {
    if (err) res.send(err);
    res.send(admin);
  });
};

// Controller method to create a new admin
exports.create = function(req, res) {
  const new_admin = new Admin(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Admin.create(new_admin, function(err, admin) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Admin added successfully!",
        data: admin,
      });
    });
  }
};

// Controller method to get an admin by ID
exports.findById = function(req, res) {
  Admin.findById(req.params.id, function(err, admin) {
    if (err) res.send(err);
    res.json(admin);
  });
};

// Controller method to update an admin by ID
exports.update = function(req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({
      error: true,
      message: "Please provide all required fields",
    });
  } else {
    Admin.update(req.params.id, new Admin(req.body), function(err, admin) {
      if (err) res.send(err);
      res.json({
        error: false,
        message: "Admin updated successfully!",
      });
    });
  }
};

// Controller method to delete an admin by ID
exports.delete = function(req, res) {
  Admin.delete(req.params.id, function(err, admin) {
    if (err) res.send(err);
    res.json({
      error: false,
      message: "Admin deleted successfully!",
    });
  });
};
