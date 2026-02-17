document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".sidebar-toggle");
    const sidebar = document.getElementById("sidebar");
    if (!btn || !sidebar) return;

    const open = () => {
          document.body.classList.add("sidebar-open");
          btn.setAttribute("aria-expanded", "true");
        };

    const close = () => {
          document.body.classList.remove("sidebar-open");
          btn.setAttribute("aria-expanded", "false");
        };

    btn.addEventListener("click", (e) => {
          e.stopPropagation();
          document.body.classList.contains("sidebar-open") ? close() : open();
        });

    // Click outside to close
    document.addEventListener("click", (e) => {
          if (!document.body.classList.contains("sidebar-open")) return;
          const insideSidebar = e.target.closest("#sidebar");
          const isToggle = e.target.closest(".sidebar-toggle");
          if (!insideSidebar && !isToggle) close();
        });

    // ESC로 닫기
    document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") close();
        });
});

