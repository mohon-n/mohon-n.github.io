document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId && targetId.length > 1) {
      event.preventDefault();

      document.querySelector(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
