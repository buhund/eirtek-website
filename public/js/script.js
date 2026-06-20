const heroCard = document.querySelector(".hero-card");

document.addEventListener("pointermove", (event) => {
  const xPosition = event.clientX / window.innerWidth - 0.5;
  const yPosition = event.clientY / window.innerHeight - 0.5;

  heroCard.style.transform = `
    perspective(900px)
    rotateX(${yPosition * -4}deg)
    rotateY(${xPosition * 4}deg)
  `;
});

document.addEventListener("pointerleave", () => {
  heroCard.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg)";
});
