function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
}


function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(rightNumbers, 10);

    if (left < 400) {
      dodger.style.left = `${left + 1}px`;
    }
}

const the_thing=document.getElementById('dodger');
function movingRight(){
    
    the_thing.addEventListener('click',moveDodgerRight);
}
movingRight();


