let mid = document.getElementsByClassName("mid")[0];
let angle = 0;
let angularVelocity = 40;
let interval;
let isStarted = false;

window.addEventListener("load", () => {
    const t = [
        "💩",
        "🍌",
        "🍑",
        "🍆",
        "🖕",
    ]
    mid.innerHTML = t[Math.floor(Math.random() * 5)];
});

window.addEventListener("click", e => {
    touch(e.screenX, e.screenY);
});

window.addEventListener("touchstart", e => {
    touch(e.touches[0].screenX, e.touches[0].screenY);
});

function touch(x, y)
{
    if (x > 0 && x < window.screen.width / 2) {
        angularVelocity += 40;
        if (!interval){
            interval = setInterval(() => {
                angle += angularVelocity;
                mid.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    
                // 徐々に角速度を下げる
                angularVelocity *= 0.95;
    
                // 角速度が小さくなったら停止
                if (Math.abs(angularVelocity) < 0.1) {
                    clearInterval(interval);
                    interval = null;
                }
            }, 16); // 約60FPSで回転

        }
    }
    else
    if (x > window.screen.width / 2 && x < window.screen.width) {
        angularVelocity -= 40;
        if (!interval){
            interval = setInterval(() => {
                angle += angularVelocity;
                mid.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
    
                // 徐々に角速度を下げる
                angularVelocity *= 0.95;
    
                // 角速度が小さくなったら停止
                if (Math.abs(angularVelocity) < 0.1) {
                    clearInterval(interval);
                    interval = null;
                }
            }, 16); // 約60FPSで回転

        }
    }
}