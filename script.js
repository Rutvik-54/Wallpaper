function filterGallery() {
    const searchInput = document.querySelector('#search-bar').value.toLowerCase();
    const gallery = document.getElementById('gallery');
    const cards = gallery.getElementsByClassName('gallery-item');

    Array.from(cards).forEach(card => {
        const title = card.querySelector('.gallery-item-overlay').textContent.toLowerCase();
        const altText = card.querySelector('img').alt.toLowerCase();

        if (title.includes(searchInput) || altText.includes(searchInput)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }
    });
}
