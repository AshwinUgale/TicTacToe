let music = new Audio("music.mp3")
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"

const changeTurn=()=>{
    return turn ==="X"?"0":"X"
}

const checkWin = ()=>{

}

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element=>{
    let boxtext = document.querySelector('.boxtext')
})
