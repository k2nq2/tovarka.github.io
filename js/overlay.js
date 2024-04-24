
document.addEventListener('DOMContentLoaded', function() {
    const sliderItems = document.querySelectorAll('.slider-item');
    const overlay = document.querySelector('.overlay');

    sliderItems.forEach(item => {
        item.addEventListener('click', function(event) {
            const iframe = this.querySelector('iframe');
            if (iframe) {
                overlay.innerHTML = ''; // Очистимо оверлей
                overlay.appendChild(iframe.cloneNode(true)); // Додамо клон iframe в оверлей
                overlay.style.display = 'flex'; // Показуємо оверлей
                event.stopPropagation(); // Зупиняємо подальше спливання події
            }
        });
    });

    overlay.addEventListener('click', function(event) {
        if (event.target.tagName !== 'IFRAME') { // Перевіряємо, чи клік був на iframe
            this.innerHTML = ''; // Очищуємо оверлей при кліку поза iframe
            this.style.display = 'none'; // Приховуємо оверлей
        }
    });
});