/* ===================================
   GERENCIAMENTO DE WHATSAPP & DEPOIMENTOS
=================================== */
document.addEventListener("DOMContentLoaded", () => {
  const NUMERO_WHATSAPP = "5511993966779"; // Número oficial da Fran

  /* -----------------------------------
     1. Envio do Formulário de Depoimento
  ----------------------------------- */
  const formDepoimento = document.getElementById("formDepoimento");

  if (formDepoimento) {
    formDepoimento.addEventListener("submit", (event) => {
      event.preventDefault();

      const nome = document.getElementById("depoimentoNome").value.trim();
      const relacao = document.getElementById("depoimentoRelacao").value.trim();
      const texto = document.getElementById("depoimentoTexto").value.trim();

      // Formatação limpa da mensagem para a Fran
      const mensagemWhatsApp = 
        `Olá Fran! Gostaria de deixar meu depoimento para o site:\n\n` +
        `👤 *Nome:* ${nome}\n` +
        `🏠 *Experiência:* ${relacao}\n` +
        `💬 *Depoimento:*\n"${texto}"`;

      const urlFinal = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagemWhatsApp)}`;

      // Dispara o evento de rastreamento no Analytics/Pixel, se configurado
      if (typeof gtag === "function") {
        gtag("event", "generate_lead", {
          event_category: "Depoimento",
          event_label: "Envio de Depoimento via WhatsApp"
        });
      }

      // Abre a conversa no WhatsApp
      window.open(urlFinal, "_blank");

      // Limpa o formulário após o envio
      formDepoimento.reset();
    });
  }

  /* -----------------------------------
     2. Rastreamento dos Botões de WhatsApp
  ----------------------------------- */
  const botoesWhatsApp = document.querySelectorAll('a[href*="wa.me"]');

  botoesWhatsApp.forEach((botao) => {
    botao.addEventListener("click", () => {
      // Dispara evento para o Google Analytics se estiver ativo
      if (typeof gtag === "function") {
        gtag("event", "click", {
          event_category: "Contato",
          event_label: "Clique no Botao WhatsApp"
        });
      }

      // Dispara evento para o Meta Pixel se estiver ativo
      if (typeof fbq === "function") {
        fbq("track", "Contact");
      }
    });
  });
});