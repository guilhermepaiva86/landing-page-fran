/**
 * Lógica da Landing Page
 * Fran Soluções Imobiliárias
 */

document.addEventListener('DOMContentLoaded', () => {
    // Lógica do Carrossel de Imóveis em Destaque (Setas Next/Prev)
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        const scrollStep = 340; // Quantidade de pixels deslocados por clique

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
    }
});




