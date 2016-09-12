$("#restart").hide();

/*********** CODE RESTART ***********/

$("#restart").click(function () {
  location.reload(true);
});

/*********** CODE MINI JEUX ***********/

var solution = Math.floor(Math.random() * 100) + 1;
var count = 0;
var finalCount = 6;

var answerUser = $("#validAnswer").click(function () {
  var answer = parseInt($("#answerUser").val());
  while ((answerUser !== solution) && (count < finalCount)) {
    count++;
    if ((answer < 1) || (answer > 100)) {
      $(".answer").append("<p>Erreur ! Vous avez saisis <strong>" + answer + "</strong><br>Veuillez saisir un nombre <strong>compris entre 1 et 100.</strong><br>C'était l'essai n°" + count + " sur " + finalCount + ".</p>")
      break;
    }
    else if (answer < solution) {
      $(".answer").append("<p>Et non ! C'est plus que <strong>" + answer + ".</strong><br>C'était l'essai n°" + count + " sur " + finalCount + ".</p>")
      break;
    }
    else if (answer > solution) {
      $(".answer").append("<p>Et non ! C'est moins que <strong>" + answer + ".</strong><br>C'était l'essai n°" + count + " sur " + finalCount + ".</p>")
      break;
    }
    else if (answer === solution) {
      $(".answer").append("<p>Bravo ! Le nombre a trouvé était bien <strong>" + solution + ".</strong><br>Vous avez trouvé en " + count + " éssai(s) sur " + finalCount + ".<br>Vous pouvez rejouer en cliquant sur le bouton <strong>'Rejouez'.</strong></p>")
      $("#restart").show();
      break;
    }
  }
  if (count === finalCount) {
    $(".answer").append("<p>Dommage ! Vous avez utilisé vos " + finalCount + " éssais.<br>Le chiffre à trouver été <strong>" + solution + ".</strong><br>Retentez votre chance !</p>")
    $("#restart").show();
  }
});
