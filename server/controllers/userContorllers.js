import mongoose from "mongoose";
import taskModel from "../model/TaskModel.js";

export const getTasksByUser = async (req, res) => {
    console.log(req.params);
    try {
      const userTasks = await taskModel
        .find({})
        .where("user")
        .equals(req.params.userId);
      console.log(userTasks);
      res.send(userTasks);
    } catch (e) {
      console.error(e);
      return res.status(404).json({ massage: "error", data: null });
    }
  };

  export const deleteUserTasks = async (req, res) => {
    console.log(req.params);
    try {
      await taskModel.deleteMany({user:req.params.userId})
      taskModel.find({}).then(e=>console.log(e))
      return res.status(204).json({
        massage:'sucssess',
        data:null
      })
    } catch (e) {
      console.error(e);
      return res.status(404).json({ massage: "error", data: null });
    }
  };
  