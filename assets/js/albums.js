document.addEventListener("DOMContentLoaded", async () => {

  const list = document.getElementById("lpList");
  if (!list) return;

  for (const album of albums) {

    let noteHtml = "";

    try {
      const res = await fetch(album.note);
      noteHtml = await res.text();
    } catch (err) {
      noteHtml = "<p>Can't read the content</p>";
    }

    const imageHtml = album.link
      ? `<a href="${album.link}" target="_blank" rel="noopener">
                 <img src="${album.img}" alt="">
                        </a>`
      : `<img src="${album.img}" alt="">`;


    const section = document.createElement("section");
    section.className = "banner";

    section.innerHTML = `
        <div class="content">
            <header>
                    <h2 class="album-title js-title" data-title="${album.title}">
                              ${album.title}
                                      </h2>
                                              <div class="album-artist">${album.artist}</div>
                                                    </header>

            <div class="album-desc">
              ${noteHtml}
                    </div>
                        </div>

          <span class="image object">
            ${imageHtml}
                </span>
                  `;


    list.appendChild(section);
  }

  list.addEventListener("click", function(e) {
    const title = e.target.closest(".js-title");
    if (!title) return;

    title.classList.toggle("is-open");
  });

});


