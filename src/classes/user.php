<?php
  if(!isset($_SESSION)) session_start();

  class User {
    public function get($username) {
      try {
        $connection = DB::connect();
    
        $stm = $connection->prepare('SELECT username,password from users WHERE username = ?');
    
        $stm->execute([$username]);
        $result = $stm->fetch();
        $object = (object) $result;

        $connection = null;
        return $object;
        
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";
      }
      die;
    }

    public function getID($username) {
      try {
        $connection = DB::connect();
    
        $stm = $connection->prepare('SELECT id from users WHERE username = ?');
    
        $stm->execute([$username]);
        $result = $stm->fetch();

        $connection = null;
        return $result;
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";
      }
      die;
    }
  }