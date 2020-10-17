<?php 
  if(!isset($_SESSION)) session_start();
  require_once('src/layout/header.php'); 
?>
<?php if(isset($_SESSION['loggedIn'])) { ?>
<div class="container-fluid listPage">
  <nav class="mb-3">
    <ul class="nav nav-tabs">

      <li class="nav-item">
        <a class="nav-link " href="lists.php">Lijsten</a>
      </li>
      <li class="nav-item">
        <a class="nav-link active" href="scores.php">Scores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="logout.php" >Logout</a>
      </li>
    </ul>
  </nav>

  <div class="container-fluid">
    <div class="row">
      <div class="col"></div>
      <div class="col-10 d-flex justify-content-between flex-wrap" id="scoresContainer">
      </div>
      <div class="col"></div>
    </div>
  </div>
</div>
<?php } ?>

<?php require_once('src/layout/footer.php') ?>