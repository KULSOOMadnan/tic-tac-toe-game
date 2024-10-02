let boxces = document.querySelectorAll('.box');
let reset_btn = document.querySelector('#reset');
let new_btn = document.querySelector('#new-game');
let msgContainer= document.querySelector('.msg-container');
let mesg = document.querySelector('#msg');


let turn0 = true
let count = 0

const draw = () => {
  mesg.innerText = " Oh! Game is draw";
  msgContainer.classList.remove('hide');
  disabled();

}

const winPattern = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8],
    [2,4,8]
]

boxces.forEach((box) => {
    box.addEventListener("click" , () => {

        if(turn0){
            box.innerHTML = 'O';
            box.classList.add('o-color');
            box.classList.remove('x-color');

            turn0 = false
        }else{
            box.innerHTML = 'X';
            box.classList.add('x-color');
            box.classList.remove('o-color');
            turn0 = true

        }
        box.disabled = true;
        count ++;
        let is_winner = checkWinner();

        if(count == 9 && !is_winner){
            draw()
            enabled();
        }
    })
});


const disabled = () => {
    for (let box of boxces) {
        box.disabled = true
        
    }
}
const enabled = () => {
    for (let box of boxces) {
        box.disabled = false;
        box.innerText = '';
        
    }
}

const resetBtn = () => {
    turn0 = false
    msgContainer.classList.add('hide')
    enabled();

}
const showwinner = (winner) => {
  
     mesg.innerText = `Congratulation! Winner is "${winner}"`
     msgContainer.classList.remove('hide')
     disabled();
    
}
 
const checkWinner = () => {
    for(let patern of  winPattern) {
        let pos1val = boxces[patern[0]].innerText;
        let pos2val = boxces[patern[1]].innerText;
        let pos3val = boxces[patern[2]].innerText;
        console.log(patern[0]);
        console.log(patern[1]);
        console.log(patern[2]);
        
        
        if(pos1val != "" && pos2val != "" && pos3val != ""  ){
            let value = pos1val === pos2val && pos2val === pos3val 
            
            if(value){
                
                console.log(pos1val);
                showwinner(pos1val);
                
            }
        }
    } 
}


reset_btn.addEventListener('click' , resetBtn)
new_btn.addEventListener('click' , resetBtn)