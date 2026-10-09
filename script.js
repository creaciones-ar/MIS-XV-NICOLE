document.addEventListener("DOMContentLoaded", function() {
    const welcomeScreen = document.getElementById("welcome-screen");
    const openBtn = document.getElementById("open-btn");
    const backgroundMusic = document.getElementById("background-music");
    const mainContent = document.getElementById("main-content");

    if (openBtn) {
        openBtn.addEventListener("click", function() {
            // Reproducir la música
            if (backgroundMusic) {
                backgroundMusic.play().catch(error => {
                    console.log("Error al reproducir audio:", error);
                });
            }

            // Ocultar pantalla de bienvenida
            if (welcomeScreen) {
                welcomeScreen.classList.add("hidden");
            }

            // Mostrar el contenido principal y quitar el bloqueo del body
            if (mainContent) {
                mainContent.classList.remove("hidden");
            }
            document.body.classList.remove("welcome-active");
        });
    }
});
