<?php

include_once "Conexao.php";

$conexao = Conexao::conectar();

$resultado = $conexao->prepare("SELECT * from clientes");
$resultado->execute();
$dados = $resultado->fetchAll(PDO::FETCH_OBJ);
$dadosArray = json_encode($dados);
exit($dadosArray);