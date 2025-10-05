// Smooth Scroll + Particles
function navigateTo(sectionId, event) {
  createParticles(event);
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function createParticles(event) {
  const container = document.querySelector(".particle-container");
  const rect = event.currentTarget.getBoundingClientRect();

  for (let i = 0; i < 6; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    const x = rect.left + Math.random() * rect.width;
    const y = rect.top + rect.height / 2;

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    const size = Math.random() * 10 + 8;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.background = ["red", "#61dafb", "#2563eb"][
      Math.floor(Math.random() * 3)
    ];

    container.appendChild(particle);
    setTimeout(() => particle.remove(), 3000);
  }
}

// Certificate Modal
function openModal(imgPath) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";
  modalImg.src = imgPath;
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
