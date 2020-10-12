
    let {usernameCreator} = require('../Utils/username')
    let {user} = require('../Db/db')
    // const db = require('../Db/db')
// db.sync()
    function userProducer(){
        
        let users = user.create({
            username : usernameCreator()
        })
        return users
    }
    function getUserById(id){
        return user.finOne({
            where : {id}
        })
    }
  function getUserByName(name){
    return user.finOne({
        where : {name}
        })
    }

module.exports = {
    getUserById,
    getUserByName,
    usernameCreator
}

//    console.log(userProducer())
//    console.log(userProducer())
//    console.log(userProducer())
 
    