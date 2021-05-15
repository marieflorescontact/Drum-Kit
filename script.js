function playSound(keyPressEvent) {
  const keyPressed = keyPressEvent.keyCode;
  const audio = document.querySelector(`audio[data-key='${keyPressed}']`);
  const key = document.querySelector(`.key[data-key="${keyPressed}"]`);
  const image = document.querySelector(`img[data-key='${keyPressed}']`);
  if (!audio) return; //ne joue pas si il n'y pas de son
  audio.currentTime = 0; //remet le son au debut
  audio.play();
  key.classList.add("playing");
  image.style.visibility("visible");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}
window.addEventListener("keydown", playSound);
const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
