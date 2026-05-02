function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

window.addEventListener('scroll', function() {
    // Ndryshimi i ngjyrës së nav-barit
    const nav = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        nav.style.background = '#1a252f';
    } else {
        nav.style.background = '#425c75';
    }

    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
    }
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Opsionale: Mbyll menunë automatikisht kur klikon një link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});