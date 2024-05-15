// build your `/api/projects` router here
const router = require('express').Router()


router.use('/', (req, res)=>{
    res.json({message:'hello from projects router'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the projects router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router