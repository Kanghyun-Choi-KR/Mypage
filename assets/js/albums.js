document.addEventListener("DOMContentLoaded", async () => {

  const albums = [
    
    {
      title: "The Rise And Fall Of Ziggy Stardust And The Spiders From Mars",
      artist: "David Bowie",
      img: "album_art/davidbowie_stardust.jpg",
      note: "album_note/davidbowie_stardust.html"
    },

    {
      title: "역성",
      artist: "Seung-yoon Lee",
      img: "album_art/leeseungyoon_yeokseong.jpg",
      note: "album_note/leeseungyoon_yeokseong.html"
    },
    
    {
      title: "꿈의 거처",
      artist: "Seung-yoon Lee",
      img: "album_art/leeseungyoon_dream.jpg",
      note: "album_note/leeseungyoon_dream.html"
    },

    {
      title: "TIMELY!!",
      artist: "Anri",
      img: "album_art/anri_timely.jpg",
      note: "album_note/anri_timely.html"
    },
    
    {
      title: "Heaven Beach",
      artist: "Anri",
      img: "album_art/anri_heavenbeach.jpg",
      note: "album_note/anri_heavenbeach.html"
    }
  ];

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

    const section = document.createElement("section");
    section.className = "banner";

    section.innerHTML = `
      <div class="content">
          <header>
            <h2 class="album-title">${album.title}</h2>
                  <div class="album-artist">${album.artist}</div>
                      </header>
                          <div class="album-desc">
                                ${noteHtml}
                                    </div>
                                      </div>
                                        <span class="image object">
                                            <img src="${album.img}" alt="">
                                              </span>
                                              `;

    list.appendChild(section);
  }

});


