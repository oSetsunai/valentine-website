
function createHeartOrRose() {
    const heartOrRose = document.createElement('div');
    heartOrRose.classList.add(Math.random() > 0.5 ? 'heart' : 'rose');
    heartOrRose.innerHTML = Math.random() > 0.5 ? '❤' : '🌹';
    heartOrRose.style.left = `${Math.random() * 100}vw`;
    heartOrRose.style.top = `${Math.random() * 100}vh`;
    heartOrRose.style.fontSize = `${Math.random() * 2 + 1}rem`;
    heartOrRose.style.animationDuration = `${Math.random() * 3 + 2}s`;
    
    document.getElementById('hearts-and-roses').appendChild(heartOrRose);
    
    setTimeout(() => heartOrRose.remove(), 5000);
}


setInterval(createHeartOrRose, 500);


document.getElementById('yes-btn').addEventListener('click', () => {
    
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
    });

    
    setTimeout(() => {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: 0.3, y: 0.6 },
        });
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { x: 0.7, y: 0.6 },
        });
    }, 500);

    
    setTimeout(() => {
        window.location.href = 'yay.html';
    }, 500); // 2 seconds delay
});


document.getElementById('no-btn').addEventListener('mouseover', () => {
    const noButton = document.getElementById('no-btn');
    const randomX = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
});