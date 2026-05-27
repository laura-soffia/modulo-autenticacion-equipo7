function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;

    if(user == "user@correo.com" && pass == " "){
        window.location = "pagina.html";
    } 
}// archivo de inicio de sesion sin base de datos //

const input = document.getElementById("tarea");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li-container");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li-container");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}