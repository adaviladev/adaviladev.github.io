const heroSection = document.getElementById('hero-img-container');

heroSection.addEventListener('mousemove', (e) => {
    // Get the width of the hero section
    const heroWidth = heroSection.offsetWidth;
    
    // Calculate the percentage of mouse position relative to the hero section width
    const mouseX = e.pageX - heroSection.offsetLeft;
    const percentX = (mouseX / heroWidth) * 100;
    
    // Adjust the background position based on mouse movement
    heroSection.style.backgroundPositionX = `${percentX}%`;
});