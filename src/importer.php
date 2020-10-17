<?php
if(!isset($_SESSION)) session_start();

// CLASSES
require_once('classes/db.php'); // connection to database
require_once('classes/password.php'); // password hash/verify
require_once('classes/check.php'); // checks if a value already exists in a table
require_once('classes/user.php'); // all classes related to users
require_once('classes/list.php'); // all classes related to lists
require_once('classes/listItem.php'); // all classes related to list items
require_once('classes/score.php'); // all classes related to list items

// POST
require_once('post/register.php'); // requests for register
require_once('post/login.php'); // requests for register
require_once('post/list.php'); // requests for lists
require_once('post/words.php'); // requests for words
require_once('post/score.php'); // requests for words