
  // Contact form
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Save to localStorage when form is submitted
    localStorage.setItem('contactMessage', JSON.stringify({
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }));
    
    alert("✅ Message sent! Thank you.");
    form.reset();
  });

  const savedData = JSON.parse(localStorage.getItem('contactMessage'));
  console.log(savedData);