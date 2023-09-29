const mongoose = require("mongoose");

  const Role =new mongoose.Schema({
    name: String
  })


const role = mongoose.model("Role", Role);

module.export = {
  Role
};