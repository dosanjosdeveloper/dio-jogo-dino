const dino = document.querySelector(".dino");
const background = document.querySelector('.background')
let isJumping = false;
let position;

function handleKeyUp(event) {
    if (event.keyCode === 32) {
        if (!isJumping) {
            jumper();
        }
    }
}

function jumper() {
    position = 00;
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 190) {
            clearInterval(upInterval);

            let dowInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(dowInterval);
                    isJumping = false;
                } else {
                    position -= 20;
                    dino.style.bottom = position + "px";
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + "px";
            //dino.style.width = position + "px";
        }
    }, 20);
}

function createCactus() {
    const cactuss = document.createElement('div');
    let cactusPosition = 1000;
    let randomTime = Math.random() + 6000;

    cactuss.classList.add('cactus');
    cactuss.style.left = 1000 + "px";
    background.appendChild(cactuss);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactuss);
        } else if(cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 classe="game-over">Fim de Jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactuss.style.left = cactusPosition + "px";
        }
    }, 20);

    setTimeout(createCactus,randomTime);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);