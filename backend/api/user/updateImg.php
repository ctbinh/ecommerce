<?php 
  // Headers 
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  
  include_once '../../config/Database.php';
  include_once '../../models/User.php';

  // Instantiate DB & connect
  $database = new Database();
  $db = $database->connect();

  // Instantiate category object
  $user = new User($db);

  // Category read query
  $user->update_Img($_POST['user_id'], $_POST['img']);
  echo "Update Done (user_id = " .  $_POST['user_id'] . " with new image with = " . $_POST['img'] . ")";