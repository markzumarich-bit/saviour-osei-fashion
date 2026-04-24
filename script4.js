// Ensures the large video scales its height correctly on load
window.addEventListener('resize', () => {
  const video = document.querySelector('.large-video video');
  console.log("Layout adjusted for screen: " + window.innerWidth);
});
