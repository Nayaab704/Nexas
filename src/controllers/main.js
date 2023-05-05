

const signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  
  // Get selected values for languages
  const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map(el => el.value);
  
  // Get selected values for coding_platform
  const coding_platform = Array.from(document.querySelectorAll('input[name="coding_platform"]:checked')).map(el => el.value);

  // Get selected values for domain
  const domain = Array.from(document.querySelectorAll('input[name="domain"]:checked')).map(el => el.value);

  // Get selected values for experience
  const experience = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(el => el.value);

  const response = await fetch('http://localhost:8000/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
      languages,
      coding_platform,
      domain,
      experience,
    }),
  });

  try {
    const response = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const data = await response.json();
      console.log('User created successfully:', data);
    } else {
      console.error('Error creating user:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error sending request:', error);
  }

});
