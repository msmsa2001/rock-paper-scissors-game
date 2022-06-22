let person = prompt("Please enter your name", "PLAYER");
if(person != null){
    document.getElementById('name').innerText=person
}
const computer=document.querySelector('.computerimg img');
const player=document.querySelector('.playerimg img');
const computer_point=document.querySelector('.computerpoints');
const player_point=document.querySelector('.playerpoint');
const options=document.querySelectorAll('.option button');
options.forEach(option => {
    option.addEventListener('click',()=>{
        computer.classList.add('shakecomputer');
        player.classList.add('shakeplayer');

        setTimeout((e)=>{
            computer.classList.remove('shakecomputer');
            player.classList.remove('shakeplayer');

            player.src="img/" + option.innerHTML + "Player.png"

            const choice =["ROCK","PAPER","SCISSORS"];
            let arrayNo=Math.floor(Math.random()*3);   
            // console.log(arrayNo)
            let computerChoice = choice[arrayNo];
            // console.log(computerChoice);
            computer.src="img/"+ computerChoice + "Computer.png";

            let cpoint=parseInt(computer_point.innerHTML);
            let ppoint=parseInt(player_point.innerHTML);
            // console.log(cpoint);

            if(option.innerHTML === "ROCK"){
                if(computerChoice === "PAPER"){
                    computer_point.innerHTML=cpoint+1;
                }
                else if(computerChoice === "SCISSORS"){
                    player_point.innerHTML=ppoint+1;
                }
            }

            if(option.innerHTML === "PAPER"){
                if(computerChoice === "ROCK"){
                    player_point.innerHTML=ppoint+1;
                }
                else if(computerChoice === "SCISSORS"){
                    computer_point.innerHTML=cpoint+1;
                }
            }

            if(option.innerHTML === "SCISSORS"){
                if(computerChoice === "ROCK"){
                    computer_point.innerHTML=cpoint+1;
                }
                else if(computerChoice === "PAPER"){
                    player_point.innerHTML=ppoint+1;
                }
            }

            if(cpoint === 5){
                alert("Computer Won the Game");
                window.location.reload();
            }

            if(ppoint === 5){
                alert(person+" Won the Game");
                window.location.reload();
            }
        },1200)
    })
});





