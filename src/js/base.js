document.addEventListener('DOMContentLoaded', function () {
    const mqlViewport1024 = window.matchMedia('(min-width: 1024px)');
    // ---------------------------------------------------------------------------------------
    // Mobile Page Navigation open/close
    // ---------------------------------------------------------------------------------------
    const burger = document.querySelector('.burger');
    const pageHeader = document.querySelector('html');
    const html = document.querySelector('html');
    const siteNaviClose = document.querySelector('.site-navigation-close');

    function toggleMobileNavi() {
        html.classList.toggle('site-navigation-isopen');
        // html.classList.toggle('noscroll');
    }

    if (burger) {
        burger.addEventListener('click', toggleMobileNavi);
    }

    if (siteNaviClose) {
        siteNaviClose.addEventListener('click', toggleMobileNavi);
    }

    // ---------------------------------------------------------------------------------------
    // Handle changes from mobile to desktop  and vice versa
    // ---------------------------------------------------------------------------------------

    function viewport1024Change(mql) {
        if (pageHeader.classList.contains('site-navigation-isopen')) {
            toggleMobileNavi();
        }
    }

    viewport1024Change(mqlViewport1024);

    try {
        mqlViewport1024.addEventListener('change', (e) => viewport1024Change());
    } catch (e1) {
        try {
            // Safari
            mqlViewport1024.addListener((e) => viewport1024Change());
        } catch (e2) {
            console.error(e2);
        }
    }

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

    themeToggle.addEventListener('click', function () {
        console.log('hallo mond');
        if (htmlEl.dataset.theme === 'dark') {
            toggleTheme('light');
        } else {
            toggleTheme('dark');
        }
    });
});
