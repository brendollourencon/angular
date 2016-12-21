<?php
//header('Content-Type: application/json; charset=utf-8');
$data = file_get_contents("php://input");
$dados = json_decode($data);
include_once "Conexao.php";

$conexao = Conexao::conectar();

try{
    $query = $conexao->prepare("INSERT INTO clientes (nome,telefone,data_cadastro) VALUES (?,?,?)");
    $query->bindValue(1, $dados->nome);
    $query->bindValue(2, $dados->telefone);
    $query->bindValue(3, $dados->data_cadastro);
    $teste = $query->execute();
}
catch (Exception $e){
    exit(var_dump($e->getMessage()));
}
exit();
