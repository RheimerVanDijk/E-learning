<?php

if(isset($_POST['register'])) {
  $username = htmlspecialchars($_POST['username']);
  $password = password::hash($_POST['password']);
  $date = htmlspecialchars($_POST['date']);
  $checkValue = check::username($username);
  // print $check;
  if ($checkValue == 0) {
    try {
      $connection = DB::connect();
  
      $stm = $connection->prepare('INSERT INTO users (username, password, created_at) VALUES (:username, :password, :created_at)');
  
      $stm->execute([
        'username' => $username,
        'password' => $password,
        'created_at' => $date,
      ]);
  
      $connection = null;
  
      echo json_encode([
      'type' => 'success',
      'msg' => 'Je account is succesvol aangemaakt'
      ]);
    }
    catch (PDOxception $e) {
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
      print "Error!: " . $e->getMessage() . "<br/>";
    }
  } else {
    echo json_encode([
      'error' => 'gebruiker bestaat al',
      ]);
  }

  die;
}