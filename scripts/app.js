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
        'pop-pink': '0 10px 25px -5px rgba(254, 49, 120, 0.3), 0 8px 10px -6px rgba(254, 49, 120, 0.2)',
        'pop-green': '0 10px 25px -5px rgba(68, 254, 82, 0.3), 0 8px 10px -6px rgba(68, 254, 82, 0.2)',
      }
    }
  }
}

const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(item => {
    item.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (!el.classList.contains('is-visible')) {
            observer.observe(el);
        }
    });

    const projectWrapper = document.getElementById('project-wrapper');
    const prevButton = document.getElementById('prev-project');
    const nextButton = document.getElementById('next-project');
    const indicatorsContainer = document.getElementById('carousel-indicators');
    
    if (projectWrapper) {
        const projectItems = document.querySelectorAll('.project-item');
        const totalProjects = projectItems.length;
        let currentIndex = 0;
        let allDots = [];

        if (totalProjects > 0) {
            for (let i = 0; i < totalProjects; i++) {
                const dot = document.createElement('button');
                dot.classList.add('indicator-dot');
                dot.setAttribute('data-index', i);
                
                dot.addEventListener('click', (e) => {
                    currentIndex = parseInt(e.target.getAttribute('data-index'));
                    updateCarousel();
                });
                indicatorsContainer.appendChild(dot);
                allDots.push(dot);
            }
        }

        function updateCarousel() {
            projectWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            allDots.forEach(dot => dot.classList.remove('active'));
            if(allDots[currentIndex]) {
               allDots[currentIndex].classList.add('active');
            }
            
            prevButton.disabled = currentIndex === 0;
            nextButton.disabled = currentIndex === totalProjects - 1;
        }

        nextButton.addEventListener('click', () => {
            if (currentIndex < totalProjects - 1) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        if (totalProjects > 0) {
            updateCarousel();
        }
    } 

});