angular.module("exemploServicos").factory("dadosClientes", function ($http) {

    var _adicionaNovoCliente = function (cliente) {
        return $http.post("http://localhost/angular/angular/ajax/insere-dados.php", cliente);
    };

    var _consultaDados = function () {
        return $http.get("http://localhost/angular/angular/ajax/Dados.php");
    };

    return {
        consultaDados: _consultaDados,
        adicionaNovoCliente: _adicionaNovoCliente
    };

});