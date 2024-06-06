document.getElementById('animateBtn').addEventListener('click', function() {
    const box = document.querySelector('.box');
    
    // Remove all animation classes in case button is clicked again
    box.classList.remove('animate-moveRight', 'animate-changeColor', 'animate-scaleUp', 'animate-rotate', 'animate-fadeOut');
    
    // Add the animation classes one after the other with delays
    setTimeout(() => {
        box.classList.add('animate-moveRight');
    }, 0);
    
    setTimeout(() => {
        box.classList.add('animate-changeColor');
    }, 1000);
    
    setTimeout(() => {
        box.classList.add('animate-scaleUp');
    }, 2000);
    
    setTimeout(() => {
        box.classList.add('animate-rotate');
    }, 3000);
    
    setTimeout(() => {
        box.classList.add('animate-fadeOut');
    }, 4000);
});
