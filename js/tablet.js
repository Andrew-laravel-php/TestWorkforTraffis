const closeIcon = document.getElementById('close');
const tabletMenu = document.querySelector('.tablet-menu');
const openIcon = document.getElementById('burger');
closeIcon.addEventListener('click', () => {
    tabletMenu.style.display = 'none';
});
openIcon.addEventListener('click', () => {
    tabletMenu.style.display = 'block';
});