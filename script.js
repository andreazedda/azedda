document.addEventListener('DOMContentLoaded', function() {
    // Dark Mode Toggle
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    toggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');
    });

    // Smooth Scrolling Navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Interactive Hover Effects on Project Links
    const projectLinks = document.querySelectorAll('#projects ul li a');
    projectLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.color = '#007BFF';
        });
        link.addEventListener('mouseout', function() {
            this.style.color = '';
        });
    });
});
