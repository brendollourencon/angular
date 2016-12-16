<?php
//header('Content-Type: application/json; charset=utf-8');
$data = file_get_contents("php://input");
$dados = json_decode($data);
$dados = (object) $dados[0];
include_once "Conexao.php";

$conexao = Conexao::conectar();

$query = $conexao->prepare("INSERT INTO clientes (nome,telefone,data_cadastro) VALUES (?,?,?)");
$query->bindValue(1,$dados->nome);
$query->bindValue(2,$dados->telefone);
$query->bindValue(3,$dados->data_cadastro);
$query->execute();
exit();