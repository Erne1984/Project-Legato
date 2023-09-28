const mongoose = require("mongoose");

  const Role =new Schema({
    name: String
  })

export const role = mongoose.model("Role", Role);