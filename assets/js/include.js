(async function () {
  // "Mypage"처럼 서브경로(GitHub Pages: /Mypage/)에서도 깨지지 않게 baseURI 기준 상대경로 사용
  const sidebarUrl = new URL('partials/sidebar.html', document.baseURI);

  const mount = document.querySelector('#sidebar');
  if (!mount) return;

  try {
    const html = await fetch(sidebarUrl).then(r => {
      if (!r.ok) throw new Error('Failed to load sidebar: ' + r.status);
      return r.text();
    });
    mount.outerHTML = html; // sidebar.html 안에 <div id="sidebar">...</div>가 들어있다는 가정
  } catch (e) {
    console.error(e);
  }
})();
