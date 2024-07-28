import { useState } from "react";
import { auth } from "../../../config/fire-base";
import axios from "axios";
export default function Notes() {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [editedTask, setEditedTask] = useState({ id: null, title: "" });

  const getTask = async () => {
    try {
      const user = auth.currentUser;
      if (user !== null) {
        const userTask = await axios.get(`/api/tasks/${user.uid}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addTask = async () => {
    if (!newTaskName || !newTaskTitle || auth.currentUser === null) return;
    const newTaskData = {
      user: auth.currentUser.uid,
      name: newTaskName,
      title: newTaskTitle,
      completed: false,
    };
    try {
      const newTask = await axios.post("/api/tasks", newTaskData);
      console.log(newTask.data);
    } catch (e) {
      console.error(e);
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const toggleComplete = (taskId, completed) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !completed } : task
    );
    setTasks(updatedTasks);
  };

  const startEditing = (task) => {
    setEditedTask({ id: task.id, title: task.title });
  };

  const cancelEdit = () => {
    setEditedTask({ id: null, title: "" });
  };

  const saveEditedTask = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? { ...task, title: editedTask.title } : task
    );
    setTasks(updatedTasks);
    cancelEdit();
  };

  return (
    <div className="mt-5 mx-auto max-w-2xl">
      <h1 className="text-center text-3xl font-bold mb-4">Tasks List</h1>
      <div className="mb-4">
        <label className="block mb-1">Task Name</label>
        <input
          type="text"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
          placeholder="Enter task name"
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1">Task Title</label>
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="border border-gray-300 px-3 py-2 rounded-md w-full"
        />
      </div>
      <button
        onClick={addTask}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Add Task
      </button>

      <ul className="mt-5 space-y-3">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="border border-gray-500 rounded-md px-4 py-3 flex items-center justify-between"
          >
            {editedTask.id === task.id ? (
              <div className="flex space-x-3 items-center">
                <input
                  type="text"
                  value={editedTask.title}
                  onChange={(e) =>
                    setEditedTask({ ...editedTask, title: e.target.value })
                  }
                  className="border border-gray-300 px-3 py-2 rounded-md w-full"
                />
                <button
                  onClick={saveEditedTask}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  Save
                </button>
                <button
                  onClick={cancelEdit}
                  className="bg-gray-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex space-x-3 items-center">
                <span
                  className={
                    task.completed ? "line-through text-gray-500" : "text-black"
                  }
                >
                  {task.name}: {task.title}
                </span>
                <button
                  onClick={() => toggleComplete(task.id, task.completed)}
                  className={
                    task.completed
                      ? "bg-yellow-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                      : "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                  }
                >
                  {task.completed ? "Deselect" : "Mark"}
                </button>
                <button
                  onClick={() => startEditing(task)}
                  className="bg-orange-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
