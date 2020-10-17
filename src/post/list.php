<?php

if(isset($_POST['createList'])) {
  $listName = htmlspecialchars($_POST['listName']);
  $wordList = $_POST['wordList'];
  $date = $_POST['date'];

  if (wordList::create($listName, $date) === true) {
    if (listItem::add($wordList, $date, $listName) === true) {
      echo json_encode([
        'type' => 'success',
        'msg' => 'Lijst aangemaakt'
        ]);
    }
  };
  
  die;
}

if(isset($_POST['getUserLists'])) {
  try {
    $Lists = wordList::getAll();
    echo json_encode([
      'data' => $Lists
      ]);
  }
  catch (PDOxception $e) {
    echo json_encode([
      'error' => $e->getMessage(),
    ]);
    print "Error!: " . $e->getMessage() . "<br/>";
  }
}

if(isset($_POST['getListName'])) {
  $id = $_POST['listID'];
  try {
    $title = wordList::getTitle($id);
    
    echo json_encode([
      'title' => $title[0]
    ]);
  }
  catch (PDOxception $e) {
    echo json_encode([
      'error' => $e->getMessage(),
    ]);
    print "Error!: " . $e->getMessage() . "<br/>";
  }
}

if(isset($_POST['deleteList'])) {
  $id = $_POST['listID'];
  try {
    wordList::delete($id);
    
    echo json_encode([
      'msg' => 'gelukt'
    ]);
  }
  catch (PDOxception $e) {
    echo json_encode([
      'error' => $e->getMessage(),
    ]);
    print "Error!: " . $e->getMessage() . "<br/>";
  }
}