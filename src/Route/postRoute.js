let {
    postCreator,
     findAllPost
} = require('../Controllers/post')

let route = require('express').Router()

route.get('/',(req,res)=>{
    let result = findAllPost()
    res.send(result)
})

route.post('/',(req,res)=>{
    const { userId, title, body } = req.body
  
  if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  const post = await postCreator(userId, title, body)
  res.status(201).send(post)
})
module.exports = {
    route
}