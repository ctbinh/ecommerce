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
    public $phone;
    public $username;
    public $address;

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
            ' SET user_id = :user_id, state = :state, total_ship = :total_ship, date = :date, username = :username, phone = :phone, address = :address';

        // Prepare statement
        $stmt = $this->conn->prepare($query);

        // Clean data
        $this->user_id = htmlspecialchars(strip_tags($this->user_id));
        $this->state = htmlspecialchars(strip_tags($this->state));
        $this->total_ship = htmlspecialchars(strip_tags($this->total_ship));
        $this->date = htmlspecialchars(strip_tags($this->date));
        $this->username = htmlspecialchars(strip_tags($this->username));
        $this->phone = htmlspecialchars(strip_tags($this->phone));
        $this->address = htmlspecialchars(strip_tags($this->address));

        // $this->product_id = htmlspecialchars(strip_tags($this->product_id));

        // Bind data
        $stmt->bindParam(':user_id', $this->user_id);
        $stmt->bindParam(':state', $this->state);
        $stmt->bindParam(':total_ship', $this->total_ship);
        $stmt->bindParam(':date', $this->date);
        $stmt->bindParam(':username', $this->username);
        $stmt->bindParam(':phone', $this->phone);
        $stmt->bindParam(':address', $this->address);

        // $stmt->bindParam(':product_id', $this->product_id);
        // Execute query
        if ($stmt->execute()) {
            $last_id = $this->conn->lastInsertId();
            return $last_id;
        }

        // Print error if something goes wrong
        printf("Error: %s.\n", $stmt->error);

        return false;
    }
    public function read()
    {
        $query = 'SELECT O.order_id, O.state, O.total_ship, O.date, I.amount, I.product_id, I.price, P.name, P.cpu, P.description, P.img_cover, U.phone , CONCAT(U.fName ," ",U.lName) AS name,U.username FROM orders AS O, order_item AS I, product AS P,user AS U WHERE O.order_id = I.order_id AND I.product_id = P.product_id AND U.user_id= O.user_id ORDER BY O.order_id';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        return $stmt;
    }

    // Get Single Category
    public function read_single_user($user_id)
    {
        $query = 'SELECT O.order_id, O.state, O.total_ship, O.date,O.username AS receiver,O.phone AS phoneReceiver,O.address, I.amount, I.product_id, I.price, P.name, P.cpu, P.description, P.img_cover, U.phone , CONCAT(U.fName ," ",U.lName) AS nameUser ,U.username FROM orders AS O, order_item AS I, product AS P,user AS U WHERE O.order_id = ? AND O.order_id = I.order_id AND I.product_id = P.product_id  AND U.user_id= O.user_id ORDER BY O.order_id';

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $user_id);
        $stmt->execute();
        return $stmt;
    }
    public function update()
    {
        $query = 'UPDATE orders SET state = ?, date = ?,total_ship = ?,  username = ?, phone = ?, address = ? WHERE order_id = ? ';
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->state);
        $stmt->bindParam(2, $this->date);
        $stmt->bindParam(3, $this->total_ship);
        $stmt->bindParam(4, $this->username);
        $stmt->bindParam(5, $this->phone);
        $stmt->bindParam(6, $this->address);
        $stmt->bindParam(7, $this->order_id);
        $stmt->execute();
        return $stmt;
    }
}