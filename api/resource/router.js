// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req, res, next)=>{
    Resources.getAll()
    .then( resources => {
        res.status(200).json(resources)
    })
    .catch(next)
})

router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the resources router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router