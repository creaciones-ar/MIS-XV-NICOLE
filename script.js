document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const openBtn = document.getElementById('open-btn');
    const backgroundMusic = document.getElementById('background-music');

    // Lógica para abrir la invitación y reproducir música
    if (openBtn) {
        openBtn.addEventListener('click', () => {
            // Ocultar pantalla de bienvenida
            welcomeScreen.classList.add('hidden');
            
            // Mostrar contenido principal
            mainContent.classList.remove('hidden');
            
            // Permitir scroll en el body
            document.body.classList.remove('welcome-active');

            // Reproducir música de fondo
            if (backgroundMusic) {
                backgroundMusic.play().catch(error => {
                    console.log("El navegador requirió interacción adicional para reproducir audio:", error);
                });
            }
        });
    }

    // Bloquear scroll inicial mientras está la pantalla de bienvenida
    document.body.classList.add('welcome-active');

    // ==========================================
    // CUENTA REGRESIVA (Fecha objetivo: 14 de Noviembre de 2026, 21:00 hs)
    // ==========================================
    const eventDate = new Date('November 14, 2026 21:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));

            const daysElem = document.getElementById('days');
            const hoursElem = document.getElementById('hours');
            const minutesElem = document.getElementById('minutes');

            if (daysElem) daysElem.innerText = days;
            if (hoursElem) hoursElem.innerText = hours < 10 ? '0' + hours : hours;
            if (minutesElem) minutesElem.innerText = minutes < 10 ? '0' + minutes : minutes;
        } else {
            // Si el evento ya pasó
            const countdownContainer = document.getElementById('countdown');
            if (countdownContainer) {
                countdownContainer.innerHTML = "<p>¡Llegó el gran día!</p>";
            }
        }
    }

    // Actualizar cada segundo
    setInterval(updateCountdown, 1000);
    updateCountdown();
});
