const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const resetGame = document.getElementById('resetGame'); 
const popup = document.querySelector('.popup');



const jump = ()=>{
    mario.classList.add('jump');

    setTimeout(()=>{
    
    mario.classList.remove('jump');    

    },500);
}

const loop = setInterval(()=>{
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
    
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){ 

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = '/Projetos/Mario Jump/IMAGENS/game-over.png';
        mario.style.width = '70px';
        mario.style.marginLeft =  '50px';
        
        popup.style.display = 'block';
        
        resetGame.style.display = 'block';
        clearInterval(loop);
    }
},10);

document.addEventListener('keydown', jump);