"use strict";
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    f_name: {
      type: String,
      required: true,
    },
    l_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);
const users = mongoose.model("User", UserSchema);
module.exports = users;
