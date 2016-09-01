(function (module) {

    var productsController = function ($scope, productsData) {

        $scope.errorOcurred = false;
        $scope.errorMessage = "";
        var getAll = function () {
            $scope.errorOcurred = false;
            productsData.getAllProducts()
                .then(function (data) {
                    $scope.products = data;
                })
                .catch(function (errorMsg) {
                    $scope.errorOcurred = true;
                    $scope.errorMessage = errorMsg;
                });
        }

        $scope.getProductDetails = function (product) {
            $scope.errorOcurred = false;
            productsData.getProduct(product)
                .then(function (data) {
                    $scope.productDet = data;
                })
                .catch(function (errorMsg) {
                    $scope.errorOcurred = true;
                    $scope.errorMessage = errorMsg;
                });
        }

        $scope.updateRate = function (obj, value) {
            obj.rating = value;
        }

        var init = function () {
            getAll();
            $scope.etastart = 0;
            $scope.etaend = 5;
        }
        init();
    }

    module.controller("productsCtrl", productsController);

}(angular.module("product")))