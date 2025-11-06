// ======= MOBILE NAVIGATION TOGGLE =======
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  if (navList.classList.contains('open')) {
    navList.style.display = 'flex';
  } else {
    navList.style.display = 'none';
  }
});


// ======= BACK TO TOP BUTTON =======
const toTop = document.querySelector('.to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    toTop.style.display = 'block';
  } else {
    toTop.style.display = 'none';
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


// ======= SIMPLE FORM FEEDBACK =======
const form = document.querySelector('.booking-form');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // stop actual submission

  // get name from form
  const name = document.querySelector('#name').value;

  // show simple alert
  alert(`Thank you, ${name}! Your booking request has been sent successfully.`);

  // reset form
  form.reset();
});


// ======= GALLERY LIGHTBOX (SIMPLE VERSION) =======
const galleryItems = document.querySelectorAll('.gallery-item img');

// Create lightbox container
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

lightbox.style.display = 'none';
lightbox.style.position = 'fixed';
lightbox.style.top = 0;
lightbox.style.left = 0;
lightbox.style.width = '100%';
lightbox.style.height = '100%';
lightbox.style.background = 'rgba(0, 0, 0, 0.8)';
lightbox.style.justifyContent = 'center';
lightbox.style.alignItems = 'center';
lightbox.style.zIndex = '1000';

const img = document.createElement('img');
img.style.maxWidth = '90%';
img.style.maxHeight = '80%';
img.style.borderRadius = '8px';
lightbox.appendChild(img);

galleryItems.forEach(image => {
  image.addEventListener('click', () => {
    img.src = image.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
// ======= PAGE LOADER =======
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

// ======= SCROLL REVEAL =======
const reveals = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
});

// ======= WHATSAPP BUTTON =======
const whatsappBtn = document.createElement('a');
whatsappBtn.href = 'https://wa.me/2330531124287?text=Hi%20I%27d%20like%20to%20book%20a%20haircut!';
whatsappBtn.className = 'whatsapp-btn';
 whatsappBtn.innerHTML = '<img src="images/whatsapp.svg" alt="WhatsApp" width="28" height="28">';

whatsappBtn.target = '_blank';
document.body.appendChild(whatsappBtn);

