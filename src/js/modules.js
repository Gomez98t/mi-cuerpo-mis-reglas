// Datos del semáforo de emociones (Módulo 1 nuevo)
const trafficLightEmotions = {
    'verde': {
        emoji: '😀',
        text: 'Cuando estás feliz, sonríes y compartes con los demás.',
        tip: 'Sigue adelante y comparte tu alegría.'
    },
    'amarillo': {
        emoji: '🤔',
        text: 'Cuando algo te preocupa o no entiendes algo, está bien pensar antes de actuar.',
        tip: 'Piensa en lo que puedes hacer.'
    },
    'rojo': {
        emoji: '😠',
        text: 'Cuando sientes enojo o tristeza, respira profundo y busca ayuda.',
        tip: 'Detente y respira.'
    }
};

const emotions = [
    { name: 'Feliz', emoji: '😊', color: '#fffacd', text: 'Qué bueno que estés feliz' },
    { name: 'Triste', emoji: '😢', color: '#b0e0e6', text: 'Está bien sentirse triste a veces. Puedes hablar con alguien de confianza' },
    { name: 'Enojado', emoji: '😠', color: '#ffb6c1', text: 'Cuando te enojes, puedes respirar profundo' },
    { name: 'Asustado', emoji: '😨', color: '#e6e6fa', text: 'Si tienes miedo, busca a alguien de confianza' }
];

const scenarios = [
    { emoji: '🤗', text: 'Un amigo quiere abrazarte', answer: true, feedback: 'Los abrazos de amigos están bien si tú quieres' },
    { emoji: '🤚', text: 'Alguien que no conoces quiere tocarte', answer: false, feedback: 'Muy bien. Puedes decir no si no te sientes cómodo' },
    { emoji: '👨‍⚕️', text: 'El doctor necesita revisarte con tu mamá presente', answer: true, feedback: 'Correcto. Los doctores cuidan tu salud' },
    { emoji: '🙅', text: 'Te sientes incómodo con algo y dices no', answer: true, feedback: 'Excelente. Siempre puedes decir no' },
    { emoji: '😰', text: 'Alguien te dice que guardes un secreto que te hace sentir mal', answer: false, feedback: 'Muy bien. Los secretos malos debes contarlos' },
    { emoji: '👨‍👩‍👧', text: 'Tu familia te da amor y te cuida', answer: true, feedback: 'Así es. Tu familia te quiere y protege' },
    { emoji: '🚫', text: 'Alguien te pide que hagas algo que no te gusta', answer: false, feedback: 'Correcto. Nadie debe obligarte a hacer algo malo' }
];

// Casos específicos para el semáforo (segunda parte del módulo 1)
const trafficLightCases = [
    { text: 'Tu amigo no quiere prestarte un juguete.', correctColor: 'amarillo' },
    { text: 'Tu maestra te felicita por tu dibujo.', correctColor: 'verde' },
    { text: 'Pierdes un juego en el recreo.', correctColor: 'rojo' }
];

const trustPeople = [
    { name: 'Mamá', emoji: '👩', text: 'Puedes confiar en tu mamá' },
    { name: 'Papá', emoji: '👨', text: 'Puedes confiar en tu papá' },
    { name: 'Profesor', emoji: '👨‍🏫', text: 'Puedes confiar en tu profesor' },
    { name: 'Doctor', emoji: '👨‍⚕️', text: 'Puedes confiar en tu doctor' },
    { name: 'Abuela', emoji: '👵', text: 'Puedes confiar en tu abuela' }
];

let scenarioIndex = 0;
let trafficCaseIndex = 0;
let starsCollected = 0;
let trafficPart1Done = false;
let trafficPart2Done = false;
// fin estado

