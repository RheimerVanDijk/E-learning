<?php ?>
<form class="login-form">
  <h1>Login:</h1>
  <div class="form-group">
    <label for="loginUsername">Email address</label>
    <input type="email" class="form-control" id="loginUsername" aria-describedby="emailHelp" placeholder="Enter email">
  </div>
  <div class="form-group">
    <label for="loginPassword">Password</label>
    <input type="password" class="form-control" id="loginPassword" placeholder="Password">
  </div>
  <button id="loginBtn" type="button" class="btn btn-success">Login</button>
  <button id="switchToReg" type="button" class="btn btn-link">Register</button>
</form>