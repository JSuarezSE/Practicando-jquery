function notify() {
  alert("ola");
}
function selected() {}
function SetApp(documento) {
  var iframe = "0";
  var urlFinal = documento.split("|");

  if (urlFinal.length > 1) {
    iframe = urlFinal[1];
  }

  if (iframe == "1") {
    var datosIframe =
      "<iframe frameborder='0' style='width: 100%; height:98%;' scrolling='yes' src='" +
      urlFinal[0] +
      "' allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>";
    console.log(datosIframe);
    $("#divPrincipal").hide();
    $("#divPrincipal").css("display", "none");
    $("#divPrincipal").html(datosIframe).fadeIn("fast");
  } else {
    $.ajax({
      type: "GET",
      url: urlFinal[0],
      success: function (dataRecieved) {
        //$('#kt_sidebar').hide();
        //$('#kt_sidebar').css('display', 'none');
        $("#divPrincipal").empty();
        $("#divPrincipal").html(dataRecieved).fadeIn("fast");
      },
      error: function () {},
    });
  }
}

$(document).ready(function () {
  SetApp("dashboard.html");
  $(".btn").on("click", notify);
  $(".nav-link").on("click", function () {
    $(".nav-link").removeClass("active").css("color", "");
    $(this).addClass("active");
  });
});
