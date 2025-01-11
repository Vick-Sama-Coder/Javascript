// Cria bolhas dinamicamente
function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    bubble.style.left = `${Math.random() * 100}%`; // Posição horizontal aleatória
    document.body.appendChild(bubble);
  
    // Remove a bolha após a animação terminar
    bubble.addEventListener('animationend', () => {
      bubble.remove();
    });
  }
  
  // Gera bolhas periodicamente
  setInterval(createBubble, 1000); // Cria uma bolha a cada segundo