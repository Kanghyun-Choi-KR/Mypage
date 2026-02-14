(async function () {
  const mount = document.querySelector('#sidebar');
  if (!mount) return;

  const sidebarUrl = new URL('partials/sidebar.html', document.baseURI);

  try {
    const r = await fetch(sidebarUrl);
    const html = await r.text();

    mount.outerHTML = html;

    document.querySelectorAll('#sidebar .opener').forEach(opener => {
      opener.addEventListener('click', function (e) {
        e.preventDefault();
        opener.classList.toggle('active');
      });
    });

  } catch (e) {
    console.error(e);
  }
})();

