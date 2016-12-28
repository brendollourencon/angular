angular.module("testeDirevitas").directive("diretivaLink", function () {

    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {

            var formatDate = function (date) {
                date = date.replace(/[^0-9]+/g, ""); // limpa entrada, tudo aquilo que nao for numero
                if(date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2);
                }

                if(date.length > 5){
                    date = date.substring(0,5) + "/" + date.substring(5,9);
                }
                return date;
            };


            element.on("keyup", function () {
                ctrl.$setViewValue(formatDate(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    }


});