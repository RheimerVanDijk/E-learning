<?php
  if(!isset($_SESSION)) session_start();

  class Score {
    public function set($score, $listID, $userID, $date, $total, $correct) {
      try {
        $connection = DB::connect();
        $stm = $connection->prepare('INSERT INTO scores (score, total, correct, date, created_at, updated_at, user_id, list_id) VALUES (:score, :total, :correct, :date, :created_at, :updated_at, :user_id, :list_id)');
    
        $stm->execute([
          'score' => $score,
          'total' => $total,
          'correct' => $correct,
          'date' => $date,
          'created_at' => $date,
          'updated_at' => $date,
          'user_id' => $userID[0],
          'list_id' => $listID
        ]);
  
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";

      }
    }

    public function get($id) {
      try {
        $connection = DB::connect();
    
        $stm = $connection->prepare('SELECT score, total, correct, user_id, list_id, date from scores WHERE user_id = ?');
    
        $stm->execute([$id]);
        $result = $stm->fetchAll();

        $connection = null;
        return $result;
  
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";

      }
    }
  }