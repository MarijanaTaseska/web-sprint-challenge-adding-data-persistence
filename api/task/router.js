// build your `/api/tasks` router here
const router = require('express').Router()
const Tasks = require('./model')
const { validateTask, validateProjectId } = require('./tasks-middleware')

router.get('/', (req, res, next)=>{
    Tasks.getAll()
    .then( tasks => {
        tasks = tasks.map(task => ({
            ...task,
            task_completed: Boolean(task.task_completed)
        }))
        res.status(200).json(tasks)
    })
    .catch(next)
})

router.post('/',validateTask,validateProjectId, async (req, res, next) => {
    const task = req.body
   await Tasks.add(task)
    .then(task => {
        task.task_completed = Boolean(task.task_completed)
        res.status(201).json(task)
    }).catch(next)
})


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the tasks router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router