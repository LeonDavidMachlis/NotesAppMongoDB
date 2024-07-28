import express from 'express'
import * as tasksControllers from '../../controllers/tasksRouter.js'

const router = express.Router();

router.get('/',(req,res)=>{
    console.log('check')
    res.send('a')
})
router.route('/').post(tasksControllers.postTask)
router.route('/:userId').get(tasksControllers.getTasksByUser)

export default router