// Renderizar módulos
function initializeTrafficLightModule() {
    const lightContainer = document.getElementById('trafficLight');
    const emotionCharacter = document.getElementById('emotionCharacter');
    const emotionText = document.getElementById('emotionText');
    const emotionTip = document.getElementById('emotionTip');
    const part1Title = document.getElementById('part1Title');
    const part1Container = document.getElementById('part1Container');
    const part2Title = document.getElementById('part2Title');
    const part2Container = document.getElementById('trafficCases');
    const menu = document.getElementById('trafficMenu');
    const menuTitle = document.getElementById('trafficMenuTitle');
    const back = document.getElementById('backToTrafficMenu');
    const backWrap = document.getElementById('trafficBack');
    const start1 = document.getElementById('startPart1');
    const start2 = document.getElementById('startPart2');
    if (!lightContainer) return;

    function showMenu() {
        menu.style.display = 'flex';
        menuTitle.style.display = 'block';
        part1Title.style.display = 'none';
        part1Container.style.display = 'none';
        part2Title.style.display = 'none';
        part2Container.style.display = 'none';
        backWrap.style.display = 'none';
    }

    function startPart1() {
        menu.style.display = 'none';
        menuTitle.style.display = 'none';
        part1Title.style.display = 'block';
        part1Container.style.display = 'flex';
        backWrap.style.display = 'block';
        audioManager.speak('Toca un color para descubrir la emoción');
    }

    function startPart2() {
        menu.style.display = 'none';
        menuTitle.style.display = 'none';
        part2Title.style.display = 'block';
        part2Container.style.display = 'flex';
        backWrap.style.display = 'block';
        audioManager.speak('Elige el color que mejor representa la situación');
    }

    start1.addEventListener('click', startPart1);
    start2.addEventListener('click', startPart2);
    back.addEventListener('click', showMenu);
    showMenu();

    function estimateSpeakingMs(text, rate = 0.8) {
        const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
        const baseWpm = 120 * rate; // más pausado para niños
        const ms = (words / Math.max(60, baseWpm)) * 60 * 1000;
        const minMs = 2500; // mínimo 2.5s por bloque
        return Math.max(minMs, ms);
    }

    lightContainer.querySelectorAll('.light').forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.dataset.color;
            const info = trafficLightEmotions[color];
            if (!info) return;

            // visual feedback
            showFeedback(btn.textContent.trim());
            emotionCharacter.textContent = info.emoji;
            emotionText.textContent = info.text;
            emotionTip.textContent = info.tip;

            // voice
            // voz: explicar y luego consejo, con tiempos estimados
            const textTime = estimateSpeakingMs(info.text, 0.8);
            const tipTime = estimateSpeakingMs(info.tip, 0.85);
            audioManager.speak(info.text, 0.8);
            setTimeout(() => {
                audioManager.speak(info.tip, 0.85);
            }, textTime + 400);

            starsCollected++;
            updateStars();

            if (!trafficPart1Done) {
                trafficPart1Done = true;
                const totalWait = textTime + 400 + tipTime + 800; // pequeño margen
                setTimeout(() => {
                    goNext();
                }, totalWait);
            }
        });
    });
}

function initializeTrafficLightCases() {
    const caseText = document.getElementById('caseText');
    const container = document.getElementById('trafficCases');
    if (!container) return;

    function loadTrafficCase() {
        if (trafficCaseIndex >= trafficLightCases.length) trafficCaseIndex = 0;
        const c = trafficLightCases[trafficCaseIndex];
        caseText.textContent = c.text;
        audioManager.speak(c.text);
    }

    function estimateSpeakingMs(text, rate = 0.8) {
        const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
        const baseWpm = 120 * rate;
        const ms = (words / Math.max(60, baseWpm)) * 60 * 1000;
        const minMs = 2500;
        return Math.max(minMs, ms);
    }

    container.querySelectorAll('.btn-choice-color').forEach(btn => {
        btn.addEventListener('click', () => {
            const choice = btn.dataset.choice;
            const current = trafficLightCases[trafficCaseIndex];
            const correct = choice === current.correctColor;
            showFeedback(correct ? '✅' : '💡');
            audioManager.playSound(correct ? 'success' : 'error');

            const info = trafficLightEmotions[choice];
            const why = info ? info.text : '';
            const explain = correct
                ? `¡Muy bien! ${why}`
                : `Casi. Para esta situación: ${trafficLightEmotions[current.correctColor].text}`;
            audioManager.speak(explain, 0.8);

            if (correct) {
                starsCollected++;
                updateStars();
            }

            const wait = estimateSpeakingMs(explain, 0.8) + 600;
            setTimeout(() => {
                trafficCaseIndex = (trafficCaseIndex + 1) % trafficLightCases.length;
                if (trafficCaseIndex === 0 && !trafficPart2Done) {
                    trafficPart2Done = true;
                    goNext(); // al terminar el conjunto de casos, continuar a los siguientes módulos
                } else {
                    loadTrafficCase();
                }
            }, wait);
        });
    });

    loadTrafficCase();
}

