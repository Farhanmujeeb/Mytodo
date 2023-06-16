window.addEventListener("load", () => {
  const forum = document.querySelector("#task-form");
  const inputField = document.querySelector("#task-input");
  const list = document.querySelector("#parent");

  forum.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = inputField.value;
    if (!task) {
      alert("please add");
      return;
    }

    const subField = document.createElement("div");
    subField.classList.add("subject");
    const contField = document.createElement("div");
    contField.classList.add("content");
    subField.appendChild(contField);

    const contInput = document.createElement("input");
    contInput.classList.add("text");
    contInput.type = "text";
    contInput.value = task;
    contInput.setAttribute("readonly", "readonly");
    contField.appendChild(contInput);

    const action = document.createElement("div");
    action.classList.add("action");

    const edit = document.createElement("button");
    edit.classList.add("edit");
    edit.innerHTML = "edit";

    const deleta = document.createElement("button");
    deleta.classList.add("delete");
    deleta.innerHTML = "delete";
    action.appendChild(edit);
    action.appendChild(deleta);
    subField.appendChild(action);
    inputField.value = "";
    list.appendChild(subField);

    edit.addEventListener("click", (e) => {
      if (edit.innerText.toLowerCase() == "edit") {
        edit.innerText = "save";
        contInput.removeAttribute("readonly");
        contInput.focus();
      } else {
        edit.innerHTML = "edit";
        contInput.setAttribute("readonly", "readonly");
      }
    });
    deleta.addEventListener("click", (e) => {
      list.removeChild(subField);
    });
    
  });
});
