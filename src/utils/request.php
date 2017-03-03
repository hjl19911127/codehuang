<?php

class Request {
    private $conn;
    private $url;
    private $timeout;
    private $res;

    public function __construct($url, $timeout = 5) {
        $this->url = $url;
        $this->timeout = $timeout;
        $this->init();
    }

    private function init() {
        if (!$this->url) return false;
        $this->conn = curl_init();
        curl_setopt($this->conn, CURLOPT_URL, $this->url);
        curl_setopt($this->conn, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($this->conn, CURLOPT_CONNECTTIMEOUT, $this->timeout);
    }

    public function exec() {
        $this->res = curl_exec($this->conn);
        return $this;
    }

    public function getRes() {
        $this->close();
        return $this->res;
    }

    public function close() {
        curl_close($this->conn);
    }
}