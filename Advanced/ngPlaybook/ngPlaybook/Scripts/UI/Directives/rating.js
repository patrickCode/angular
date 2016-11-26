(function(module) {

    var empRating = function() {
        return {
            scope: {
                value: "="
            },
            link: function (scope, element, attributes) {

                var min = parseInt(attributes.min || "1");
                var max = parseInt(attributes.max || "5");

                scope.$watch("value", function(newValue) {
                    element.empty();
                    for (var i=0;i<newValue;i++)
                        element.append("<button class='btn btn-default btn-xs'><span class='glyphicon glyphicon-star'></span></button>");
                });

                element.on("click", function() {
                    //if (scope.value < max)    //Fault piece of code because Angular, wouldnt know that value is getting updated so it will not call its digest loop. It happens becasue the code is in native onclick method
                    //    scope.value += 1;
                    //else
                    //    scope.value = min;
                    scope.$apply(function() {
                        if (scope.value < max)
                            scope.value += 1;
                        else
                            scope.value = min;
                    });
                });
            }
        }
    };

    module.directive("empRating", empRating);

}(angular.module("ui")))