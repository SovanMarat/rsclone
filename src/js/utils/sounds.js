export default function playSound(sound) {
  const { body } = document;
  const audio = document.createElement('audio');
  audio.className = 'audio';
  audio.setAttribute('src', sound);
  body.append(audio);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
}
