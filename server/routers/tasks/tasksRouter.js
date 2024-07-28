import express from "express";
import * as tasksControllers from "../../controllers/tasksRouter.js";

const router = express.Router();

router
  .route("/")
  .get(tasksControllers.getTasks)
  .post(tasksControllers.postTask)
  .delete(tasksControllers.deleteAllTasks);
router
  .route("/:taskId")
  .put(tasksControllers.putTask)
  .delete(tasksControllers.deleteTask);

export default router;
