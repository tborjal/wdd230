const list = document.getElementById("list");
const input = document.getElementById("favchap");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  if (input.value.length === 0) {
    alert("(Error Found! ❌) Please enter a book and chapter");
  } else {
    const listChapter = document.createElement("li");
    const listText = document.createElement("div");
    const listBtn = document.createElement("button");

    listText.textContent = input.value;
    listBtn.textContent = "❌";

    listChapter.append(listText, listBtn);

    listBtn.addEventListener("click", () => {
      list.removeChild(listChapter);
    });

    list.append(listChapter);

    input.value = "";
    input.focus();
  }
});

button.setAttribute("aria-label", "Delete button");