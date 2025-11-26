// Sistema de audio y síntesis de voz
class AudioManager {
    constructor() {
        this.soundEnabled = true;
        this.volume = 0.8;
        this.currentUtterance = null;
    }

    speak(text, rate = 0.8) {
        if (!this.soundEnabled) return;

        if ('speechSynthesis' in window) {
            speechSynthesis.cancel();
            
            this.currentUtterance = new SpeechSynthesisUtterance(text);
            this.currentUtterance.lang = 'es-ES';
            this.currentUtterance.rate = rate;
            this.currentUtterance.pitch = 10.0;
            this.currentUtterance.volume = this.volume;
            
            speechSynthesis.speak(this.currentUtterance);
        }
        
        this.playSound('click');
    }

    playSound(type = 'click') {
        if (!this.soundEnabled) return;

        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        const frequencies = {
            click: 800,
            success: 1200,
            error: 400,
            reward: 1500
        };
        
        oscillator.frequency.value = frequencies[type] || 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(this.volume * 0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }

    toggleSound() {
        this.soundEnabled = !this.soundEnabled;
        return this.soundEnabled;
    }

    setVolume(value) {
        this.volume = value / 100;
    }

    repeatLastText() {
        if (this.currentUtterance && 'speechSynthesis' in window) {
            speechSynthesis.cancel();
            speechSynthesis.speak(this.currentUtterance);
        }
    }
}

const audioManager = new AudioManager();