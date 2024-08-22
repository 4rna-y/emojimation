let mid = document.getElementsByClassName("mid");

window.addEventListener("deviceorientation", e => {
    let alpha = e.alpha; // Z軸の回転 (0〜360)
    let beta = e.beta;   // X軸の回転 (-180〜180)
    let gamma = e.gamma; // Y軸の回転 (-90〜90)

    // 3D回転を適用
    mid[0].style.transform = `
        translate(-50%, -50%)
        rotateZ(${alpha}deg)
        rotateX(${90 - beta}deg)
        rotateY(${gamma}deg)
    `;
}, false)



function eulerToQuaternion(alpha, beta, gamma) {
    let alphaRad = alpha * Math.PI / 180;
    let betaRad = beta * Math.PI / 180;
    let gammaRad = gamma * Math.PI / 180;

    let cX = Math.cos(betaRad / 2);
    let cY = Math.cos(gammaRad / 2);
    let cZ = Math.cos(alphaRad / 2);
    let sX = Math.sin(betaRad / 2);
    let sY = Math.sin(gammaRad / 2);
    let sZ = Math.sin(alphaRad / 2);

    let w = cX * cY * cZ + sX * sY * sZ;
    let x = sX * cY * cZ - cX * sY * sZ;
    let y = cX * sY * cZ + sX * cY * sZ;
    let z = cX * cY * sZ - sX * sY * cZ;

    return { w: w, x: x, y: y, z: z };
}