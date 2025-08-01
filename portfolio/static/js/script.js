document.addEventListener('DOMContentLoaded', function () {
  
  const toggle = document.getElementById('theme-toggle');

  function animate(dotColor, lineColor){
    particlesJS (
    'particles-js', {
        "particles": {
          "number": { "value": 80 },
          "color": { "value": dotColor },
          "shape": { "type": "circle" },
          "opacity": { "value": 0.5 },
          "size": { "value": 3 },
          "line_linked": { "enable": true, "color": lineColor },
          "move": { "enable": true, "speed": 2 }
        },
        "interactivity": {
          "events": { "onhover": { "enable": true, "mode": "repulse" } }
        },
        "retina_detect": true
      }
    );
  }

  let dotColor = '#000000'
  let lineColor = '#000000'
  let currentTheme = 'light'
  animate(dotColor, lineColor)

  // Typing for name
  new Typed('#typed-name', {
    strings: ["Hello, I'm Rushikesh"],            // text to type
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
  });

  // Fixed for description
  new Typed('#fixed-desc', {
    strings: ["And I'm a "],
    startDelay: 1000, // starts after name
    typeSpeed: 50,
    backSpeed: 25,
    showCursor: false,
  })

  // Typing for description
  new Typed('#typed-desc', {
    strings: ["Python and Django Developer.", "Backend enthusiast.", "Data-driven problem solver."],
    startDelay: 2000, // starts after name
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
  });

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');

    if (document.body.classList.contains('dark-theme')) {
      toggle.classList.remove('fa-moon');
      toggle.classList.add('fa-sun');
      dotColor = '#ffffff'
      lineColor = '#ffffff'
      animate(dotColor, lineColor);

    } else {
      toggle.classList.remove('fa-sun');
      toggle.classList.add('fa-moon');
      dotColor = '#000000'
      lineColor = '#000000'
      animate(dotColor, lineColor);
    }

    // Collapse navbar if open
    const navbar = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: false });
    bsCollapse.hide();

    toggle.blur();
  });
});