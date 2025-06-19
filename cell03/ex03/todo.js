function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [k, v] = cookie.split('=');
    if (k === name) return decodeURIComponent(v);
  }
  return "";
}

function saveTodos() {
  const list = document.getElementById("ft_list").children;
  const todos = [];
  for (const item of list) {
    todos.push(item.textContent);
  }
  setCookie("todo_list", JSON.stringify(todos), 30);
}

function loadTodos() {
  const data = getCookie("todo_list");
  if (data) {
    const todos = JSON.parse(data);
    for (const text of todos.reverse()) {
      createTodo(text);
    }
  }
}

function createTodo(text) {
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;

  div.addEventListener("click", () => {
    if (confirm("Do you want to delete this TO DO?")) {
      div.remove();
      saveTodos();
    }
  });

  document.getElementById("ft_list").appendChild(div);
  saveTodos();
}

function addTodo() {
  const text = prompt("Enter your new TO DO:");
  if (text && text.trim() !== "") {
    createTodo(text.trim());
  }
}

window.onload = loadTodos;
