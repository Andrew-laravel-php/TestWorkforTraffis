const learnMoreButton = document.querySelector('.learnmore');
const learnMoreBtn = document.getElementById('learnmorebtn');
const downloadAppButton = document.querySelector('.downloadapp');
const moreIcon = document.querySelector('.more-icon');

let isDownloadAppVisible = true;

function toggleDownloadApp() {
    if (isDownloadAppVisible) {
        downloadAppButton.style.display = 'none';
        moreIcon.classList.add('rotate');
    } else {
        downloadAppButton.style.display = 'block';
        moreIcon.classList.remove('rotate');
    }
    isDownloadAppVisible = !isDownloadAppVisible;
}

learnMoreButton.addEventListener('click', toggleDownloadApp);
learnMoreBtn.addEventListener('click', toggleDownloadApp);
