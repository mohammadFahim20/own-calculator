function numberMath(e) {
  var currentValue = $("#result").val();

  $("#result").val(currentValue + e);
}

function clearMath() {
  $("#result").val("");
}

function result() {
  var result = eval($("#result").val());
  $("#result").val(result);
}

function deleteMath() {
  var numbers = $("#result").val();
  if (numbers != "") {
    $("#result").val(numbers.slice(0, -1));
  }
}
