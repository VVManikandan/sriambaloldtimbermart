document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent form from submitting to server
  
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    if (name && email && message) {
      alert('Thank you for your message, ' + name + '!');
      // You could also send this data to a server here
      document.getElementById('contact-form').reset();
    } else {
      alert('Please fill in all fields!');
    }
  });