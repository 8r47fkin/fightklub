document.getElementById('animateBtn').addEventListener('click', function() {
    // Functions to trigger sequentially
    function animateBox1() {
        const box1 = document.getElementById('box1');
        box1.style.opacity = '1';
        box1.style.transform = 'translateX(100px)';
    }

    function animateBox2() {
        const box2 = document.getElementById('box2');
        box2.style.opacity = '1';
        box2.style.transform = 'translateX(100px)';
    }

    function animateBox3() {
        const box3 = document.getElementById('box3');
        box3.style.opacity = '1';
        box3.style.transform = 'translateX(100px)';
    }

    function scaleBox1() {
        const box1 = document.getElementById('box1');
        box1.style.transform = 'translateX(100px) scale(1.5)';
    }

    function scaleBox2() {
        const box2 = document.getElementById('box2');
        box2.style.transform = 'translateX(100px) scale(1.5)';
    }

    function scaleBox3() {
        const box3 = document.getElementById('box3');
        box3.style.transform = 'translateX(100px) scale(1.5)';
    }

    // Trigger functions sequentially with delays
    setTimeout(animateBox1, 0);
    setTimeout(animateBox2, 1000);
    setTimeout(animateBox3, 2000);
    setTimeout(scaleBox1, 3000);
    setTimeout(scaleBox2, 4000);
    setTimeout(scaleBox3, 5000);
});
