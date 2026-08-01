const switchSound = new Audio('https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3');
const typingSound = new Audio('https://assets.mixkit.co/active_storage/sfx/213/213-preview.mp3');

// Pre-load sounds
switchSound.load();
typingSound.load();

export const playSwitchSound = () => {
  switchSound.currentTime = 0;
  switchSound.volume = 0.5;
  switchSound.play().catch(e => console.log('Audio play failed:', e));
};

export const playTypingSound = () => {
  typingSound.currentTime = 0;
  typingSound.volume = 0.2;
  typingSound.play().catch(e => console.log('Audio play failed:', e));
};

export const stopTypingSound = () => {
  typingSound.pause();
  typingSound.currentTime = 0;
};
