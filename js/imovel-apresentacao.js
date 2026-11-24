/**
 * Lógica da Página de Apresentação de Imóvel
 * Fran Soluções Imobiliárias
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Cálculo Dinâmico do Valor por Metro Quadrado (R$/m²)
    const cardFinanceiro = document.getElementById('cardFinanceiro');
    
    if (cardFinanceiro) {
        const valor = parseFloat(cardFinanceiro.dataset.valor || 0);
        const area = parseFloat(cardFinanceiro.dataset.area || 0);
        const elExibeMetro = document.getElementById('exibeMetroQuadrado');

        if (valor > 0 && area > 0 && elExibeMetro) {
            const valorPorMetro = valor / area;
            
            const formatador = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
                maximumFractionDigits: 0
            });

            elExibeMetro.textContent = `${formatador.format(valorPorMetro)}/m²`;
        }
    }

    // 2. Lógica do Carrossel de Fotos (Setas Next/Prev)
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (track && prevBtn && nextBtn) {
        const scrollStep = 320; // Quantidade de pixels deslocados por clique

        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: scrollStep, behavior: 'smooth' });
        });

        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -scrollStep, behavior: 'smooth' });
        });
    }

    // 3. Galeria com Ampliação Modal (Lightbox)
    const galeriaItens = document.querySelectorAll('.galeria-item');
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxFechar = document.getElementById('lightboxFechar');

    function fecharLightbox() {
        if (!lightboxModal) return;
        lightboxModal.classList.remove('active');
        // Remove mídia dinâmica para parar reprodução de vídeo/áudio ao fechar
        const midiaDinamica = lightboxModal.querySelector('img, video, iframe');
        if (midiaDinamica) {
            midiaDinamica.remove();
        }
    }

    if (galeriaItens.length > 0 && lightboxModal) {
        galeriaItens.forEach(item => {
            item.addEventListener('click', () => {
                // Limpa conteúdo anterior antes de inserir o novo
                const midiaAnterior = lightboxModal.querySelector('img, video, iframe');
                if (midiaAnterior) midiaAnterior.remove();

                const videoSrc = item.getAttribute('data-video');
                const embedSrc = item.getAttribute('data-embed');
                const imgElement = item.querySelector('img');
                const fotoSrc = item.getAttribute('data-src') || (imgElement ? imgElement.src : '');

                if (videoSrc) {
                    const videoPlayer = document.createElement('video');
                    videoPlayer.src = videoSrc;
                    videoPlayer.controls = true;
                    videoPlayer.autoplay = true;
                    videoPlayer.playsInline = true;
                    lightboxModal.appendChild(videoPlayer);
                } else if (embedSrc) {
                    const iframePlayer = document.createElement('iframe');
                    iframePlayer.src = embedSrc;
                    iframePlayer.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
                    iframePlayer.allowFullscreen = true;
                    lightboxModal.appendChild(iframePlayer);
                } else if (fotoSrc) {
                    const imgAmpliada = document.createElement('img');
                    imgAmpliada.src = fotoSrc;
                    imgAmpliada.alt = imgElement ? imgElement.alt : 'Imagem Ampliada';
                    lightboxModal.appendChild(imgAmpliada);
                }

                lightboxModal.classList.add('active');
            });
        });

        if (lightboxFechar) {
            lightboxFechar.addEventListener('click', fecharLightbox);
        }

        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                fecharLightbox();
            }
        });
    }

    // 4. Sincroniza o texto da badge com o nome do arquivo fonte da imagem
    const itensCarrossel = document.querySelectorAll('#carouselTrack .galeria-item');
    itensCarrossel.forEach(item => {
        const img = item.querySelector('img');
        const video = item.querySelector('video');
        const badge = item.querySelector('.galeria-badge');

        const origem =
            item.getAttribute('data-video') ||
            item.getAttribute('data-src') ||
            (video ? video.getAttribute('src') : '') ||
            (img ? img.getAttribute('src') : '') ||
            item.getAttribute('data-embed') ||
            '';

        if (badge && origem.trim()) {
            const nomeArquivo = origem.trim().split('/').pop().split('?')[0];
            const nomeSemExtensao = nomeArquivo.replace(/\.[^/.]+$/, '');
            if (nomeSemExtensao) {
                badge.textContent = nomeSemExtensao;
            }
        }
    });

});