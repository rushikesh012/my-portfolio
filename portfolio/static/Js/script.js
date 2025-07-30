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