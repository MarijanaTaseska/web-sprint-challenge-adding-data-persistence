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

router.post('/', (req, res, next) =>{
    const resource = req.body
    Resources.add(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(err =>{
        if(err.message === 'Resource name must be unique'){
            res.status(400).json({message: 'Resource name must be unique'})
        }else{
            next(err)
        }
    })
})



router.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        customMessage:"Something went wrong inside the resources router ",
        message:err.message,
        stack:err.stack,
    })
})

module.exports=router