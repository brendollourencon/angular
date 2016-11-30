// criando novo modulo helloWord, sem injeção de novos modulos []
angular.module("helloWord", []);

//criano controller no modulo helloWord
angular.module("helloWord").controller("helloWordController", function ($scope) {

    // criando mensagem
    $scope.message = "Hello Word";

});