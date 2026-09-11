(() => {
  const lightbox = document.getElementById("lightbox");
  if (!lightbox) return;

  const img = lightbox.querySelector(".lightbox__img");
  const closeBtns = lightbox.querySelectorAll("[data-lightbox-close]");

  function open(src, alt = "") {
    img.src = src;
    img.alt = alt;
    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function close() {
    lightbox.classList.remove("is-open");
    img.src = "";
    img.alt = "";
    document.body.style.overflow = "";
  }

  document.querySelectorAll("[data-lightbox]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      open(el.getAttribute("data-lightbox"), el.getAttribute("data-alt") || "");
    });
  });

  closeBtns.forEach((b) => b.addEventListener("click", close));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
})();
