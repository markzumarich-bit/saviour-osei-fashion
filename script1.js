 // Get all the fashion topic boxes
const fashionBoxes = document.querySelectorAll('.stat-box');

fashionBoxes.forEach(box => {
    // 1. Movement effect (The Tilt)
    box.addEventListener('mousemove', (e) => {
        const rect = box.getBoundingClientRect();
        const x = e.clientX - rect.left; // position inside the box
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        // Calculate rotation (more subtle than the images)
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        box.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        box.style.backgroundColor = "rgba(255, 255, 255, 0.3)"; // Brightens the box on hover
        box.style.boxShadow = "0 20px 40px rgba(0,0,0,0.2)";
    });

    // 2. Reset effect when mouse leaves
    box.addEventListener('mouseleave', () => {
        box.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        box.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; // Back to original color
        box.style.boxShadow = "none";
    });
});
