document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('open');
});

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❣️';
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `float ${Math.random() * 2 + 3}s linear`;
    
    document.body.appendChild(heart);
    
    heart.addEventListener('animationend', () => heart.remove());
}

setInterval(createHeart, 300);
