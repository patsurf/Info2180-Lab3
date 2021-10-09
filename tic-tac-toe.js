window.onload = event =>{
    gamePlay();
}

function gamePlay(){
    let board = document.getElementById('board');
    let squares = board.getElementsByTagName('div');
    let status = document.getElementById('status');
    let restart = document.getElementsByClassName('btn')[0];
    let index = 0;
    let currentHolder = new Array(9); 
    let ender = 'O';
    let isGameEnd = false;

    for (let square of squares){
        square.classList.add('square');
        square.id = index ++; 
        
        square.onclick = (event)=>{

            if (currentHolder[event.target.id] || isGameEnd){
                return;
            }

            if (ender === 'X'){
                event.target.innerText = 'O';
                event.target.classList.add('O');
                currentHolder[event.target.id] = 'O';
                ender = 'O';
            }
            else if (ender === 'O'){
                event.target.innerText = 'X';
                event.target.classList.add('X');
                currentHolder[event.target.id] = 'X';
                ender = 'X';
            }

            if ( currentHolder[0] !== undefined && ((currentHolder[0]===currentHolder[1] && currentHolder[1]===currentHolder[2]) 
                || (currentHolder[0]===currentHolder[3] && currentHolder[3]===currentHolder[6]) 
                || (currentHolder[0]===currentHolder[4] && currentHolder[4]===currentHolder[8]) )){  
                
                status.innerText = `Congratulations! ${currentHolder[0]} is the Winner!`;
                status.classList.add('you-won');
                isGameEnd = true;
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
            
            else if (currentHolder[4] !== undefined && ((currentHolder[1]===currentHolder[4] && currentHolder[4]===currentHolder[7]) 
                || (currentHolder[3]===currentHolder[4] && currentHolder[4]===currentHolder[5])
                || (currentHolder[2]===currentHolder[4] && currentHolder[4]===currentHolder[6]) )){
                
                status.innerText = `Congratulations! ${currentHolder[4]} is the Winner!`;
                status.classList.add('you-won');
                isGameEnd = true;
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }

            else if( currentHolder[8] !== undefined && ((currentHolder[6]===currentHolder[7] && currentHolder[7]===currentHolder[8]) 
                || (currentHolder[2]===currentHolder[5] && currentHolder[5]===currentHolder[8]))){
                    
                status.innerText = `Congratulations! ${currentHolder[8]} is the Winner!!!`;
                status.classList.add('you-won');
                isGameEnd = true;
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }

        };

        square.onmouseover = event =>{
            if(!isGameEnd){
                event.target.classList.add('hover');
            }
        };

        square.onmouseleave = event =>{
            event.target.classList.remove('hover');
        };
    }

    restart.onclick = event =>{
        currentHolder = new Array(9);
        isGameEnd = false;
        
        status.classList.remove('you-won');
        status.innerText = 'Move the mouse over a square then click to play a X or an O.';

        ender = 'O';

        for (let square of squares){
            square.classList.remove('X');
            square.classList.remove('O');
            square.innerText = '';
        }

    };
}