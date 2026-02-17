document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".sidebar-toggle");
  const sidebar = document.getElementById("sidebar");
  if (!btn || !sidebar) return;

  const setState = (open) => {
    document.body.classList.toggle("sidebar-open", open);
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  };

  btn.addEventListener("click", () => {
    setState(!document.body.classList.contains("sidebar-open"));
  });

  // 오버레이(배경) 클릭하면 닫기
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("sidebar-open")) return;

    const clickedInsideSidebar = e.target.closest("#sidebar");
    const clickedToggle = e.target.closest(".sidebar-toggle");
    if (!clickedInsideSidebar && !clickedToggle) setState(false);
  });

  // ESC로 닫기(PC/키보드)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setState(false);
  });
});
