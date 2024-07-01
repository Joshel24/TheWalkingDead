const showPlotButtons = document.querySelectorAll(".show-episode-plot");

showPlotButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const target = e.currentTarget.parentElement.nextElementSibling;

    if (target.classList.contains("show")) {
      target.classList.remove("show");
      e.currentTarget.innerText = "show plot ⮟";
    } else {
      target.classList.add("show");
      e.currentTarget.innerText = "hide plot ⮝";
    }
  });
});
