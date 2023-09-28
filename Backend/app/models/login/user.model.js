const mongoose = require("mongoose");

const Usuario = new Schema({
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

export const User = mongoose.model("User", Usuario);