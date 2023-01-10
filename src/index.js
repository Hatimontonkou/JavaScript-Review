import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};
//
//
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};
//
//
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  //完了機能
  const completebutton = document.createElement("button");
  completebutton.innerText = "完了";
  completebutton.addEventListener("click", () => {
    deleteFromIncompleteList(completebutton.parentNode);
    const addTarget = completebutton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;

    const backbutton = document.createElement("button");
    backbutton.innerText = "戻る";
    backbutton.addEventListener("click", () => {
      const deleteTarget = backbutton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      const text = backbutton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  //削除機能
  const deletebutton = document.createElement("button");
  deletebutton.innerText = "削除";
  deletebutton.addEventListener("click", () => {
    deleteFromIncompleteList(deletebutton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completebutton);
  div.appendChild(deletebutton);

  document.getElementById("incomplete-list").appendChild(div);
};
//
//
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
