<?php
class Cart
{
  // DB Stuff
  private $conn;
  private $table = 'cart';

  // Properties
  public $user_id;
  public $product_id;
  public $amount;


  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  // Find user from produc-id
  public function find_product($id) {
    $query = "
            SELECT 
            cart.product_id, name, product.img_cover, price, cart.amount, cpu, screen
            FROM
                cart, product
            WHERE cart.user_id = 1 AND cart.product_id = product.product_id
          ";
    // Prepare statement
    $stmt = $this->conn->prepare($query);
    // Execute query
    $stmt->execute();
    return $stmt;
  }
  public function updateItem($user_id, $product_id, $amount) {
    $query = 'UPDATE cart 
              SET amount =' . $amount . '
              WHERE product_id = ' . $product_id . ' AND user_id = ' . $user_id;
    // Prepare statement
    $stmt = $this->conn->prepare($query);
    // Execute query
    $stmt->execute();
  }
  public function deleteItem($user_id, $product_id) {
    $query = 'DELETE FROM cart 
              WHERE product_id = ' . $product_id . ' AND user_id = ' . $user_id;
    // Prepare statement
    $stmt = $this->conn->prepare($query);
    // Execute query
    $stmt->execute();
  }
  public function deleteAll($user_id) {
    $query = 'DELETE FROM cart 
              WHERE user_id = ' . $user_id;
    // Prepare statement
    $stmt = $this->conn->prepare($query);
    // Execute query
    $stmt->execute();
  }
}
