import express from "express";
import routerTasks from "./routers/tasks/tasksRouter.js";
export const app = express();

app.use(express.json());

app.use("/api/tasks", routerTasks);

app.get("/api", (req, res) => {
  console.log("hihihihi");
  res.send("aaaaaa");
});
