let {user , post} = require('../Db/db')

async function postCreator(title,body,userId){
    let posts =await post.create({
        title,
        body,
        userId
    })
    return posts
}

async function findAllPost(){

        let data =  post.findAll({
            include : [user]
        })
        // console.log(data)
        return data


}
postCreator('helllo','how are you',1)
.then((data)=>{
    console.log(data)
})
// postCreator('dasdasd','fegvjcsbhhcnzk',2)
// postCreator('helllosadsaf','fegvjcsbhhcnzk',3)
// // postCreator('helllogdfgfd','fegvjcsbhhcnzk',4)
// findAllPost()
// .then((data)=>{
//     console.log(data)
// })
// console.log(data)
module.exports = {
    postCreator, findAllPost
}