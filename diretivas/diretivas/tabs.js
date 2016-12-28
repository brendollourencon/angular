angular.module("testeDirevitas").directive("percorre", function () {

    return {
        controller: function ($scope, $element, $attrs) {

            var array = [];

            this.registraNoArray = function (tab) {
                array.push(tab);
            };
            
            
            this.fechaTodasTabs = function () {
                array.forEach(function (tab) {
                    tab.aberto = false;
                })
            }

        }
    }

});


angular.module("testeDirevitas").directive("tabDiretiva", function () {

    return {
        templateUrl: "view/tab.html",
        transclude: true,
        scope: {
            titulo: "@"
        },
        require: '^percorre',
        link: function (scope, element, attrs, ctrl) {
            ctrl.registraNoArray(scope);
            scope.open = function () {
                ctrl.fechaTodasTabs();
                scope.aberto = true;
            };
        }
    };

});