<?php
  require('../database.php');
  
  $id = $_POST['id'];
  $nameP = str_replace("'", "''", $_POST['nameP']);
  $country = str_replace("'", "''", $_POST['country']);
  $email = str_replace("'", "''", $_POST['email']);
  $phone = str_replace("'", "''", $_POST['phone']);
  $typeP = $_POST['typeP'];
  $actor = ($_POST['actor'] === "No") ? NULL : $_POST['actor'];
  $available = ($actor === NULL) ? 1 : 0;
  $creation = date("Y-m-d", time());

  // Modifier pour changer le temps d'allocation d'un prospect à un manager
  $deadline = ($available === 1) ? NULL : date("Y-m-d", mktime(0, 0, 0, date("m"), date("d")+14, date("Y")));
  
  $pdo = getConnexion();
  $rq = "UPDATE prospect SET typeP=?, nameP=?, email=?, phone=?, country=?, actor=?, available=?, creation=?, deadline=? WHERE id=?";
  $stmt= $pdo->prepare($rq);
  $stmt->execute([$typeP, $nameP, $email, $phone, $country, $actor, $available, $creation, $deadline, $id]);
  //print_r($stmt->errorInfo());

  exit();
?>
