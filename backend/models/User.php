<?php
class User
{
  // DB Stuff
  private $conn;
  private $table = 'user';

  // Properties
  public $user_id;
  public $username;
  public $password;
  public $fName;
  public $lName;
  public $email;
  public $phone;
  public $birthday;
  public $url_avt;

  // Constructor with DB
  public function __construct($db)
  {
    $this->conn = $db;
  }

  public function read()
  {
    // Create query
    $query = 'SELECT id, name, created_at FROM' . $this->table . ' ORDER BY created_at DESC';
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
  public function update_Img($user_id, $img) {
    $query = 'UPDATE user SET url_avt = ' . $img . ' WHERE user_id = ' . $user_id;
    // Prepare statement
    $stmt = $this->conn->prepare($query);
    // Execute query
    $stmt->execute();
  }
}
