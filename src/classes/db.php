<?php
  if(!isset($_SESSION)) session_start();

  class DB {
    public function connect() {
      $dns = 'mysql:host=localhost;dbname=student4a8_537556';
      $user = 'student4a8_537556';
      $pass = 'jefhPK';

      return new PDO($dns, $user, $pass);
    }
  }