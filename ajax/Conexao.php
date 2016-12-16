<?php
class Conexao{
    public static function conectar(){

        try{
            $pdo = new PDO("mysql:host=localhost;dbname=ajaxAngular", "root","123",array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
            $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            return $pdo;
        }
        catch (PDOException $error){
            $error->getMessage();
        }
    }
}