<?php 
  if(!isset($_SESSION)) session_start();
  require_once('src/layout/header.php'); 
?>
<?php if(isset($_SESSION['loggedIn'])) { ?>
<div class="container-fluid">
  <nav class="mb-3">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <a class="nav-link" href="lists.php">Lijsten</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="scores.php">Scores</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="logout.php" >Logout</a>
      </li>
    </ul>
  </nav>

  <div class="row">
    <div class="col"></div>
    <div class="col-8">
    <h3 id="listoverviewTitle"></h3>
    <button type="button" class="btn btn-success mr-3 mb-3" id="startTestBtn">Start test</button>
    <button type="button" class="btn btn-danger mb-3" id="deleteTestBtn">Verwijder lijst</button>
      <ul class="list-group changeWordsList">

      </ul>
    </div>
    <div class="col"></div>
  </div>
</div>
<?php } ?>

<?php require_once('src/layout/footer.php') ?>