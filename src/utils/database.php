<?php

class Database {
    private $conn;
    private $host;
    private $user;
    private $password;
    private $database;

    public function __construct($host, $user, $password, $database) {
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->database = $database;
        $this->getconn();
        $this->setCharset();
    }

    private function setCharset() {
        if (!$this->conn->set_charset("utf8")) {
            printf("Error loading character set utf8: %s\n", $this->conn->error);
            exit();
        }
    }

    private function getconn() {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->database);
    }

    public function query($sql) {
        $query = $this->conn->query($sql);
        if (strstr($sql, 'SELECT')) {
            $query = $query->fetch_all(MYSQLI_ASSOC);
        }
        return $query;
    }

    public function search($table, $fields, $where) {
        foreach ($fields as $val) {
            $fields .= '`' . $val . '`,';
        }
        if ($fields) {
            substr($fields, 0, -1);
        } else {
            $fields = '*';
        }
        $sql = 'SELECT ' . $fields . ' FROM ' . $table . $where;
        $query = $this->conn->query($sql);
        $result = $query->fetch_all(MYSQLI_ASSOC);
        return $result;
    }

    public function insert($table, $data) {
        $fields = ' (';
        $values = ' (';
        //INSERT INTO `test`.`test` (`shop_id`, `shop_name`, `shop_address`, `shop_type`, `status`) VALUES ('31', '2312', '12', '12', '0');
        foreach ($data as $key => $val) {
            $fields .= '`' . $key . '`,';
            $values .= '\'' . $val . '\',';
        }
        if ($fields !== ' (') $fields = substr($fields, 0, -1) . ') ';
        if ($values !== ' (') $values = substr($values, 0, -1) . ') ';
        if ($fields == ' (') {
            throw new Exception('Wrong Statement');
        } else {
            $sql = 'INSERT INTO ' . $table . $fields . ' VALUES ' . $values;
            $this->conn->query($sql);
            return $this->conn->insert_id;
        }
    }

    public function delete($table, $where) {
        $sql = 'DELETE FROM ' . $table . $where;
        $this->conn->query($sql);
        return $this->conn->affected_rows;
    }

    public function update($table, $data, $where) {
        $update = ' SET ';
        foreach ($data as $key => $val) {
            $update .= '`' . $key . '` = ' . '\'' . $val . '\',';
        }
        $sql = 'UPDATE ' . $table . $update . $where;
        $this->conn->query($sql);
        return $this->conn->affected_rows;
    }

    public function close() {
        $this->conn->close();
    }
}