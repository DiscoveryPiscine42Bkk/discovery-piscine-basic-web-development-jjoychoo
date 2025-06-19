$(document).ready(function () {
  const colors = ["red", "green", "blue"];
  let size = 200;
  let colorIndex = 0;

  function updateBalloon() {
    $("#balloon")
      .css({
        width: size + "px",
        height: size + "px",
        backgroundColor: colors[colorIndex]
      });
  }

  $("#balloon").on("click", function () {
    size += 10;
    colorIndex = (colorIndex + 1) % colors.length;

    if (size > 420) {
      size = 200;
      colorIndex = 0;
    }

    updateBalloon();
  });

  $("#balloon").on("mouseleave", function () {
    if (size > 200) {
      size -= 5;
      colorIndex = (colorIndex - 1 + colors.length) % colors.length;
      updateBalloon();
    }
  });
});
