<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Mini-jeux JS</title>
    <link rel="stylesheet" href="vendor/components/bootstrap/css/bootstrap.min.css" media="screen" title="no title" charset="utf-8">
  </head>
  <body>
    <div class="container">
      <h3>Mini jeux en JavaScript</h3>
      <p>
        Bonjour et bienvenue dans ce mini-jeux du "c'est plus ou c'est moins" !
        <br>
        La règle est simple :
        <br>
        - vous disposez de 6 essais pour deviner le nombre choisis par la machine.
        <br>
        Veuillez remplir le champs ci dessous afin de soumettre votre réponse.
        <br>
        Un message vous retournera votre résultat.
        <br>
        Bonne chance !
      </p>
      <div class="col-md-6">
        <form>
          <div class="form-group">
            <label for="answer">Votre réponse</label>
            <input name="answer" type="number" class="form-control" id="answer" placeholder="Votre réponse...">
          </div>
          <button name="submitAnswer" type="button" class="btn btn-default" id="submitAnswer">Valider</button>
        </form>
      </div>
      <div class="col-md-6">
        <p class="textAnswer">

        </p>
      </div>
    </div>

    <script src="vendor/components/jquery/jquery.min.js" charset="utf-8"></script>
    <script src="vendor/components/bootstrap/js/bootstrap.min.js" charset="utf-8"></script>
    <script src="js/script.js" charset="utf-8"></script>
  </body>
</html>
