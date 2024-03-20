  const nav = document.getElementById('navigationBar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.style.backgroundColor = '#555';
    } else {
      nav.style.backgroundColor = '#333';
    }
    // Make About Us section always visible when scrolled down
    aboutUsSection.style.display = 'block';
  });

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.color = '#8e4848'; 
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#fff'; 
    });
  });
