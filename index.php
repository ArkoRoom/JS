<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mini jeux JavaScript</title>
    <link rel="stylesheet" href="vendor/components/bootstrap/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
    <link rel="stylesheet" href="css/style.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <div class="container">
      <div class="text-rules">
        <h2>Mini-Jeux du C'est plus ou c'est moins !</h2>
        <p>
          Bienvenue dans ce Mini-Jeu ! <br>
          La règle est simple. L'ordinateur a sélectionner un chiffre aléatoirement entre 1 et 100. <br>
          Vous disposez de 6 éssais maximum pour trouver ce chiffre. <br>
          Bonne chance !
        </p>
      </div>
      <div class="answer-user">
        <form>
          <div class="form-group">
            <label for="answerUser">Votre réponse</label>
            <input type="number" name="answerUser" id="answerUser" value="">
          </div>
          <input type="button" name="validAnswer" id="validAnswer" value="Valider">
        </form>
      </div>
      <div class="answer">

      </div>
      <input type="button" name="restart" id="restart" value="Rejouez">
    </div>

    <script src="vendor/components/jquery/jquery.min.js" charset="utf-8"></script>
    <script src="vendor/components/bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>
