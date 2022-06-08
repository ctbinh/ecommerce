<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

include_once '../../config/Database.php';
include_once '../../models/Orders.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$orders = new Orders($db);

// Get raw posted data
$data = json_decode(file_get_contents("php://input"));

// Set ID to update
$orders->state = $data->state;
$orders->order_id = $data->order_id;
$orders->date = $data->date;

// Update post
if ($orders->update()) {
    echo json_encode(
        array('message' => 'Orders Updated',
        'status' => 'Success'
        )
    );
} else {
    echo json_encode(
        array('message' => 'Orders Not Updated',
        'status' => 'Fail')
    );
}