const { monitorEventLoopDelay } = require("perf_hooks")

let adj = [
    'one',
    'horse',
    'goat',
    'mouse',
    'lava',
    'china',
    'america'
]

let cont = [
    '111s',
    '233d4',
    '322f23',
    '232g34',
    '324h',
    '564d6',
    '564d63'
]

function usernameCreator(){
    let b = parseInt(Math.random()*7)
    let a = adj[parseInt(Math.random()*7)]
   let c = cont[parseInt(Math.random()*7)]
   return a+c
}
let ans = usernameCreator()
// console.log(ans)
module.exports ={
    usernameCreator
}