<?php

if(isset($_POST['getAllWords'])) {
  $id = $_POST['listID'];

  try {
    $words = listItem::get($id);

    echo json_encode([
      'data' => $words
    ]);
  }
  catch (PDOxception $e) {
    echo json_encode([
      'error' => $e->getMessage(),
    ]);
    print "Error!: " . $e->getMessage() . "<br/>";

    return false;
  }
}

if(isset($_POST['updateWord'])) {
  $word = htmlspecialchars($_POST['word']);
  $translation = htmlspecialchars($_POST['translation']);
  $id = htmlspecialchars($_POST['word_id']);

  try {
    listItem::update($word, $translation, $id);

    echo json_encode([
      'type' => 'success',
      'msg' => 'woord is geupdate'
    ]);
  }
  catch (PDOxception $e) {
    echo json_encode([
      'error' => $e->getMessage(),
    ]);
    print "Error!: " . $e->getMessage() . "<br/>";
    return false;
  }
}

if(isset($_POST['deleteWord'])) {
  $id = htmlspecialchars($_POST['word_id']);

  try {
    listItem::delete($id);

    echo json_encode([
      'type' => 'success',
      'msg' => 'woord is verwijdert'
    ]);
  }
  catch (PDOxception $e) {
    echo json_encode([
      'error' => $e->getMessage(),
    ]);
    print "Error!: " . $e->getMessage() . "<br/>";
    return false;
  }
}