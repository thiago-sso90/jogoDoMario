

const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');


const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    },500)
}

const loop = setInterval(() => {
    const canoPostion = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
 


    if(canoPostion <= 120 && canoPostion > 0 && marioPosition < 80){
        cano.style.animation = 'none'
        cano.style.left = `${canoPostion}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.src = './assets/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px';

        clearInterval(loop);
    }
},10)

document.addEventListener('keydown',pulo);
