(function (module) {
    var modeldebugger = true;
    module.config(function ($provide) {
        $provide.decorator("$interpolate", function ($delegate, $log) {
            var bindingWrapper = function (bindingFunction, bindingExpression) {
                return function () {
                    var result = bindingFunction.apply(this, arguments);
                    var trimmedResult = result.trim();
                    var log = trimmedResult ? $log.info : $log.warn;    //Based on whether binding has been done or not warning or info type message will be logged
                    log.call($log, bindingExpression + " = " + trimmedResult);
                    return result;
                };
            };

            var serviceWrapper = function () {
                var bindingFunction = $delegate.apply(this, arguments);   //arguments represent all the arguments that have been passed to a function. apply is a JS function, that is used to invoke a function.
                if (angular.isFunction(bindingFunction) && arguments[0] && modeldebugger) {  //the 1st argument is the binding expression, so if a binding expression is present then we call the wrapper function to log the binding value, else we just return the binding function
                    return bindingWrapper(bindingFunction, arguments[0].trim());
                }
                return bindingFunction;
            };

            angular.extend(serviceWrapper, $delegate);  //attach all special properties of $interpolate function to the wrapper function
            return serviceWrapper;
        });
    });

}(angular.module("common")))