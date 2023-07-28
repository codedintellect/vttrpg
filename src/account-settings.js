function toggle(query, c) {
  let elmnt = document.querySelector(query);
  if (elmnt.classList.contains(c)) {
    elmnt.classList.remove(c);
  }
  else {
    elmnt.classList.add(c);
  }
}

document.querySelector("#username").addEventListener("keydown", event => {
  if(event.key !== "Enter") return;
  event.target.parentElement.style["outline-offset"] = "0px";
  event.preventDefault();
});

document.querySelector("#username").addEventListener("keyup", event => {
  if(event.key !== "Enter") return;
  event.target.parentElement.style["outline-offset"] = null;
  event.preventDefault();
});