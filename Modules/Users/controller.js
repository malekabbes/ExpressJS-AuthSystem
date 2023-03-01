"use strict";
const UserService = require("./service.js");
module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;
    try {
      const result = await UserService.login(email, password);
      res.status(200).send(result);
    } catch (error) {
      res.status(401).send({ message: error.message });
    }
  },
  get: async (req, res) => {
    const users = await UserService.get(req.query);
    res.send(users);
    res.status(200);
  },
  createuser: async (req, res) => {
    const { f_name, l_name, email, password } = req.body;
    try {
      const created = await UserService.createuser(
        f_name,
        l_name,
        email,
        password
      );
      res.status(200).send(created);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  },
  update: async (req, res) => {
    const { id } = req.params;
    const updated_user = req.body;
    try {
      const updated = await UserService.update(id, updated_user);
      res.status(200).send(updated);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  },
  delete: async (req, res) => {
    const { id } = req.params;
    try {
      const deleted = await UserService.delete(id);
      res.status(200).send(deleted);
    } catch (err) {
      res.status(401).send({ message: err.message });
    }
  },
};
