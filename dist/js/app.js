document.getElementById('mobile-flip').ontouchstart = mobileFlip;

function mobileFlip(e) {
  e.this.classList.toggle('hover');
}
