// Gestione della barra di ricerca
const searchInput = document.querySelector('.search-bar input');
const searchButton = document.querySelector('.search-bar button');

searchButton.addEventListener('click', () => {
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        // Simula una ricerca
        alert(`Ricerca in corso per: ${searchTerm}`);
    }
});

// Gestione delle categorie
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', () => {
        const categoryName = category.querySelector('span').textContent;
        alert(`Hai selezionato la categoria: ${categoryName}`);
    });
});

// Animazione smooth scroll per i link interni
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Sistema di rating interattivo
const stars = document.querySelectorAll('.rating .fas.fa-star');
stars.forEach(star => {
    star.addEventListener('click', () => {
        alert('Grazie per il tuo voto!');
    });
});

// Simulazione caricamento lazy delle immagini
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageOptions = {
        threshold: 0,
        rootMargin: '0px 0px 50px 0px'
    };

    const loadImage = (entry) => {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
    };

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadImage(entry);
                }
            });
        }, imageOptions);

        images.forEach(img => imageObserver.observe(img));
    }
});
