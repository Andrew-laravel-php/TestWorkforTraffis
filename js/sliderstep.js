const sliderstep = document.querySelector('.slider-step');
const imagesstep = sliderstep.querySelectorAll('img');
const paginationstep = document.querySelector('.pagination-step');

let currentIndexstep = 0;
let isDraggingstep = false;

function updatesliderstep() {
    sliderstep.style.transform = `translateX(-${currentIndexstep * 100}%)`;
}

function updatepaginationstep() {
    paginationstep.innerHTML = '';
    for (let i = 0; i < imagesstep.length; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        dot.addEventListener('click', () => {
            currentIndexstep = i;
            updatesliderstep();
            updatepaginationstep();
        });
        if (i === currentIndexstep) {
            dot.classList.add('active');
        }
        paginationstep.appendChild(dot);
    }
}

sliderstep.addEventListener('mousedown', (e) => {
    isDraggingstep = true;
    startX = e.clientX - sliderstep.offsetLeft;
    sliderstep.style.transition = 'none';
});

sliderstep.addEventListener('mousemove', (e) => {
    if (!isDraggingstep) return;
    const x = e.clientX - sliderstep.offsetLeft;
    const dragDistance = x - startX;
    sliderstep.style.transform = `translateX(${-(currentIndexstep * 100) + (dragDistance / sliderstep.offsetWidth) * 100}%)`;
});

sliderstep.addEventListener('mouseup', () => {
    isDraggingstep = false;
    sliderstep.style.transition = '';
    const dragDistance = startX - e.clientX + sliderstep.offsetLeft;
    if (dragDistance > sliderstep.offsetWidth * 0.2) {
        currentIndexstep = Math.max(0, currentIndexstep - 1);
    } else if (dragDistance < -sliderstep.offsetWidth * 0.2) {
        currentIndexstep = Math.min(imagesstep.length - 1, currentIndexstep + 1);
    }
    updatesliderstep();
    updatepaginationstep();
});

sliderstep.addEventListener('mouseleave', () => {
    if (!isDraggingstep) return;
    isDraggingstep = false;
    sliderstep.style.transition = '';
    updatesliderstep();
    updatepaginationstep();
});

updatepaginationstep();