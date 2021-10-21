console.log("tic tac toe working")
let tds = document.getElementsByTagName("td");
let turn = "X";
let gameOver = false;
let turnDiv = document.querySelector(".turn");
let winner = document.querySelector(".winner").querySelector("h3");
let ocupied = 0;

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

const testWin = () => {
    let presentText = document.querySelectorAll("td");
    winIndex = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    winIndex.forEach(winArr=>{
        
        if((presentText[winArr[0]].innerText == presentText[winArr[1]].innerText && presentText[winArr[1]].innerText == presentText[winArr[2]].innerText) && presentText[winArr[0]].innerText!==""){
            gameOver = true
        }
    })

}

const resetGame = ()=>{
    location.reload()
}

Array.from(tds).forEach(element => {
    element.addEventListener('click', () => {
        element.innerText = turn;
        ocupied += 1
        testWin();
        if(gameOver){
            let img = document.querySelector("img");
            winner.innerText = `${turn} Won!`
            img.style.width = "200px";
        }
        turn = changeTurn();
        turnDiv.innerText = `"${turn}" turn..`
        console.log(ocupied)
        if(ocupied === 9){
            alert("It's a tie");
            location.reload()
        }
    })
})