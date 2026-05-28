const CLIENT_WHATSAPP_NUMBER = "+919694551331";

const menuToggle = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

if (menuToggle && menu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const message = [
      "Namaste KhetiWithYogi, I want net house farming consultancy.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
      `Location: ${formData.get("location")}`,
      `Service: ${formData.get("service")}`,
      `Message: ${formData.get("message") || "Not shared"}`
    ].join("\n");

    if (!CLIENT_WHATSAPP_NUMBER) {
      formNote.textContent = "Website owner: add the WhatsApp number in assets/js/main.js to enable direct enquiry.";
      return;
    }

    const url = `https://wa.me/${CLIENT_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  });
}
