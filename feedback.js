document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('feedback-modal');
    const closeBtn = document.querySelector('.close');

    setTimeout(() => {
        modal.style.display = 'block';
    }, 60000);

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.style.display = 'none';
        }
    });
});