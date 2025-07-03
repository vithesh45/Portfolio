// const menuIcon =document.querySelector('#menu-icon');
// const navLinks =document.querySelector('.nav-links');

// menuIcon.onclick =()=>{
//     navLinks.classList.toggle('active');
// }

// const form = document.querySelector('.contact-form');
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     alert('Thank you for your message!');
//     form.reset();
// });
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const form = document.querySelector('.contact-form');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };

  fetch('https://formspree.io/f/manjkdrz', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then((res) => {
      if (res.ok) {
        form.reset();
        formMessage.textContent = '✅ Message sent successfully!';
        formMessage.style.color = 'green';
        formMessage.style.display = 'block';
      } else {
        formMessage.textContent = '❌ Failed to send message.';
        formMessage.style.color = 'red';
        formMessage.style.display = 'block';
      }
    })
    .catch(() => {
      formMessage.textContent = '❌ Error sending message.';
      formMessage.style.color = 'red';
      formMessage.style.display = 'block';
    });
});
