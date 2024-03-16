function spinRoulette() {
    var degrees = Math.floor(Math.random() * 360) + 720; // Girar entre 720 y 1080 grados (2 a 3 vueltas)
    var roulette = document.getElementById('roulette');
    roulette.style.transition = 'transform 3s ease-out';
    roulette.style.transform = 'rotate(' + degrees + 'deg)';
}
