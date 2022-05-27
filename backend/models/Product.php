<?php
class Product
{
  // DB Stuff
  private $conn;
  private $table = 'product';

  // Properties
  public $product_id;
  public $name;
  public $url;
  public $product_code;
  public $brand;
  public $cpu;
  public $ram;
  public $gpu;
  public $os;
  public $old_price;
  public $price;
  public $screen;
  public $size;
  public $battery;
  public $amount;
  public $description;
  public $rating;
  public $num_reviewer;
  public $img_cover;

  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function read()
  {
    // Create query
    $query = 'SELECT * FROM ' . $this->table;
    // Prepare statement
    $stmt = $this->conn->prepare($query);
    // Execute query
    $stmt->execute();

    return $stmt;
  }

  // Get Single Category
  public function read_single()
  {
    // Create query
    $query = 'SELECT
          id,
          name
        FROM
          ' . $this->table . '
      WHERE id = ?
      LIMIT 0,1';

    //Prepare statement
    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->id);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // set properties
    $this->id = $row['id'];
    $this->name = $row['name'];
  }

  public function create() {}
  public function update() {}
  public function delete() {}
}
