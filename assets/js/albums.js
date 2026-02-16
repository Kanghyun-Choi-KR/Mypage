document.addEventListener("DOMContentLoaded", async () => {

  const albums = [
    {
      title: "Seung-yoon Lee, 역성",
      img: "album_art/leeseungyoon_yeokseong.jpg",
      note: "album_note/leeseungyoon_yeokseong.html"
    },
    
    {
      title: "Seung-yoon Lee, 꿈의 거처",
      img: "album_art/leeseungyoon_dream.jpg",
      note: "album_note/leeseungyoon_dream.html"
    },

    {
      title: "Anri, TIMELY!!",
      img: "album_art/anri_timely.jpg",
      note: "album_note/anri_timely.html"
    },
    
    {
      title: "Anri, Heaven Beach",
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
                <header><h1>${album.title}</h1></header>
                        ${noteHtml}
                              </div>
                                    <span class="image object">
                                            <img src="${album.img}" alt="">
                                                  </span>
                                                      `;

    list.appendChild(section);
  }

});


