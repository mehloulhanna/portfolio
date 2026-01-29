tailwind.config = {
  theme: {
    extend: {
      colors: {
        'neon-pink': '#fe3178',
        'neon-green': '#44fe52',
      },
      fontFamily: {
        'fun': ['Bungee', 'cursive'],
        'sans': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'pop-pink': '8px 8px 0px rgba(254, 49, 120, 1)',
        'pop-green': '8px 8px 0px rgba(68, 254, 82, 1)',
        'glow': '0 0 20px rgba(254, 49, 120, 0.5)',
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const thumbs = document.querySelectorAll('.thumb-item');
    if(thumbs.length > 0) thumbs[0].classList.add('thumb-active');
});

function changeImage(element, src) {
    const mainImg = document.getElementById('main-image');
    document.querySelectorAll('.thumb-item').forEach(el => {
        el.classList.remove('thumb-active');
    });
    element.classList.add('thumb-active');
    mainImg.classList.remove('image-switch-anim');
    void mainImg.offsetWidth; 
    mainImg.src = src;
    mainImg.classList.add('image-switch-anim');
}