var convert_salary = salary => {
  return parseFloat(salary.replace("$", "").replace(",", ""));
};
var convert_score = score => {
  return parseFloat(score);
};

function add_value(arguments) {
  var scoreElt = arguments[0].path[8].querySelectorAll(
    "[data-test-id=data-chunk-value]"
  )[0];
  if (!scoreElt.innerText.includes("x")) {
    var score = convert_salary(scoreElt.innerText);
    var salary = convert_salary(
      arguments[0].path[8].querySelectorAll(
        "[data-test-id=data-chunk-value]"
      )[2].innerText
    );
    var value = (score / (salary / 1000)).toPrecision(3);
    scoreElt.innerText = `${scoreElt.innerText} (${value}x)`;
  }
}

var set_listeners = () => {
  var lineups = document.getElementsByClassName("lineup");

  for (var lineup in lineups) {
    if (
      typeof lineups[lineup] === "object" &&
      typeof lineups[lineup] !== null
    ) {
      var players = lineups[lineup].getElementsByClassName(
        "lineup__slot--has-player"
      );
      for (const player in players) {
        if (
          typeof players[player] === "object" &&
          typeof players[player] !== null
        ) {
          var svgs = players[player].getElementsByTagName("svg");
          for (const svg in svgs) {
            if (typeof svgs[svg] === "object" && typeof svgs[svg] !== null) {
              svgs[svg].addEventListener("click", function() {
                console.log("calculating value");
                setTimeout(() => add_value(arguments), 2000);
              });
            }
          }
        }
      }
    }
  }
  console.log("listeners set");
};

setTimeout(set_listeners, 5000);
