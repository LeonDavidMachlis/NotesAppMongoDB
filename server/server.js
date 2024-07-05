import express from 'express'
import routerTasks from './routers/tasks/tasksRouter.js'
const app = express()

app.use(express.json())

app.use('/tasks',routerTasks)


app.get('/',(req,res)=>{
    console.log('hihihihi')
    res.send('aaaaaa')
})

app.listen(3000,()=>console.log('working'))