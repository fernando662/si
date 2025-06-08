document.addEventListener('DOMContentLoaded', function() {
    // Mostrar mensaje oculto al hacer clic en el botón
    const showMoreBtn = document.getElementById('show-more');
    const hiddenMessage = document.getElementById('hidden-message');
    
    showMoreBtn.addEventListener('click', function() {
        if (hiddenMessage.style.display === 'block') {
            hiddenMessage.style.display = 'none';
            showMoreBtn.textContent = 'Leer más';
        } else {
            hiddenMessage.style.display = 'block';
            showMoreBtn.textContent = 'Ocultar';
        }
    });
    
    // Contador de tiempo
    let seconds = 0;
    const timerElement = document.getElementById('timer');
    
    setInterval(function() {
        seconds++;
        timerElement.textContent = seconds;
    }, 1000);
    
    // Crear corazones flotantes
    const colors = ['#ff7675', '#fd79a8', '#fab1a0', '#ff9ff3', '#fdcb6e'];
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('floating-heart');
        
        // Posición aleatoria
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        
        // Tamaño aleatorio
        const size = Math.random() * 20 + 10;
        heart.style.width = size + 'px';
        heart.style.height = size + 'px';
        
        // Color aleatorio
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.textContent = '❤';
        
        // Animación
        const animationDuration = Math.random() * 5 + 5;
        heart.style.animation = `float ${animationDuration}s linear forwards`;
        
        document.querySelector('.floating-hearts').appendChild(heart);
        
        // Eliminar el corazón después de la animación
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }
    
    // Crear corazones cada 300ms
    setInterval(createHeart, 300);
    
    // Efecto de escritura para el mensaje principal
    const messages = [
        "Te amo, Lina",
        "Eres mi mejor amiga",
        "Eres especial para mí",
        "Eres increíble"
    ];
    
    const mainMessage = document.getElementById('main-message');
    let currentMessageIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    
    function typeWriter() {
        const currentMessage = messages[currentMessageIndex];
        
        if (isDeleting) {
            mainMessage.textContent = currentMessage.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 100;
        } else {
            mainMessage.textContent = currentMessage.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 150;
        }
        
        if (!isDeleting && charIndex === currentMessage.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pausa al final
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
            typingSpeed = 500; // Pausa antes de empezar nuevo mensaje
        }
        
        setTimeout(typeWriter, typingSpeed);
    }
    
    // Iniciar el efecto de escritura
    setTimeout(typeWriter, 1000);
});