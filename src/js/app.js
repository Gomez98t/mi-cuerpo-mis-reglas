// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', () => {
    // Inicializar módulos
    initializeModules();
    
    // Mensaje de bienvenida
    audioManager.speak('¡Bienvenido! Vamos a aprender juntos sobre tu cuerpo y tus emociones');

    // Event listeners para botones principales
    document.querySelectorAll('[data-module]').forEach(btn => {
        btn.addEventListener('click', () => {
            const module = parseInt(btn.dataset.module);
            goToModule(module);
        });
    });

    // Reproductor de video
    const openVideoBtn = document.getElementById('openVideoBtn');
    const videoModal = document.getElementById('videoModal');
    const videoEl = document.getElementById('lessonVideo');
    const closeVideoBtn = document.getElementById('closeVideoBtn');
    const exitVideoBtn = document.getElementById('exitVideoBtn');
    const videoBackdrop = document.getElementById('videoBackdrop');

    function openVideo() {
        if (!videoModal || !videoEl) return;
        videoModal.style.display = 'block';
        setTimeout(() => {
            try { videoEl.play(); } catch(_) {}
        }, 100);
    }

    function closeVideo() {
        if (!videoModal || !videoEl) return;
        try { videoEl.pause(); } catch(_) {}
        videoModal.style.display = 'none';
    }

    if (openVideoBtn) openVideoBtn.addEventListener('click', openVideo);
    if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);
    if (exitVideoBtn) exitVideoBtn.addEventListener('click', closeVideo);
    if (videoBackdrop) videoBackdrop.addEventListener('click', closeVideo);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && videoModal && videoModal.style.display === 'block') {
            closeVideo();
        }
    });

    // Botones de navegación
    document.getElementById('backBtn').addEventListener('click', goBack);
    document.getElementById('nextBtn').addEventListener('click', goNext);
    document.getElementById('homeBtn').addEventListener('click', goHome);

    // Control de audio
    document.getElementById('soundToggle').addEventListener('click', () => {
        const enabled = audioManager.toggleSound();
        document.getElementById('soundToggle').textContent = enabled ? '🔊' : '🔇';
    });

    document.getElementById('repeatBtn').addEventListener('click', () => {
        audioManager.speak(moduleTexts[currentModule]);
    });

    document.getElementById('volumeBtn').addEventListener('click', () => {
        const slider = document.getElementById('volumeSlider');
        slider.style.display = slider.style.display === 'none' ? 'block' : 'none';
    });

    document.getElementById('volumeControl').addEventListener('input', (e) => {
        audioManager.setVolume(e.target.value);
    });

    // Botón de salir
    document.getElementById('exitBtn').addEventListener('click', () => {
        audioManager.speak('¡Hasta luego! Vuelve pronto');
        showFeedback('👋');
        
        // Si está en Electron, cerrar la aplicación
        if (typeof require !== 'undefined') {
            setTimeout(() => {
                const { ipcRenderer } = require('electron');
                ipcRenderer.send('quit-app');
            }, 2000);
        }
    });

    // Respuestas de escenarios
    document.querySelectorAll('.btn-choice').forEach(btn => {
        btn.addEventListener('click', () => {
            const answer = btn.dataset.answer === 'true';
            answerScenario(answer);
        });
    });

    // Soporte para teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goBack();
        if (e.key === 'Home') goHome();
        if (e.key === 'Escape') goHome();
    });

    // Ocultar slider de volumen al hacer click fuera
    document.addEventListener('click', (e) => {
        const slider = document.getElementById('volumeSlider');
        const volumeBtn = document.getElementById('volumeBtn');
        if (!slider.contains(e.target) && e.target !== volumeBtn) {
            slider.style.display = 'none';
        }
    });
});