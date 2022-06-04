<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Product_Image.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$post = new Product_Image($db);

// Get ID
$post->product_id = isset($_GET['product_id']) ? $_GET['product_id'] : die();

// Get post
$listImg = $post->read_single();

// Make JSON
print_r(json_encode($listImg));
