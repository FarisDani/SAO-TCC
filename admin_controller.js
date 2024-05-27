const Admin = require("./admin_model");

// Controller method to get all admins
exports.findAll = function(req, res) {
  Admin.findAll(function(err, admin) {
    if (err) res.send(err);
    res.send(admin);
  });
};


// Controller method to get an admin by ID
exports.findById = function(req, res) {
  Admin.findById(req.params.id, function(err, admin) {
    if (err) res.send(err);
    res.json(admin);
  });
};



