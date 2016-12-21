var app = angular.module("ajaxApp", []);

app.controller("ajaxController", function ($scope, $http) {

    var dadosClientes = function () {
        $http.get("http://localhost/angular/angular/ajax/Dados.php").success(function (data, status) {
            $scope.clientes = data;
            //console.log(status);
        });
    }

    dadosClientes();

    var criaNovoCliente = function () {

        var dados = [
            {nome:"Brendol Olieira", telefone: "16993101516", data_cadastro:"1994-05-11"}
        ];

        $http.post("http://localhost/angular/angular/ajax/insere-dados.php", dados).success(function (data) {
            console.log(data);
             dadosClientes();
        });

    }

    criaNovoCliente();
});
