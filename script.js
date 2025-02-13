document.querySelector('.card').addEventListener('click', function() {
    this.classList.toggle('open');
});

// Heart animation
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    
    // Random starting position
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `float ${Math.random() * 2 + 3}s linear`;
    
    document.body.appendChild(heart);
    
    // Remove heart after animation
    heart.addEventListener('animationend', () => heart.remove());
}

// Create hearts periodically
setInterval(createHeart, 300);