function renderEmotions() {
    const container = document.getElementById('emotionsContainer');
    container.innerHTML = emotions.map(emotion => `
        <div class="emotion-card" style="background: ${emotion.color};" data-emotion="${emotion.name}">
            ${emotion.emoji}
            <span>${emotion.name}</span>
        </div>
    `).join('');

    container.querySelectorAll('.emotion-card').forEach(el => {
        el.addEventListener('click', () => {
            const emotionName = el.dataset.emotion;
            const emotion = emotions.find(e => e.name === emotionName);
            showFeedback(emotion.emoji);
            audioManager.speak(emotion.text);
        });
    });
}

function renderTrustPeople() {
    const container = document.getElementById('trustContainer');
    container.innerHTML = trustPeople.map(person => `
        <div class="trust-person" data-person="${person.name}">
            ${person.emoji}
            <span>${person.name}</span>
        </div>
    `).join('');

    container.querySelectorAll('.trust-person').forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('selected');
            const personName = el.dataset.person;
            const person = trustPeople.find(p => p.name === personName);
            showFeedback('💚');
            audioManager.speak(person.text);
            starsCollected++;
        });
    });
}

function loadScenario() {
    if (scenarioIndex >= scenarios.length) {
        scenarioIndex = 0;
    }

    const scenario = scenarios[scenarioIndex];
    document.getElementById('scenarioEmoji').textContent = scenario.emoji;
    document.getElementById('scenarioText').textContent = scenario.text;
    audioManager.speak(scenario.text);
}

function answerScenario(answer) {
    const scenario = scenarios[scenarioIndex];
    const correct = answer === scenario.answer;
    
    showFeedback(correct ? '✅' : '💭');
    audioManager.playSound(correct ? 'success' : 'error');
    
    // Deshabilitar botones temporalmente
    const buttons = document.querySelectorAll('.btn-choice');
    buttons.forEach(btn => btn.disabled = true);
    
    let feedbackText = '';
    if (correct) {
        feedbackText = scenario.feedback;
        audioManager.speak(feedbackText);
        starsCollected++;
    } else {
        feedbackText = 'Piénsalo bien. ' + scenario.feedback;
        audioManager.speak(feedbackText);
    }
    
    // Calcular tiempo basado en la longitud del texto (aproximadamente 150 palabras por minuto)
    const words = feedbackText.split(' ').length;
    const speakingTime = (words / 150) * 60 * 1000; // en milisegundos
    const minTime = 4000; // mínimo 4 segundos
    const waitTime = Math.max(minTime, speakingTime + 1000); // agregar 1 segundo de pausa
    
    setTimeout(() => {
        scenarioIndex++;
        if (scenarioIndex < scenarios.length) {
            loadScenario();
        } else {
            scenarioIndex = 0;
            loadScenario();
        }
        // Reactivar botones
        buttons.forEach(btn => btn.disabled = false);
    }, waitTime);
}

// Inicializar todos los módulos
function initializeModules() {
    initializeTrafficLightModule();
    initializeTrafficLightCases();
    renderEmotions();
    renderTrustPeople();
    loadScenario();
    updateStars();
}

function updateStars() {
    const starsContainer = document.getElementById('starsEarned');
    const starCount = Math.min(5, Math.floor(starsCollected / 3));
    starsContainer.textContent = '⭐'.repeat(starCount);
}

function showFeedback(emoji) {
    const feedback = document.getElementById('feedback');
    feedback.textContent = emoji;
    feedback.classList.add('show');
    setTimeout(() => feedback.classList.remove('show'), 1000);
}