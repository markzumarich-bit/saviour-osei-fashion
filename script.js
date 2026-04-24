  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = item;
        const { offsetX: x, offsetY: y } = e;

        // Calculate rotation (Futuristic Tilt)
        const xRotation = ((y / height) - 0.5) * 20; // Tilts up/down
        const yRotation = ((x / width) - 0.5) * -20; // Tilts left/right

        // Apply the 3D effect
        const img = item.querySelector('img');
        img.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale(1.05)`;
        
        // Add a futuristic neon glow follow
        item.style.boxShadow = `${-yRotation}px ${xRotation}px 30px rgba(0, 255, 255, 0.2)`;
    });

    item.addEventListener('mouseleave', () => {
        const img = item.querySelector('img');
        img.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`;
        item.style.boxShadow = `0 10px 30px rgba(0,0,0,0.3)`;
    });
});
