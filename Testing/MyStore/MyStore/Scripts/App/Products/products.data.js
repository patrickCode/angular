(function (module) {

    var productsData = function ($q, proxy) {

        var getAllProducts = function () {
            var deferred = $q.defer();
            var endpoint = "http://creativityproducts.azurewebsites.net/api/products";
            proxy.get(endpoint)
                .then(function (response) {
                    deferred.resolve(response.data);
                }, function (error) {
                    if (error.status == 401)
                        deferred.reject("User is not authenticated");
                    else if (error.status == 403)
                        deferred.reject("User is not authorized");
                    else
                        deferred.reject("Some error ocurred");
                });
            return deferred.promise;
        }

        return {
            getAllProducts: getAllProducts
        }
    }

    module.factory("productsData", productsData)

}(angular.module("product")))