<?php
class Orders
{
    // DB Stuff
    private $conn;

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
        $query = 'SELECT O.order_id, O.state, O.total_ship, O.date, I.amount, I.product_id, I.price, P.name, P.cpu, P.description, P.img_cover, U.phone , CONCAT(U.fName ," ",U.lName) AS nameUser ,U.username FROM orders AS O, order_item AS I, product AS P,user AS U WHERE O.user_id = ? AND O.order_id = I.order_id AND I.product_id = P.product_id  AND U.user_id= O.user_id ORDER BY O.order_id';

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $user_id);
        $stmt->execute();
        return $stmt;
    }

    public function create()
    {

    }
    public function update()
    {
        $query = 'UPDATE orders SET state = ?, date = ? WHERE order_id = ? AND state = "Pending"';
        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(1, $this->state);
        $stmt->bindParam(2, $this->date);
        $stmt->bindParam(3, $this->order_id);
        $stmt->execute();
        return $stmt;
    }
}