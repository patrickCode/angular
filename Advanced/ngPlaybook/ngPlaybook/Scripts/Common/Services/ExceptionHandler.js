(function (module) {

    module.config(function($provide) {
        $provide.decorator("$exceptionHandler", function($delegate, $injector) {
            return function(exception, cause) {     //exceptionHandler is a function object so we need to return the function
                $delegate(exception, cause);

                var alerting = $injector.get("alerting");
                alerting.addError(exception.message);   //there is no guarantee that exception message will exist. So some introspection is needed on the exception's message.
            };
        });
    });

}(angular.module("common")));