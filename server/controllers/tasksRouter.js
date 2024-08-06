import mongoose from "mongoose";
import taskModel from "../model/TaskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskModel.find({});
    return res.status(200).json(tasks);
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

export const postTask = async (req, res) => {
  // console.log(req.body.params)
  try {
    console.log(req.body);
    const newTask = new taskModel({ ...req.body });
   const ret =  await newTask.save();
   console.log(ret)
    return res.status(201).json(ret);
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

export const deleteTask = async (req, res) => {
  // console.log(req.body.params)
  try {
    console.log(req.params);
    const isDeleted = await taskModel.findByIdAndDelete(req.params.taskId);
    return res.status(204).json({
      status: "sucssess",
      data: null,
    });
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

export const putTask = async (req, res) => {
  // console.log(req.body.params)
  try {
    console.log(req.params);
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.taskId,
      { ...req.body },
      { new: true }
    );
    return res.status(201).json({
      status: "sucssess",
      data: updatedTask,
    });
  } catch (e) {
    return res.status(404).json({ massage: "error", data: null });
  }
};

export const deleteAllTasks = async (req, res) => {
  try {
    await taskModel.deleteMany({});
    taskModel.find({}).then((e) => console.log(e));
    return res.status(204).json({
      massage: "sucssess",
      data: null,
    });
  } catch (e) {
    console.error(e);
    return res.status(404).json({ massage: "error", data: null });
  }
};
