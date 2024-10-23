$('.carousel').carousel({
    interval: 2000
  });
  
function scrollToProperty(propertyType) {
    const element = document.getElementById(propertyType);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Dummy response simulation
    document.getElementById('formResponse').innerHTML = `
        <div class="alert alert-success" role="alert">
            Thank you, ${name}. We have received your message and will get back to you at ${email}.
        </div>
    `;
});