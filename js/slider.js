const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const pagination = document.querySelector('.pagination');

let currentIndex = 0;
let isDragging = false;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function updatePagination() {
    pagination.innerHTML = '';
    for (let i = 0; i < images.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateSlider();
            updatePagination();
        });
        if (i === currentIndex) {
            dot.classList.add('active');
        }
        pagination.appendChild(dot);
    }
}

slider.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - slider.offsetLeft;
    slider.style.transition = 'none';
});

slider.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - slider.offsetLeft;
    const dragDistance = x - startX;
    slider.style.transform = `translateX(${-(currentIndex * 100) + (dragDistance / slider.offsetWidth) * 100}%)`;
});

slider.addEventListener('mouseup', () => {
    isDragging = false;
    slider.style.transition = '';
    const dragDistance = startX - e.clientX + slider.offsetLeft;
    if (dragDistance > slider.offsetWidth * 0.2) {
        currentIndex = Math.max(0, currentIndex - 1);
    } else if (dragDistance < -slider.offsetWidth * 0.2) {
        currentIndex = Math.min(images.length - 1, currentIndex + 1);
    }
    updateSlider();
    updatePagination();
});

slider.addEventListener('mouseleave', () => {
    if (!isDragging) return;
    isDragging = false;
    slider.style.transition = '';
    updateSlider();
    updatePagination();
});

updatePagination();

// Запуск слайдера автоматически
// setInterval(() => {
//     currentIndex = (currentIndex + 1) % images.length;
//     updateSlider();
//     updatePagination();
// }, 5000);
