document.querySelector('.video-preview').addEventListener('click', function() {
    const videoPreview = this;
    const iframe = videoPreview.nextElementSibling;
    
    // Показываем iframe (видео) и скрываем превью
    iframe.style.display = 'block';
    videoPreview.style.display = 'none';
    
    // Запускаем видео при клике на превью
    iframe.src += '&autoplay=1';
});