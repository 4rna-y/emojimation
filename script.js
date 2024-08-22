let mid = document.getElementsByClassName("mid");

window.addEventListener("deviceorientation", e => {
    let d = 90 - e.beta;
    if (d < 0) {
        d += 360;
    }
    mid[0].style.transform = `translate(-50%, -50%) rotate(${d}deg)`;
}, false)