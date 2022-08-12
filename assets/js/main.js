const menus = document.querySelectorAll(".menu");

menus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.preventDefault();

    const href = e.target.innerText.toLowerCase();

    const element = document.querySelector(`#${href}`);

    element.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
