<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Cart.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate category object
$product = new Cart($db);

// Get ID
$product->user_id = isset($_GET['user_id']) ? $_GET['user_id'] : die();
$result = $product->getCountCart();
// print_r($result);
if (1 > 0) {
    // Cat array
    $pd_arr = array();
    $pd_arr['data'] = array();
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $pd_item = array(
            'count' => $count,

        );

        // Push to "data"
        array_push($pd_arr['data'], $pd_item);
    }

    // Turn to JSON & output
    echo json_encode($pd_arr['data'][0]);

}