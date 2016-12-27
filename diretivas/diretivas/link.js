angular.module("testeDirevitas").directive("diretivaLink", function () {

    return {
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {

            element.on("keyup", function () {
                console.log(ctrl.$viewValue);
            });
        }
    }


});