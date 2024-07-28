import mongoose from "mongoose";
import taskModel from "../model/TaskModel.js";

export const getTask = async (req, res) => {
  try {
    console.log(res.body.params);
    return res.status(201).json({});
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

export const postTask = async (req, res) => {
  // console.log(req.body.params)
  try {
    console.log(req.body);
    const newTask = new taskModel({ ...req.body });
    await newTask.save();
    return res.status(201).json(req.body);
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

export const deleteTask = async (req, res) => {
  // console.log(req.body.params)
  try {
    console.log(req.params);
    const isDeleted = taskModel.findByIdAndDelete(req.params.taskId);
    return res.status(204).json({
      status: "sucssess",
      data: null,
    });
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

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
