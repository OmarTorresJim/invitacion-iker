// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carousel img"); // Selecciona todas las imágenes del carrusel
    let current = 0;
  
    if (images.length === 0) return; // Evita errores si no hay imágenes
  
    // Función que muestra la siguiente imagen
    const showNextImage = () => {
      images[current].classList.remove("active"); // Oculta la imagen actual
      current = (current + 1) % images.length;    // Calcula el índice de la siguiente imagen
      images[current].classList.add("active");    // Muestra la siguiente imagen
    };
  
    // Cambia la imagen cada 3 segundos
    setInterval(showNextImage, 3000);
  });

  window.addEventListener('load', () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  });

  function typeWriter(element, speed = 50) {
    const text = element.textContent;
    element.textContent = "";
    let i = 0;
    const typing = setInterval(() => {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typing);
      }
    }, speed);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector("header h1");
    typeWriter(title);
  });
  const themeToggle = document.getElementById("toggle-theme");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeToggle.textContent = document.body.classList.contains("dark-mode")
      ? "☀️ Cambiar a modo día"
      : "🌙 Cambiar a modo noche";
  });

  const countdownElement = document.getElementById("countdown");
const targetDate = new Date("June 7, 2025 14:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    countdownElement.textContent = "🎉 ¡Hoy es el gran día de Iker Damián! 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent =
    `⏳ Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos para celebrar a Iker 🎂✨`;
}

// Actualiza cada segundo
setInterval(updateCountdown, 1000);
updateCountdown(); // Ejecuta al cargar


updateCountdown(); // Mostrar al cargar
setInterval(updateCountdown, 60 * 60 * 1000); // Actualiza cada hora

function saveMessage() {
    const input = document.getElementById("guestMessage");
    const messagesDiv = document.getElementById("messages");
  
    if (input.value.trim() !== "") {
      const p = document.createElement("p");
      p.textContent = input.value;
      messagesDiv.appendChild(p);
      input.value = "";
    }
  }

  function crearConfeti() {
    const confeti = document.createElement("div");
    confeti.classList.add("confeti");
    confeti.style.left = Math.random() * 100 + "vw";
    confeti.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(confeti);
  
    setTimeout(() => confeti.remove(), 5000);
  }
  
  window.addEventListener("scroll", () => {
    if (window.scrollY % 20 < 5) {
      crearConfeti();
    }
  });

  function sendMessageToWhatsApp() {
    const messageBox = document.getElementById("guestMessage");
    const message = messageBox.value.trim();
  
    if (message === "") {
      alert("Por favor escribe un mensaje antes de enviarlo.");
      return;
    }
  
    // Mostrar en pantalla el mensaje (opcional)
    const messagesDiv = document.getElementById("messages");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    messagesDiv.appendChild(newMessage);
  
    // Guardar en localStorage (opcional, por si se quiere recuperar después)
    let savedMessages = JSON.parse(localStorage.getItem("ikerMessages")) || [];
    savedMessages.push(message);
    localStorage.setItem("ikerMessages", JSON.stringify(savedMessages));
  
    // Enviar a WhatsApp
    const encodedMessage = encodeURIComponent("Mensaje para Iker: " + message);
    window.location.href = "https://wa.me/525620952765?text=" + encodedMessage;
  
    // Limpia el campo
    messageBox.value = "";
  }
  
  function createConfetti() {
    const container = document.createElement("div");
    container.classList.add("confetti");
    document.body.appendChild(container);
  
    for (let i = 0; i < 100; i++) {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti-piece");
  
      // Colores aleatorios bonitos
      const colors = ["#f44336", "#e91e63", "#ffeb3b", "#4caf50", "#03a9f4", "#ff9800"];
      confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
  
      // Posición y retraso aleatorio
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.animationDelay = `${Math.random() * 3}s`;
      confetti.style.width = `${8 + Math.random() * 4}px`;
      confetti.style.height = confetti.style.width;
  
      container.appendChild(confetti);
    }
  
    // Opcional: Quitar después de 15 segundos
    setTimeout(() => container.remove(), 15000);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    createConfetti();
  });

