(function (module) {

    var navigator = function ($location) {
        return {
            goToProductDetails: function (id) {
                if (id === undefined || id === null)
                    throw new Error("No ID Found");
                $location.path("products/" + id + "/details");
            }
        }
    }
    module.factory("navigator", navigator);

}(angular.module("common")))