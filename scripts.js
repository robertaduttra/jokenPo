const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");


let humanScoreNumber = 0;
let machineScoreNumber = 0;
let buttonRefresh = document.querySelector("#restart");



const playHuman = (humanChoice) =>{
    playTheGame(humanChoice, playMachine())
}

const playMachine = () =>{
    const choices = ['rock', 'paper', 'scissors']    
    const randomNumber = Math.floor(Math.random()* 3)
    

    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    console.log("Humano: " + human + "Maquina: " + machine)
    
    if(human === machine){

        result.innerHTML = "<b> Deu empate! &#x1F631 </b>";  

    }else if(
        (human === 'paper' && machine === 'rock')
     ||(human === 'scissors' && machine === 'paper')
     || (human === 'rock' && machine === 'scissors')) {
        
        humanScoreNumber++;
        humanScore.innerHTML = humanScoreNumber;
        result.innerHTML = "<b>Você ganhou! &#x1F917</b>"; 

    }else{

        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "<b>Você perdeu para a maquina! &#x1F916</b>"
    }

    buttonRefresh.addEventListener("click", () => {

        location.reload()
    })

    
}








