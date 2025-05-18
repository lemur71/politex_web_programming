document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const storedTheme = localStorage.getItem('theme');
    
    const currentHour = new Date().getHours();
    const isNight = currentHour < 7 || currentHour >= 21;

    if(storedTheme) {
        document.body.setAttribute('data-theme', storedTheme);
    } else {
        document.body.setAttribute('data-theme', isNight ? 'night' : 'day');
    }
    updateButton();

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.body.getAttribute('data-theme');
        const newTheme = currentTheme === 'night' ? 'day' : 'night';
        document.body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateButton();
    });

    function updateButton() {
        const theme = document.body.getAttribute('data-theme');
        toggleBtn.textContent = theme === 'night' ? '☀' : '⏾';
    }

    setInterval(() => {
        const currentHour = new Date().getHours();
        const shouldBeNight = currentHour < 7 || currentHour >= 21;
        
        if(!localStorage.getItem('theme')) {
            document.body.setAttribute('data-theme', shouldBeNight ? 'night' : 'day');
            updateButton();
        }
    }, 60000);
});