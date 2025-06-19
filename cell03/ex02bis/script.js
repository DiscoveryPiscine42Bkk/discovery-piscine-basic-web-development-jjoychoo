$(document).ready(function () {
  function isValid(value) {
    return /^\d+$/.test(value);
  }

  $("#calculate").click(function () {
    const left = $("#left").val().trim();
    const right = $("#right").val().trim();
    const op = $("#operator").val();

    if (!isValid(left) || !isValid(right)) {
      alert("Error :(");
      return;
    }

    const num1 = parseInt(left);
    const num2 = parseInt(right);

    if ((op === "/" || op === "%") && num2 === 0) {
      alert("It's over 9000!");
      console.log("It's over 9000!");
      return;
    }

    let result;
    switch (op) {
      case "+": result = num1 + num2; break;
      case "-": result = num1 - num2; break;
      case "*": result = num1 * num2; break;
      case "/": result = num1 / num2; break;
      case "%": result = num1 % num2; break;
    }

    alert("Result: " + result);
    console.log("Result:", result);
  });

  setInterval(() => {
    alert("Please, use me...");
  }, 30000);
});
