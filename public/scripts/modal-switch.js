
const images = document.querySelectorAll('img.showroom');
const modal = document.getElementById('modal');
const figcaption = modal.querySelector('figcaption');
const modalCloser = document.getElementById('modal-closer');



images.forEach(function(image) {

    image.addEventListener('click', function() {
        const src = this.getAttribute('src');
        const name = this.getAttribute('alt');
        const description = this.getAttribute('data-description');

        modal.querySelector('img').setAttribute('src', src);
        figcaption.querySelector('span:first-child').textContent = name;
        figcaption.querySelector('span:last-child').textContent = description;

        modal.classList.add('open');
    });
    
});

modalCloser.addEventListener('click', function() {
    modal.classList.remove('open');
});