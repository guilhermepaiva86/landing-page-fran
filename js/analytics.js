const whatsappButton =
  document.querySelector("#whatsapp-button");

if (whatsappButton) {
  whatsappButton.addEventListener("click", () => {
    console.log("WhatsApp Click");
  });
}

const params =
  new URLSearchParams(window.location.search);

const source =
  params.get("utm_source");

console.log(source);



