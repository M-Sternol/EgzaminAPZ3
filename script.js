const title = document.getElementById("Title");
const btntitle = document.getElementById("SetTitle")
const btntitle2 = document.getElementById("SetTitle2")
const EndTexT = document.getElementById("endtext")
title.textContent = "Kosmonałcik";
title.classList.add("title");
const changeTitle = () => {title.textContent = "Oczkiem w przestrzeni"};
const removeTitle = () => {title.textContent = "Kosmonałcik"};
btntitle.addEventListener("click", changeTitle);
btntitle2.addEventListener("click", removeTitle);
EndTexT.textContent = "Zadanie Praktyczne zaprojektował: Mariusz Sternol z Grupy APZ3"