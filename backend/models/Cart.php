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
                name, product.img_cover, price, cart.amount
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
}
