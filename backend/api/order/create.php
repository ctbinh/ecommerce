<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization,X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Orders.php';
// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$product = new Orders($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

// $product->name = $data->name;
$product->user_id = $data->user_id;
$product->state = $data->state;
$product->total_ship = $data->total_ship;
$product->date = $data->date;

$product->create();

echo "Create done";