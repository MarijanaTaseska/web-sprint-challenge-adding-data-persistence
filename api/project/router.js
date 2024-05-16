// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req, res, next)=>{
    Projects.getAll()
    .then( projects => {
        projects = projects.map(project => ({
            ...project,
            project_completed: Boolean(project.project_completed),
          }))
        res.status(200).json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) =>{
    const project = req.body
    Projects.add(project)
    .then(project => {
        project.project_completed = Boolean(project.project_completed)
        res.status(201).json(project)
    }).catch(next)
})


router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the projects router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router