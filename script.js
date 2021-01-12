const dino = document.querySelector('.dino');

function handleKeyup(event) { 
    if (event.keyCode === 32)   {
        console.log('Pressionou espaço!');
    } 
}

document.addEventListener('keyup',handleKeyup);