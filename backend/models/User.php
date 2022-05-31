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
    $stmt->bindParam(1, $this->username);

    // Execute query
    $stmt->execute();

    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // set properties
    $this->username = $row['username'];
    $this->password = $row['password'];
  }

  public function create() {
    $query = 'INSERT INTO ' . $this->table . ' SET username = :username, password = :password, fName = :fName, lName = :lName';
    $stmt = $this->conn->prepare($query);
    $this->username = htmlspecialchars(strip_tags($this->username));
    $this->password = htmlspecialchars(strip_tags($this->password));
    $this->fName = htmlspecialchars(strip_tags($this->fName));
    $this->lName = htmlspecialchars(strip_tags($this->lName));
    $stmt->bindParam(':username', $this->username);
    $stmt->bindParam(':password', $this->password);
    $stmt->bindParam(':fName', $this->fName);
    $stmt->bindParam(':lName', $this->lName);
    if($stmt->execute()) {
      return true;
    }
    printf("Error: %s.\n", $stmt->error);
    return false;
  }
  public function update() {}
  public function delete() {}
}
