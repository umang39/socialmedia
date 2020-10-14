
    let {usernameCreator} = require('../Utils/username')
    let {user} = require('../Db/db')
    // const db = require('../Db/db')
// db.sync()
   async function userProducer(){
        
        let users =await user.create({
            username : usernameCreator()
        })
        return users
    }
    async function getUserById(id){
        return await user.finOne({
            where : {id}
        })
    }
  async function getUserByName(name){
    return await user.finOne({
        where : {name}
        })
    }

module.exports = {
    getUserById,
    getUserByName,
    userProducer
}

//    console.log(userProducer())
//    console.log(userProducer())
//    console.log(userProducer())
 
    