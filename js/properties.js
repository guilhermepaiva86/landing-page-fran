const imoveisData = [
  {
    id: 1,
    titulo: "Casa em Condomínio",
    bairro: "Vila Oliveira",
    detalhes: "4 quartos • 3 suítes • área gourmet",
    preco: "R$ 1.850.000",
    badge: "Exclusividade",
    imagem: "assets/images/imoveis/imovel-1.webp",
    linkWhatsapp: "https://wa.me/5511993966779?text=Ol%C3%A1%20Fran,%20gostaria%20de%20saber%20mais%20sobre%20a%20Casa%20em%20Condom%C3%ADnio%20na%20Vila%20Oliveira",
    // Galeria de Fotos adicionais
    galeria: [
      "assets/images/imoveis/imovel-1.webp",
      "assets/images/imoveis/imovel-1-sala.webp",
      "assets/images/imoveis/imovel-1-cozinha.webp",
      "assets/images/imoveis/imovel-1-gourmet.webp"
    ],
    // Link do vídeo do YouTube / Vimeo em formato embed (ou null se não tiver)
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" 
  },
  {
    id: 2,
    titulo: "Apartamento Alto Padrão",
    bairro: "Mogilar",
    detalhes: "3 quartos • varanda gourmet • 2 vagas",
    preco: "R$ 980.000",
    badge: "Destaque",
    imagem: "assets/images/imoveis/imovel-2.webp",
    linkWhatsapp: "https://wa.me/5511993966779?text=Ol%C3%A1%20Fran,%20gostaria%20de%20saber%20mais%20sobre%20o%20Apartamento%20no%20Mogilar",
    galeria: [
      "assets/images/imoveis/imovel-2.webp",
      "assets/images/imoveis/imovel-2-varanda.webp"
    ],
    videoUrl: null
    
  },
  {
    id: 2,
    titulo: "Apartamento Alto Padrão",
    bairro: "Mogilar",
    detalhes: "3 quartos • varanda gourmet • 2 vagas",
    preco: "R$ 980.000",
    badge: "Destaque",
    imagem: "assets/images/imoveis/imovel-2.webp",
    linkWhatsapp: "https://wa.me/5511993966779?text=Ol%C3%A1%20Fran,%20gostaria%20de%20saber%20mais%20sobre%20o%20Apartamento%20no%20Mogilar",
    galeria: [
      "assets/images/imoveis/imovel-2.webp",
      "assets/images/imoveis/imovel-2-varanda.webp"
    ],
    videoUrl: null
    
  },
  {
    id: 2,
    titulo: "Apartamento Alto Padrão",
    bairro: "Mogilar",
    detalhes: "3 quartos • varanda gourmet • 2 vagas",
    preco: "R$ 980.000",
    badge: "Destaque",
    imagem: "assets/images/imoveis/imovel-2.webp",
    linkWhatsapp: "https://wa.me/5511993966779?text=Ol%C3%A1%20Fran,%20gostaria%20de%20saber%20mais%20sobre%20o%20Apartamento%20no%20Mogilar",
    galeria: [
      "assets/images/imoveis/imovel-2.webp",
      "assets/images/imoveis/imovel-2-varanda.webp"
    ],
    videoUrl: null
    
  },
  {
    id: 2,
    titulo: "Apartamento Alto Padrão",
    bairro: "Mogilar",
    detalhes: "3 quartos • varanda gourmet • 2 vagas",
    preco: "R$ 980.000",
    badge: "Destaque",
    imagem: "assets/images/imoveis/imovel-2.webp",
    linkWhatsapp: "https://wa.me/5511993966779?text=Ol%C3%A1%20Fran,%20gostaria%20de%20saber%20mais%20sobre%20o%20Apartamento%20no%20Mogilar",
    galeria: [
      "assets/images/imoveis/imovel-2.webp",
      "assets/images/imoveis/imovel-2-varanda.webp"
    ],
    videoUrl: null
    
  },
  {
    id: 2,
    titulo: "Apartamento Alto Padrão",
    bairro: "Mogilar",
    detalhes: "3 quartos • varanda gourmet • 2 vagas",
    preco: "R$ 980.000",
    badge: "Destaque",
    imagem: "assets/images/imoveis/imovel-2.webp",
    linkWhatsapp: "https://wa.me/5511993966779?text=Ol%C3%A1%20Fran,%20gostaria%20de%20saber%20mais%20sobre%20o%20Apartamento%20no%20Mogilar",
    galeria: [
      "assets/images/imoveis/imovel-2.webp",
      "assets/images/imoveis/imovel-2-varanda.webp"
    ],
    videoUrl: null
    
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("carouselTrack");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Elementos do Modal
  const modal = document.getElementById("imovelModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalTitulo = document.getElementById("modalTitulo");
  const modalBairro = document.getElementById("modalBairro");
  const modalMediaContainer = document.getElementById("modalMediaContainer");
  const modalThumbnails = document.getElementById("modalThumbnails");
  const modalPreco = document.getElementById("modalPreco");
  const modalBtnWa = document.getElementById("modalBtnWa");

  if (!track) return;

  // 1. Renderiza os Cards no Carrossel
  track.innerHTML = imoveisData.map(imovel => `
    <article class="carousel-item">
      <div class="card-imagem-wrapper" style="cursor: pointer;" onclick="abrirModal(${imovel.id})">
        <span class="card-badge">${imovel.badge}</span>
        <img src="${imovel.imagem}" alt="${imovel.titulo} - ${imovel.bairro}">
      </div>
      
      <div class="card-corpo">
        <h3 onclick="abrirModal(${imovel.id})" style="cursor: pointer;">${imovel.titulo}</h3>
        <p class="card-bairro">Bairro: ${imovel.bairro}</p>
        <p class="card-detalhes-tecnicos">${imovel.detalhes}</p>
        
        <div class="card-rodape">
          <span class="card-preco">${imovel.preco}</span>
          <a href="${imovel.linkWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn-detalhes">
            Tenho interesse
          </a>
        </div>
      </div>
    </article>
  `).join('');

  // 2. Navegação do Carrossel
  const stepScroll = 320;
  if (nextBtn) nextBtn.addEventListener("click", () => track.scrollBy({ left: stepScroll, behavior: "smooth" }));
  if (prevBtn) prevBtn.addEventListener("click", () => track.scrollBy({ left: -stepScroll, behavior: "smooth" }));

  // 3. Função para Abrir o Modal
  window.abrirModal = (id) => {
    const imovel = imoveisData.find(item => item.id === id);
    if (!imovel) return;

    modalTitulo.textContent = imovel.titulo;
    modalBairro.textContent = `Bairro: ${imovel.bairro}`;
    modalPreco.textContent = imovel.preco;
    modalBtnWa.href = imovel.linkWhatsapp;

    // Carrega a foto principal inicial
    exibirImagemPrincipal(imovel.imagem);

    // Monta a galeria de miniaturas
    modalThumbnails.innerHTML = '';
    
    // Fotos
    if (imovel.galeria && imovel.galeria.length > 0) {
      imovel.galeria.forEach((fotoUrl, index) => {
        const imgThumb = document.createElement('img');
        imgThumb.src = fotoUrl;
        imgThumb.className = `thumb-item ${index === 0 ? 'active' : ''}`;
        imgThumb.onclick = () => {
          document.querySelectorAll('.thumb-item, .thumb-video-btn').forEach(t => t.classList.remove('active'));
          imgThumb.classList.add('active');
          exibirImagemPrincipal(fotoUrl);
        };
        modalThumbnails.appendChild(imgThumb);
      });
    }

    // Botão de Vídeo (se houver)
    if (imovel.videoUrl) {
      const videoBtn = document.createElement('button');
      videoBtn.className = 'thumb-video-btn';
      videoBtn.innerHTML = '▶ Vídeo';
      videoBtn.onclick = () => {
        document.querySelectorAll('.thumb-item, .thumb-video-btn').forEach(t => t.classList.remove('active'));
        videoBtn.classList.add('active');
        exibirVideoPrincipal(imovel.videoUrl);
      };
      modalThumbnails.appendChild(videoBtn);
    }

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  };

  // Funções Auxiliares de Exibição
  function exibirImagemPrincipal(src) {
    modalMediaContainer.innerHTML = `<img id="modalMainImg" src="${src}" alt="Foto em destaque do imóvel">`;
  }

  function exibirVideoPrincipal(url) {
    modalMediaContainer.innerHTML = `<iframe src="${url}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  }

  // Fechar Modal
  const fecharModal = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    modalMediaContainer.innerHTML = ''; // Limpa para pausar vídeos rodando
  };

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', fecharModal);
  
  // Fechar ao clicar fora da caixa do modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) fecharModal();
  });
});