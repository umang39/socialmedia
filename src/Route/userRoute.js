let route = require('express').Router()

let {
    getUserById,
    getUserByName,
    userProducer
} = require('../Controllers/name')

route.get('/:id',async(req,res)=>{
    let u;
    if((isNaN(req.params.id))){
        u = getUserByName(req.params.id)
    }    
    else{
        u = getUserById(req.params.id)
    }

    console.log(u)

    if(u){
        res.send(u)
    }
    else{
        res.send('not found')
    }
})

route.post('/', async (req, res) => {
    const u = await userProducer()
    res.status(201).send(u)
  })
  
module.exports = {
    userRoute : route
}