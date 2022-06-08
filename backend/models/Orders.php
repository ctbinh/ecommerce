<?php
class Orders
{
  // DB Stuff
  private $conn;
  private $table = 'orders';

  // Properties
  public $order_id;
  public $user_id;
  public $state;
  public $total_ship;
  public $date;


  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  // Find user from produc-id
  public function create()
  {
      // Create query
      $query = 'INSERT INTO ' . $this->table . 
            ' SET user_id = :user_id, state = :state, total_ship = :total_ship, date = :date';

      // Prepare statement
      $stmt = $this->conn->prepare($query);

      // Clean data
      $this->user_id = htmlspecialchars(strip_tags($this->user_id));
      $this->state = htmlspecialchars(strip_tags($this->state));
      $this->total_ship = htmlspecialchars(strip_tags($this->total_ship));
      $this->date = htmlspecialchars(strip_tags($this->date));
      
      // $this->product_id = htmlspecialchars(strip_tags($this->product_id));

      // Bind data
      $stmt->bindParam(':user_id', $this->user_id);
      $stmt->bindParam(':state', $this->state);
      $stmt->bindParam(':total_ship', $this->total_ship);
      $stmt->bindParam(':date', $this->date);
      
      // $stmt->bindParam(':product_id', $this->product_id);
      // Execute query
      if ($stmt->execute()) {
          return true;
      }

      // Print error if something goes wrong
      printf("Error: %s.\n", $stmt->error);

      return false;
  }
}
