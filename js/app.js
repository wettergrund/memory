let array1 = [1, 2, 3];
let array2 = array1;
let array = array1.concat(array2)

let openCards = 0;
let numTries = 0;
let matches = 0;

const pairs = array.length / 2;

const GameCont = document.querySelector(".game-container");
const GameArea = document.querySelector("#game-area");
const Button = document.querySelector(".button-section");
const Winner = document.querySelector(".winner");


function addDiv(){

    // GameCont
    Button.classList.add('hide');
    GameCont.classList.remove('hide');
    GameArea.classList.remove('vis-hidden');
    Winner.classList.add('hide');


    numTries = 0;
    matches = 0;

    let shuffledNumbers = array.sort(function () {
        return Math.random() - 0.5;
      });

    
    
    GameArea.innerHTML = '';

    for (let i = 0; i < shuffledNumbers.length; i++) {
        
        let card = document.createElement('div');
        card.setAttribute("data-id", i)
        card.classList.add("card");

        let front = document.createElement('div');
        front.setAttribute("data-id", i)
        front.classList.add("front")

        card.appendChild(front);
        
        let back = document.createElement('div');
        back.setAttribute("data-id", i)
        back.classList.add("back");

        if(shuffledNumbers[i] === 1){
            addMemoryClass("css")            
        }
        else if (shuffledNumbers[i] === 2){
            addMemoryClass("html")
        }
        else {
            addMemoryClass("javascript")

        }


        function addMemoryClass(x){
            back.classList.add(x);
            card.appendChild(back);
        }
        
        GameArea.appendChild(card)

    }
        
}

document.addEventListener('click',function(e){

    const ClassName = e.target.className;
    
    
    if(ClassName === "front"){

        const DataId = e.target.getAttribute("data-id")
        
        const cardId = document.querySelector('.card[data-id ="' + DataId + '"]')
        cardId.classList.add('flip')
        
        openCards++;
        

        let compare = ["", ""];

        if(openCards > 1){
            numTries++;


            
            let els = document.querySelectorAll(".flip")


            
            for (let i = 0; i < els.length; i++) {

                if(i === 0){
                    compare[0] = els[i].children[1].classList[1];
                }
                else if(i === 1) {
                    compare[1] = els[i].children[1].classList[1];
                }

                if(compare[0] === compare[1]){
                    els[0].classList.add('match');
                    els[1].classList.add('match');

                    matches++;

                    if(matches === pairs){
                        setTimeout(function(){
                            
                            // console.log("Du klarade det på " + numTries + " försök")
                        Button.classList.remove('hide');
                        GameArea.classList.add('vis-hidden');
                        Winner.textContent = 'Du klarade det på ' + numTries + ' försök'
                        Winner.classList.remove('hide');
                        document.querySelector('button').textContent = 'Nytt spel'
                    
                    },1000)
                    }


                }
                


                
                
            }
            setTimeout(function(){
                for (let i = 0; i < els.length; i++) {
                    els[i].classList.remove('flip');
                }
                
                compare = ["", ""];
            }, 1000);
            openCards = 0;
        }
        
        
        
 
    }    
});



