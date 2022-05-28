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
    $query = 'SELECT * FROM ' . $this->table . ' WHERE product_id = ? LIMIT 0,1';

    //Prepare statement
    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->product_id);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // set properties
    $this->product_id = $row['product_id'];
    $this->name = $row['name'];
    $this->url = $row['url'];
    $this->product_code = $row['product_code'];
    $this->brand = $row['brand'];
    $this->cpu = $row['cpu'];
    $this->ram = $row['ram'];
    $this->gpu = $row['gpu'];
    $this->os = $row['os'];
    $this->old_price = $row['old_price'];
    $this->price = $row['price'];
    $this->screen = $row['screen'];
    $this->size = $row['size'];
    $this->battery = $row['battery'];
    $this->amount = $row['amount'];
    $this->description = $row['description'];
    $this->rating = $row['rating'];
    $this->num_reviewer = $row['num_reviewer'];
    $this->img_cover = $row['img_cover'];
  }

  public function create()
  {
  }
  public function update()
  {
  }
  public function delete()
  {
  }
}
