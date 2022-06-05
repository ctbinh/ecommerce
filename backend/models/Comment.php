<?php
class Comment
{
    // DB Stuff
    private $conn;
    private $table = 'comment';

    // Properties
    public $product_id;
    public $id;
    public $username;
    public $comment;
    public $rate;
    public $datetime;

    // Constructor with DB
    public function __construct($db)
    {
        $this->conn = $db;
    }

    // Get Single Category
    public function read_single()
    {
        // Create query
        $query = 'SELECT * FROM ' . $this->table . ' WHERE product_id = ? ';

        //Prepare statement
        $stmt = $this->conn->prepare($query);

        // Bind ID
        $stmt->bindParam(1, $this->product_id);

        // Execute query
        $stmt->execute();

        // $arr = array();

        // while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {
        //   extract($row);
        //   array_push($arr, $url);
        // }
        // return $arr;

        return $stmt;
    }
    public function delete()
    {
        // Create query
        $query = 'DELETE FROM ' . $this->table . ' WHERE id = :id';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->id = htmlspecialchars(strip_tags($this->id));

        // Bind data
        $stmt->bindParam(':id', $this->id);

        // Execute query
        if ($stmt->execute()) {
            return true;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }

}