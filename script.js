/* REVEAL */
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.classList.add('visible');
    }
});
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));

/* FLORES */
const flowerSection = document.querySelector('.flowers');

function createFlower() {
const flower = document.createElement('div');
flower.classList.add('flower');
flower.innerText = '🌹';
flower.style.left = Math.random() * 100 + 'vw';
flower.style.animationDuration = (6 + Math.random() * 6) + 's';
flowerSection.appendChild(flower);

setTimeout(() => flower.remove(), 12000);
}

window.addEventListener('scroll', () => {
const rect = flowerSection.getBoundingClientRect();
if (rect.top < window.innerHeight && rect.bottom > 0) {
    createFlower();
}
});