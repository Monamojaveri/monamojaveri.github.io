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
