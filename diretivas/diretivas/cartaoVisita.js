angular.module("testeDirevitas").directive("cartaoVisita", function () {



    return {
        templateUrl: "view/cartao-visita.html",
        scope: {
            img: '@',
            titulo: '@'
        },
        replace: true,
        transclude: true
    }


});