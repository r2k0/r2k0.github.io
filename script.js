document.getElementsByTagName("h1")[0].classList.add("pulsate");
// script.js
document.addEventListener('mousemove', (event) => {
  const { clientX, clientY } = event;
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Calculate the mouse position as a percentage of the screen size
  const xPercent = (clientX / screenWidth) * 100;
  const yPercent = (clientY / screenHeight) * 100;

  // Modify the background gradient based on the mouse position
  //const background = document.getElementById('interactive-background');
  background.style.background = `linear-gradient(${135 + xPercent}deg, #c65965 ${yPercent}%, #d65656)`;
});
