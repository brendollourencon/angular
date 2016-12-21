angular.module("exemploServicos").controller("agendaController", function ($scope, dadosClientes, $filter) {

    var carregarClientes = function () {
        dadosClientes.consultaDados().success(function (data) {
            $scope.listaClientes = data;
        });
    };

    carregarClientes();

    $scope.adicionaCliente = function (cliente) {
        cliente.data_cadastro = $filter('date')(new Date(cliente.data_cadastro),"yyyy/MM/dd");
        dadosClientes.adicionaNovoCliente(cliente).success(function (data) {
            delete $scope.cliente;
            carregarClientes();
        });

    }


});