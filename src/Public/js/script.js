// const { Json } = require("sequelize/types/lib/utils")

$(()=>{

    $('#navbar').load('components/navbar.html',loginIfNeeded)
    $('#post').load('components/post.html',postShower)

})

function loginIfNeeded() {
  
    $.post('/api/users/', {}, (users) => {
        if (user) {
            console.log(users)
          $('#user').text(users.username)
        }
      })
  }
  function postShower(){
    $.get('/api/posts/',(post)=>{
      console.log(post)
        for (let p of post){
          // console.log(p.title , p.body,p.user.username)
          $('#post').append(
            $(`
            <div class="col s12 m6">
            <div class="card blue-grey darken-1">
              <div class="card-content white-text">
                <span class="card-title">${p.title}</span>
                <p>${p.body}</p>
                <p>by ${p.user.username}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
            `)
          )
        }
    })
  }
  