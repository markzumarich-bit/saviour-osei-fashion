// Script.js
const player = document.getElementById('main-player');
const titleDisplay = document.getElementById('active-title');
const allVideos = document.querySelectorAll('.video-item');

allVideos.forEach(item => {
    item.addEventListener('click', function() {
        // 1. Change the visual 'active' state
        allVideos.forEach(v => v.classList.remove('active'));
        this.classList.add('active');
