<?php
  if(!isset($_SESSION)) session_start();

  class check {
    public function username($username) {
      try {
        $connection = DB::connect();
    
        $stm = $connection->prepare('SELECT username from users WHERE username = ?');
    
        $stm->execute([$username]);
        $result = $stm->fetchAll();
    
        $connection = null;
    
        return count($result);
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";
      }
  
    }
  }