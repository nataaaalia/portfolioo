
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {

    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );

    menuToggle.setAttribute(
        'aria-label',
        isOpen ? 'Tutup menu' : 'Buka menu'
    );

});

navLinks.querySelectorAll('a').forEach((link) => {

    link.addEventListener('click', () => {

        navLinks.classList.remove('open');

        menuToggle.setAttribute(
            'aria-expanded',
            'false'
        );

        menuToggle.setAttribute(
            'aria-label',
            'Buka menu'
        );

    });

const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');

    menuToggle.setAttribute(
        'aria-expanded',
        String(isOpen)
    );
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

const sections = document.querySelectorAll(
    '#home, #about, #skills, #projects, #hobby'
);

const navItems = document.querySelectorAll('.nav-links a');

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            navItems.forEach(link => {
                link.classList.remove('active');

                if (
                    link.getAttribute('href') ===
                    '#' + entry.target.id
                ) {
                    link.classList.add('active');
                }
            });

        }

    });

}, {
    threshold: 0.35
});

sections.forEach(section => {
    observer.observe(section);
});


});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !subject || !message) {
        alert("Please complete all fields!");
        return;
    }

    const recipient = "your-email@gmail.com";

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    window.location.href =
        `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
});



