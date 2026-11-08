document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.artworks.forEach(art => {
                const section = document.createElement('section');
                section.className = 'artwork';
                section.id = art.id;
                
                section.innerHTML = `
                    <img src="${art.image}" alt="${art.title}">
                    <h3>${art.title}, ${art.year}</h3>
                `;
                gallery.appendChild(section);
            });
        })
        .catch(error => console.error('Error loading data:', error));
});

// کد اسلایدر
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.slider-container img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;

    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        }

        if(nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            });

            prevBtn.addEventListener('click', () => {
                currentSlide = (currentSlide - 1 + slides.length) % slides.length;
                showSlide(currentSlide);
            });
        }
    }
});
