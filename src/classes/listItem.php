<?php

class listItem {
  public function add($wordObject, $date, $listName) {
    try {
      $listID = wordList::getID($listName);
      $connection = DB::connect();
      foreach (json_decode($wordObject) as $word) {
 
        $stm = $connection->prepare('INSERT INTO list_items (word, translation, created_at, updated_at, list_id) VALUES (:word, :translation, :created_at, :updated_at, :list_id)');
    
        $stm->execute([
          'word' => $word->word,
          'translation' => $word->translation,
          'created_at' => $date,
          'updated_at' => $date,
          'list_id' => $listID[0]
        ]);
      }

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

  public function get($listID) {
    try {
      $connection = DB::connect();

      $stm = $connection->prepare('SELECT * from list_items WHERE list_id = ?');
    
      $stm->execute([$listID]);
      $result = $stm->fetchAll();

      return $result;
    }
    catch (PDOxception $e) {
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
      print "Error!: " . $e->getMessage() . "<br/>";
      return false;
    }
  }

  public function update($word, $translation, $id) {
    try {
      $connection = DB::connect();

      $stm = $connection->prepare('UPDATE list_items SET word=?, translation=? WHERE id=?');
    
      $stm->execute([$word, $translation, $id]);

    }
    catch (PDOxception $e) {
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
      print "Error!: " . $e->getMessage() . "<br/>";
      return false;
    }
  }

  public function delete($id) {
    try {
      $connection = DB::connect();

      $stm = $connection->prepare('DELETE FROM list_items WHERE id=?');
    
      $stm->execute([$id]);

    }
    catch (PDOxception $e) {
      echo json_encode([
        'error' => $e->getMessage(),
      ]);
      print "Error!: " . $e->getMessage() . "<br/>";
      return false;
    }
  }
}