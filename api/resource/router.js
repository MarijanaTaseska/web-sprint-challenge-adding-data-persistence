// build your `/api/resources` router here
const router = require('express').Router()


router.use('/', (req, res)=>{
    res.json({message:'hello from resources router'})
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the resources router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router