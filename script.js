
document.addEventListener("DOMContentLoaded", function () {
    const welcomeScreen = document.getElementById("welcome-screen");
    const openBtn = document.getElementById("open-btn");
    const backgroundMusic = document.getElementById("background-music");
    const mainContent = document.getElementById("main-content");

    // ABRIR LA INVITACIÓN
    if (openBtn) {
        openBtn.addEventListener("click", function () {
            if (backgroundMusic) {
                backgroundMusic.play().catch(function (error) {
                    console.log("No se pudo reproducir la música:", error);
                });
            }

            if (welcomeScreen) {
                welcomeScreen.classList.add("hidden");
            }

            if (mainContent) {
                mainContent.classList.remove("hidden");
            }

            document.body.classList.remove("welcome-active");
        });
    }

    // CUENTA REGRESIVA
    const daysElement = document.getElementById("days");
    const hoursElement = document.getElementById("hours");
    const minutesElement = document.getElementById("minutes");

    // Fecha del evento: 14 de noviembre de 2026, 21:00, Argentina
    const eventDate = new Date("2026-11-14T21:00:00-03:00").getTime();

    function updateCountdown() {
        const now = Date.now();
        const difference = eventDate - now;

        if (difference <= 0) {
            if (daysElement) daysElement.textContent = "0";
            if (hoursElement) hoursElement.textContent = "0";
            if (minutesElement) minutesElement.textContent = "0";
            return;
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
        );

        if (daysElement) daysElement.textContent = days;
        if (hoursElement) hoursElement.textContent = hours;
        if (minutesElement) minutesElement.textContent = minutes;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
