/* =========================
    CARROSSEL
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carouselTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (track && prevBtn && nextBtn) {
        // Função para calcular a largura de scroll dinâmica
        const getScrollAmount = () => {
            const firstItem = track.querySelector(".carousel-item");
            return firstItem ? firstItem.offsetWidth + 20 : 300; // largura do card + gap
        };

        // Avançar carrossel
        nextBtn.addEventListener("click", () => {
            track.scrollBy({ left: getScrollAmount(), behavior: "smooth" });
        });

        // Voltar carrossel
        prevBtn.addEventListener("click", () => {
            track.scrollBy({ left: -getScrollAmount(), behavior: "smooth" });
        });
    }
});

/* =========================
    FORMULÁRIO DE CONTATO
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formContato");

    if (form) {
        form.addEventListener("submit", (event) => {
            // 1. Evita que a página recarregue ao clicar em enviar
            event.preventDefault();

            // 2. Captura os valores que o cliente digitou nas caixas de texto
            const nome = document.getElementById("nome").value;
            const telefone = document.getElementById("telefone").value;
            const mensagem = document.getElementById("mensagem").value;

            // 3. Configure aqui o número da Fran (Apenas números: País + DDD + Celular)
            const numeroWhatsApp = "5511993966779";

            // 4. Monta o texto pulando linhas (\n) para ficar legível e profissional
            const textoMensagem = `Olá Fran! Um novo lead preencheu o formulário do site:\n\n` +
                                  `👤 *Nome:* ${nome}\n` +
                                  `📞 *Telefone:* ${telefone}\n` +
                                  `💬 *Mensagem:* ${mensagem}`;

            // 5. Converte o texto para o formato de link da internet (substitui espaços e quebras de linha)
            const textoCodificado = encodeURIComponent(textoMensagem);

            // 6. Cria o link final da API do WhatsApp
            const urlFinal = `https://wa.me/${numeroWhatsApp}?text=${textoCodificado}`;

            // 7. Abre o WhatsApp em uma nova aba do navegador
            window.open(urlFinal, "_blank");
        });
    }
});

