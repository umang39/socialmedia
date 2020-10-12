let {user , post} = require('../Db/db')

function postCreator(title,body,userId){
    let posts = post.create({
        title,
        body,
        userId
    })
    return posts
}

function findAllPost(){
    let data = post.findAll({
        include : [user]
    })
    return data
}

postCreator('helllo','fegvjcsbhhcnzk',1)
console.log(findAllPost())
module.exports = {
    postCreator, findAllPost
}