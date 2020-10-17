<?php
  if(!isset($_SESSION)) session_start();

  if(isset($_POST['setScore'])) {
    $score = $_POST['score'];
    $listID = $_POST['listID'];
    $userID = User::getID($_SESSION['username']);
    $date = $_POST['date'];
    $total = $_POST['total'];
    $correct = $_POST['correct'];

    try {

      Score::set($score, $listID, $userID, $date, $total, $correct);
      
      echo json_encode([
        'return' => 'successs'
      ]);
    }
    catch (PDOxception $e) {
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
      print "Error!: " . $e->getMessage() . "<br/>";
    }
  }

  if(isset($_POST['getScores'])) {
    $userID = User::getID($_SESSION['username']);

    try {

      $scores = Score::get($userID[0]);
      
      echo json_encode([
        'return' => 'successs',
        'data' => $scores
      ]);
    }
    catch (PDOxception $e) {
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
      print "Error!: " . $e->getMessage() . "<br/>";
    }
  }