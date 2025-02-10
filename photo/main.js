$(document).ready(function () {
  var panelCount = $(".panel").length;
  var angleStep = 360 / panelCount;
  var ang = 0;

  // Apply dynamic styles for each panel
  $(".panel").each(function (index) {
    var angle = index * angleStep;
    $(this).css("transform", "rotateY(" + angle + "deg) translateZ(400px)");
  });

  $("#prev").click(function () {
    ang = ang + angleStep;
    $("*").css("--ang", ang);
  });

  $("#next").click(function () {
    ang = ang - angleStep;
    $("*").css("--ang", ang);
  });

  // Add click event to panels for fullscreen effect
  $(".panel").click(function () {
    var backgroundImage = $(this).css("background-image");
    $(".fullscreen-container")
      .css("background-image", backgroundImage)
      .toggleClass("active");
  });

  // Add click event to fullscreen container to close it
  $(".fullscreen-container").click(function () {
    $(this).removeClass("active");
  });
});
