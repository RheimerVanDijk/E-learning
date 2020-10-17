<?php 
  if(!isset($_SESSION)) session_start();
  require_once('src/layout/header.php') 
?>
<div class="container-fluid">
  <div class="row vh-100 d-flex align-items-center">
    <div class="col-md-4">
    
    </div>
    <div class="col-md-4 align-middle">
      <?php require_once('src/layout/components/login.php') ?>
      <?php require_once('src/layout/components/register.php') ?>
    </div>
    <div class="col-md-4">

    </div>
  </div>
</div>


<?php require_once('src/layout/footer.php') ?>