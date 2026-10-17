document.querySelector('a[href="/challenge"]')
  .addEventListener('click', e => {
    e.preventDefault();
    location.href =
      'https://webhook.site/67909b69-79e2-46cd-8eb1-bf3cbfddac04?stage=challenge_clicked';
  }, true);
