// Contact Form Handling
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  const message = event.target.message.value;

  if(name && email && message) {
    alert(`Thank you for your message, ${name}! I'll get back to you soon.`);
    event.target.reset();  // Reset the form
  } else {
    alert('Please fill in all fields.');
  }
});
