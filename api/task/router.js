// build your `/api/tasks` router here
const router = require('express').Router()


router.use('/', (req, res)=>{
    res.json({message:'hello from tasks router'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the tasks router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router