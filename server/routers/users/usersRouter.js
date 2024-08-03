import express from "express";
import * as usersControllers from "../../controllers/userContorllers.js";

const router = express.Router();

// router.route('/').get(tasksControllers.getTasks).post(tasksControllers.postTask)
router
  .route("/:userId")
  .get(usersControllers.getTasksByUser)
  .delete(usersControllers.deleteUserTasks);

export default router;
