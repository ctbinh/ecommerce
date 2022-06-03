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

  public function login() {
    $query = 'SELECT * FROM ' . $this->table . ' WHERE username = ? LIMIT 1';
    
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(1, $this->username);
    
    if($stmt->execute()){
      $row = $stmt->fetch(PDO::FETCH_ASSOC);
      if($row) {
        $this->username = $row['username'];
        $this->password = $row['password'];
        $this->user_id = $row['user_id'];
        return true;
      }
    }
    // printf("Error: %s.\n", $stmt->error);
    return false;
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
    $query = 'SELECT * FROM ' . $this->table . ' WHERE user_id = ? LIMIT 1';
    
    $stmt = $this->conn->prepare($query);

    $stmt->bindParam(1, $this->user_id);
    $stmt->execute();
    return $stmt;
  }

  public function create() {
    $query = "INSERT into user (username,password, fName, lName) VALUES (?,?,?,?)";
    // Prepare statement
    $stmt = $this->conn->prepare($query);

    // Bind ID
    $stmt->bindParam(1, $this->username);
    $stmt->bindParam(2, $this->password);
    $stmt->bindParam(3, $this->fName);
    $stmt->bindParam(4, $this->lName);

    // Execute query
    return $stmt->execute();
  }
  public function update() {}
  public function delete() {}
}
