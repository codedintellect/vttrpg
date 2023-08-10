function toggle(query, c) {
  let elmnt = document.querySelector(query);
  if (elmnt.classList.contains(c)) {
    elmnt.classList.remove(c);
  }
  else {
    elmnt.classList.add(c);
  }
}

username_field = document.querySelector("#username");

username_field.addEventListener("keydown", event => {
  if(event.key !== "Enter") return;
  event.target.parentElement.style["outline-offset"] = "0px";
  event.preventDefault();
});

username_field.addEventListener("keyup", event => {
  if(event.key !== "Enter") return;
  event.target.parentElement.style["outline-offset"] = null;
  event.preventDefault();
});

username_field.addEventListener("input", async event => {
  let new_username = event.target.value;
  if (new_username == profile.username) {
    event.target.style["border-color"] = "var(--nord3)";
    return;
  }
  if (new_username.length < 4 || new_username.length > 16) {
    event.target.style["border-color"] = "var(--nord11)";
    return;
  }
  let available = await checkUsername(new_username);
  if (event.target.value == new_username) {
    if (available) {
      event.target.style["border-color"] = "var(--nord14)";
    }
    else {
      event.target.style["border-color"] = "var(--nord11)";
    }
  }
});