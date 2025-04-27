document.getElementById('contactForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!email.value || !message.value) {
        alert('Please fill out all fields.');
        event.preventDefault();
    } else {
        alert('Message sent! (Simulation)');
    }
});
