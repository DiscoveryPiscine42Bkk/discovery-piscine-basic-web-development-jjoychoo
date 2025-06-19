$(document).ready(function () {
  function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days*24*60*60*1000).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
  }

  function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (const cookie of cookies) {
      const [k, v] = cookie.split("=");
      if (k === name) return decodeURIComponent(v);
    }
    return "";
  }

  function saveTodos() {
    const todos = [];
    $("#ft_list .todo").each(function () {
      todos.push($(this).text());
    });
    setCookie("todo_list", JSON.stringify(todos), 30);
  }

  function loadTodos() {
    const data = getCookie("todo_list");
    if (data) {
      const todos = JSON.parse(data);
      for (let i = todos.length - 1; i >= 0; i--) {
        createTodo(todos[i]);
      }
    }
  }

  function createTodo(text) {
    const $todo = $("<div></div>").addClass("todo").text(text);
    $todo.on("click", function () {
      if (confirm("Do you want to delete this TO DO?")) {
        $(this).remove();
        saveTodos();
      }
    });
    $("#ft_list").append($todo);
    saveTodos();
  }

  $("#new").on("click", function () {
    const text = prompt("Enter your new TO DO:");
    if (text && text.trim() !== "") {
      createTodo(text.trim());
    }
  });

  loadTodos();
});
