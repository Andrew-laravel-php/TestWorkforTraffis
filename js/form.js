const contactForm = document.getElementById('contactForm');
const popup = document.querySelector('.popup');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    popup.style.display = 'block';
    setTimeout(() => {
        popup.style.display = 'none';
    }, 3000);

    contactForm.reset();
});
