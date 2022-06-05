<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Orders.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$orders = new Orders($db);

// Get ID
$user_id = isset($_GET['user_id']) ? $_GET['user_id'] : die();

// Get product
$result = $orders->read_single_user($user_id);

$num = $result->rowCount();
// Create array
if ($num > 0) {
    // Cat array
    $ord_arr = array();
    $ord_arr['data'] = array();

    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        extract($row);

        $ord_item = array(
            'product_id' => $product_id,
            'amount' => $amount,
            'price' => $price,
            'name' => $name,
            'amount' => $amount,
            'img_cover' => $img_cover,
            'cpu' => $cpu,
            'description' => $description
        );

        // Push to "data"
        if(!isset($ord_arr['data'][$order_id])) {
            $ord_arr['data'][$order_id] = array(
                'state' => $state,
                'item' => array($ord_item),
                'date' => $date,
                'total_ship' => $total_ship,
            );
        }
        else {
            array_push($ord_arr['data'][$order_id]['item'], $ord_item);
        }
    }

    // Turn to JSON & output
    echo json_encode($ord_arr);

} else {
    // No Categories
    echo json_encode(
        array('message' => 'No Categories Found')
    );
}
