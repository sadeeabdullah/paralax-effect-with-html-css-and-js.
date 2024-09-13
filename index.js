document.addEventListener('scroll', function() {
    console.log("event triggered")
    const parallaxSection = document.querySelectorAll('.parallax');
    
    parallaxSection.forEach(section => {
        const scrollPosition = window.pageYOffset;
        section.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
    });
});
