let sequelize = require('sequelize')
let db = new sequelize({
    dialect : 'mysql',
    database : 'socialmedia',
    username : 'myuser',
    password : 'mypass'
})
let id_generator = {
    type : sequelize.DataTypes.INTEGER,
    autoIncrement : true,
    primaryKey : true

}
let user = db.define('user',{
  username :{
        type : sequelize.DataTypes.STRING,
  } ,
  id : id_generator
});

let post = db.define('post',{
    title : {
        type : sequelize.DataTypes.STRING,
        allowNull : false
    },
    body : {
        type : sequelize.TEXT,
        allowNull : false

    }
})

const Comment = db.define('comment', {
    id: id_generator,
    title: {
        type : sequelize.DataTypes.STRING,
        allowNull : false
    },
    body: {
        type: sequelize.TEXT('tiny')
    }
})

user.hasMany(post)
post.belongsTo(user)

user.hasMany(Comment)
Comment.belongsTo(user)

post.hasMany(Comment)
Comment.belongsTo(post)

// db.sync()

module.exports = {
    user,post,Comment,db
}