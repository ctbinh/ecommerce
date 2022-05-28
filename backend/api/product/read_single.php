<?php
// Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

include_once '../../config/Database.php';
include_once '../../models/Product.php';

// Instantiate DB & connect
$database = new Database();
$db = $database->connect();

// Instantiate blog post object
$post = new Product($db);

// Get ID
$post->product_id = isset($_GET['product_id']) ? $_GET['product_id'] : die();

// Get post
$post->read_single();

// Create array
$post_arr = array(
    'product_id' => $post->product_id,
    'name' => $post->name,
    'url' => $post->url,
    'product_code' => $post->product_code,
    'brand' => $post->brand,
    'cpu' => $post->cpu,
    'ram' => $post->ram,
    'gpu' => $post->gpu,
    'os' => $post->os,
    'old_price' => $post->old_price,
    'price' => $post->price,
    'screen' => $post->screen,
    'size' => $post->size,
    'battery' => $post->battery,
    'amount' => $post->amount,
    'description' => $post->description,
    'rating' => $post->rating,
    'num_reviewer' => $post->num_reviewer,
    'img_cover' => $post->img_cover,
);

// Make JSON
print_r(json_encode($post_arr));
