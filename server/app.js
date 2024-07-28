import express from "express";
import routerTasks from "./routers/tasks/tasksRouter.js";
import routerUsers from "./routers/users/usersRouter.js";
import morgan from "morgan";
export const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/tasks", routerTasks);
app.use("/api/users", routerUsers);

app.get("/api", (req, res) => {
  console.log("hihihihi");
  res.send("aaaaaa");
});
