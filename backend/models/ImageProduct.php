<?php
class ImageProduct
{
    // DB Stuff
    private $conn;
    private $table = 'product_image';

    // Properties
    public $product_id;
    public $url;

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

    // Get Single Post
    public function read_single()
    {
        // Create query
        $query = 'SELECT * FROM ' . $this->table . ' p
                               WHERE
                                 p.product_id = ?';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Bind ID
        $stmt->bindParam(1, $this->id);

        // Execute query
        $stmt->execute();

        return $stmt;

    }

    public function create()
    {}
    public function update()
    {}
    public function delete()
    {}
}