import mongoose from "mongoose";

const schema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "pls enter a name"],
  },
  title: {
    type: String,
    required: [true, "pls enter a title"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const taskModel = mongoose.model("tasks", schema);
export default taskModel;