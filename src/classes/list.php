<?php

  class wordList {
    
    public function create($list_name, $date) {
      try {
        $userID = User::getID($_SESSION['username']);
        $connection = DB::connect();
  
        $stm = $connection->prepare('INSERT INTO lists (name_list, created_at, updated_at, user_id) VALUES (:name_list, :created_at, :updated_at, :user_id)');
  
        $stm->execute([
          'name_list' => $list_name,
          'created_at' => $date,
          'updated_at' => $date,
          'user_id' => $userID[0]
        ]);

        return true;
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";

        return false;
      }

    }

    public function getID($listName) {
      try {
        $connection = DB::connect();
        $userID = User::getID($_SESSION['username']);
    
        $stm = $connection->prepare('SELECT id from lists WHERE name_list = ? AND user_id = ?');
    
        $stm->execute([$listName, $userID[0]]);
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

    public function getAll() {
      try {
        $connection = DB::connect();
        $userID = User::getID($_SESSION['username']);
    
        $stm = $connection->prepare('SELECT id, name_list from lists WHERE user_id = ?');
    
        $stm->execute([$userID[0]]);
        $result = $stm->fetchAll();

        $connection = null;
        return $result;
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";
        return false;
      }
      die;
    }

    public function getTitle($id) {
      try {
        $connection = DB::connect();
    
        $stm = $connection->prepare('SELECT name_list from lists WHERE id = ?');
    
        $stm->execute([$id]);
        $result = $stm->fetch();

        $connection = null;
        return $result;
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";
        return false;
      }
      die;
    }

    public function delete($id) {
      try {
        $connection = DB::connect();
    
        $stm = $connection->prepare('DELETE FROM lists WHERE id = ?');
    
        $stm->execute([$id]);

        $connection = null;
        return true;
      }
      catch (PDOxception $e) {
        echo json_encode([
          'error' => $e->getMessage(),
        ]);
        print "Error!: " . $e->getMessage() . "<br/>";
        return false;
      }
      die;
    }
  }
