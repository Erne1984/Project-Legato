const mongoose = require("mongoose");

const Usuario = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ]
})

const User = mongoose.model("User", Usuario);

module.export = {
  User
};