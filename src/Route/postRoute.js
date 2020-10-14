let {
    postCreator,
     findAllPost
} = require('../Controllers/post')

let p = require('../Db/db').post
let route = require('express').Router()

route.get('/',async(req,res)=>{
    let result =await findAllPost()
    console.log(result)
    res.send(result)
})


route.post('/',async(req,res)=>{
    const { userId, title, body } = req.body
  console.log(req.body)
  if ((!userId) || (!title) || (!body)) {
    return res.status(400).send({
      error: 'Need userid, title and body to create post'
    })
  }

  postCreator(title,body, userId)
  .then((data)=>{
    res.redirect('/public')
  })
})
module.exports = {
  postRoute : route
}