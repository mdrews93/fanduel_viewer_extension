var convert_salary = salary => {
  return parseFloat(salary.replace("$", "").replace(",", ""));
};
var convert_score = score => {
  return parseFloat(score);
};

var add_value = mouse_event => {
  var elts = mouse_event.path[8].querySelectorAll(
    "[data-test-id=data-chunk-value]"
  );
  var scoreElt;
  var salaryElt;
  for (var i = 0; i < elts.length; i++) {
    if (!elts[i].innerText.includes("@") && !elts[i].innerText.includes("$")) {
      scoreElt = elts[i];
    } else if (elts[i].innerText.includes("$")) {
      salaryElt = elts[i];
    }
  }
  if (!scoreElt.innerText.includes("x")) {
    var score = convert_salary(scoreElt.innerText);
    var salary = convert_salary(salaryElt.innerText);
    var value = (score / (salary / 1000)).toPrecision(3);
    scoreElt.innerText = `${scoreElt.innerText} (${value}x)`;
  }
};

var set_listeners = () => {
  var lineups = document.getElementsByClassName("lineup");
  for (var i = 0; i < lineups.length; i++) {
    var players = lineups[i].getElementsByClassName("lineup__slot--has-player");
    for (var j = 0; j < players.length; j++) {
      var svgs = players[j].getElementsByTagName("svg");
      for (var k = 0; k < svgs.length; k++) {
        svgs[k].addEventListener("click", function(mouse_event) {
          console.log("calculating value");
          setTimeout(() => add_value(mouse_event), 1500);
        });
      }
    }
  }
  console.log("listeners set");
};

var main = () => {
  setTimeout(set_listeners, 4000);
};

main();
