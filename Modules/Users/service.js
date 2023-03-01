"use strict";
const bcrypt = require("bcrypt");
const User = require("./model");
module.exports = {
  get: async (query) => {
    try {
      let dbQuery = User;
      if (query.id !== undefined && query.id !== "") {
        dbQuery = dbQuery.findById(query.email);
      } else {
        dbQuery = dbQuery.find();
      }
      return {
        data: await dbQuery.exec(),
      };
    } catch (e) {
      throw e;
    }
  },
  createuser: async (f_name, l_name, email, password) => {
    try {
      const salt = 10;
      const hashed_password = await bcrypt.hash(password, salt);
      await User.create({ f_name, l_name, email, password: hashed_password });
      return "User Created";
    } catch (error) {
      console.error(error);
    }
  },
  login: async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found !");
    }
    const password_match = await bcrypt.compare(password, user.password);
    if (!password_match) {
      throw new Error("Echec d'authentification");
    } else {
      return { message: "Welcome" };
    }
  },
  update: async (id, updated_user) => {
    try {
      const salt = 10;
      const hash = await bcrypt.hash(updated_user.password, salt);
      updated_user.password = hash;
      return await User.findByIdAndUpdate(id, updated_user);
    } catch (error) {
      console.error(error);
    }
  },
  delete: async (id) => {
    try {
      return await User.findOneAndRemove(id);
    } catch (error) {
      console.error(error);
    }
  },
};
