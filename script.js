
document.addEventListener('DOMContentLoaded', function () {

  
    const searchInput = document.getElementById('search');
    const videoCards = document.querySelectorAll('.video-card');

    
    searchInput.addEventListener('input', function (e) {
        const searchTerm = e.target.value.toLowerCase();

        videoCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();

            if (title.includes(searchTerm)) {
                card.style.display = 'block';
                card.classList.add('highlight');
            } else {
                card.style.display = 'none';
                card.classList.remove('highlight');
            }
        });
    });


    videoCards.forEach((card, index) => {
        card.style.opacity = 0;
        setTimeout(() => {
            card.style.transition = 'opacity 0.5s ease';
            card.style.opacity = 1;
        }, index * 200);
    });


    videoCards.forEach(card => {
        card.addEventListener('click', function () {
            videoCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

});

