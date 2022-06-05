<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/User.php';
// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$user = new User($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

$user->username = $data->username;
$user->password = $data->password;

if($user->login()) {
  if(password_verify($data->password, $user->password)) {
    echo json_encode(
      array('message' => 'Login successful',
      'status' => 'Success',
      'user_id' => $user->user_id)
    );
    return;
  }
}
echo json_encode(
  array('message' => 'Login failed.', 
  'status' => 'Fail')
);

