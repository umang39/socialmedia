let {db} = require('./Db/db')
let express = require('express')
// const { error } = require('console')
let {userRoute} = require('./Route/userRoute')
let {postRoute} = require('./Route/postRoute')
let app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use('api/users',userRoute)
app.use('api/posts',postRoute)
db.sync()
.then(()=>{
    app.listen(3333,()=>{
        console.log('started')
    })
})
.catch((err)=>{
        console.error('db not sync')
})