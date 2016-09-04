$(function () {

  random = Math.floor((Math.random() * 100) + 1);
  //console.log(random);
  var answer = 0;
  compteur = 0;
  compteurFinal = 6;

  //On test si la valeur est bien récupérer
  /*$('#submitAnswer').click(function () {
    $('.textAnswer').append($('#answer').val() + "<br>");
  });*/

  // On commence le jeu
    if ($('#submitAnswer').submit(function () {
      {
      //while ((answer != random) && (compteur < compteurFinal)) {
        var answer = $('.textAnswer').append($('#answer').val());
        compteur++;
        if (answer < 1 || answer > 100) {
          $('textAnswer').append("<p>Erreur ! Vous avez saisi " + answer + ".<br>Vous devez saisir un nombre entre 1 et 100.<br>C'était l'essai(s) n°" + compteur + " sur " + compteurFinal + ".");
        }
        else if (answer < random) {
          $('textAnswer').append("<p>C'est plus que " + answer + ".<br>C'était l'essai(s) n°" + compteur + " sur " + compteurFinal + ".");
        }
        else if (answer > random) {
          $('textAnswer').append("<p>C'est moins que " + answer + ".<br>C'était l'essai(s) n°" + compteur + " sur " + compteurFinal + ".");
        }
        else if (answer == random) {
          $('textAnswer').append("<p>Bravo ! Le nombre à trouver était bien " + random + ".<br>Tu as réussis en " + compteur + " essai(s) sur " + compteurFinal + ".");
        }
        else {
          $('textAnswer').append("<p>Dommage ! Le nombre à trouver était " + random + ".<br>Retente ta chance.");
        }
    //}
  }}));
});
