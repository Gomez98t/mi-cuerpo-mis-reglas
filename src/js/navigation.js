// Sistema de navegación
let currentModule = 0;

const moduleTexts = [
    "¡Bienvenido! Vamos a aprender juntos",
    "Explora el semáforo de emociones y actúa con sus colores",
    "¿Cómo te sientes hoy? Toca la carita",
    "Vamos a aprender sobre tu espacio personal",
    "¿A quién puedes contarle si algo te molesta?",
    "¡Felicitaciones! Has completado todas las lecciones"
];

function goToModule(module) {
    // Ocultar todas las pantallas
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    
    // Mostrar la pantalla del módulo
    const screenId = module === 0 ? 'home' : `module${module}`;
    document.getElementById(screenId).classList.add('active');
    
    currentModule = module;
    updateProgress();
    audioManager.speak(moduleTexts[module]);
}

function updateProgress() {
    const progress = (currentModule / 5) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function goNext() {
    if (currentModule < 5) {
        goToModule(currentModule + 1);
    }
}

function goBack() {
    if (currentModule > 0) {
        goToModule(currentModule - 1);
    }
}

function goHome() {
    goToModule(0);
}