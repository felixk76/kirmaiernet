document.addEventListener('DOMContentLoaded', function() {
    // here code

    const htmlEl = document.getElementsByTagName('html')[0];
    var themeToggle = document.querySelector('.color-scheme-toggle');
    // Capture the current theme from local storage and adjust the page to use the current theme.
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

    if (currentTheme) {
        htmlEl.dataset.theme = currentTheme;
    }

    // When the user changes the theme, we need to save the new value on local storage
    const toggleTheme = (theme) => {
        htmlEl.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    };

    themeToggle.addEventListener('click', function() {
        console.log('hallo mond');
        if (htmlEl.dataset.theme === 'dark') {
            toggleTheme('light');
        } else {
            toggleTheme('dark');
        }
    });
});
