

document.addEventListener('scroll',function(){

    const parallaxSection = document.querySelectorAll('parallax')
    
    parallaxSection.forEach(section => {
        const scrollPosition = window.pageYOffset;
        section.style.backgroundPositionY = (scrollPosition * 0.5) + 'px';
    })
})