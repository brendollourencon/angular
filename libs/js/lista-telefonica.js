// criando modulo sem nenhuma inportação [], apenas diretivas proprias do angilar
angular.module("listaTelefonica",[]);

// criando controller da lista telefonica
angular.module("listaTelefonica").controller("listaTelefonicaController",function ($scope) {

    // titulo da aplicação
    $scope.titulo = "Lista telefonica";

    // conjunto de contatos em objetos
    $scope.contatos = [
        {nome:"Brendol", telefone: "9999-8888" , date: new Date(), valor: 10},
        {nome:"Maria", telefone: "1234-5678" , date: new Date(), valor: 30},
        {nome: "Ana", telefone: "4321-9876" , date: new Date(), valor: 40}
    ];

    $scope.operadoras = [
        {nome:"Claro", codigo: 16, categoria: "celular"},
        {nome:"Oi", codigo: 17, categoria: "celular"},
        {nome:"Tim", codigo: 42, categoria: "fixo"}
    ];

    // conjunto de clientes em array
    $scope.clientes = [
        ["Brendol","Programador"],
        ["Maria", "Dona do lar"],
        ["João", "Pedreiro"]
    ];

    $scope.selecionado = "selecionado";

    // funções

    // função para adicionar contato
    $scope.adicionarContatos = function (novoContato) {
        // adicionando novo contato
        $scope.contatos.push(novoContato);
        // deletando ng model (novoContato)
        delete $scope.novoContato;

    };

    $scope.apagarContatos = function (contatos) {
        $scope.contatos = contatos.filter(function (contato) {
            if(!contato.selecionado){
                return contato;
            }
        });

    };

    // função par adicionar clientes
    $scope.adicionarClientes = function (novoCliente) {

        $scope.clientes.push(novoCliente);

        delete $scope.novoCliente;
    };

    // verifica se existe contatos selecionado
    $scope.verificaSelecionado = function (contatos) {

        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    }

    $scope.ordenar = 'nome';
    $scope.reverso = true;
    
    $scope.sortBy = function (ordenar) {
        $scope.ordenar = ordenar;

        $scope.reverso = ($scope.ordenar == ordenar) ? !$scope.reverso : false;
    }


});