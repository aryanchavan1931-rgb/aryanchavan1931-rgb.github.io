// year
document.getElementById("year").innerText = new Date().getFullYear();

// particles
tsParticles.load("particles-js", {
  particles: {
    number: { value: 50 },
    size: { value: 3 },
    move: { enable: true },
    links: { enable: true }
  }
});
