/// <reference path="../../../Lib/angular.js" />
/// <reference path="../../../Lib/angular-ui-router.js" />
/// <reference path="../../../Lib/angular-mocks.js" />
/// <reference path="../../../Lib/qunit.js" />

/// <reference path="../../../App/app.js" />
/// <reference path="../../../App/Products/products.ctrl.js" />

var injector;
var controller;
var scope;
var q;

QUnit.module("products-controller", {
    setup: function () {
        injector = angular.injector(['ng', 'product']);
        scope = injector.get('$rootScope').$new();
        q = injector.get('$q');
        controller = injector.get('$controller');
    },
    teardown: function () {
        injector = null;
        scope = null;
        controller = null;
    }
});

QUnit.test("get all products", function () {
    var mockedService = defaultProductsData();
    initController(mockedService);

    scope.$digest();

    var products = scope.products;
    var product = products[0];
    equal(1, product.id);
    equal("My Dummy Product", product.name);
});

QUnit.test("products service failure", function () {
    var msg = "Server Failure";
    var mockedService = errorProneProductsData(msg);
    initController(mockedService);

    scope.$digest();

    ok(scope.errorOcurred);
    equal(msg, scope.errorMessage);
});

QUnit.test("get product detail", function () {
    var mockedService = defaultProductsData();
    initController(mockedService);

    scope.$digest();
    scope.getProductDetails({id: 1, name:"some"});
    scope.$apply();

    var productDet = scope.productDet;
    equal(1, productDet.id);
    equal("My Dummy Product", productDet.name);
    equal("Some description", productDet.description);
});

var errorProneProductsData = function (errorMsg) {
    var deferred = q.defer();
    return {
        getAllProducts: function () {
            deferred.reject(errorMsg);
            return deferred.promise;
        }
    }
}

var defaultProductsData = function () {
    return {
        getAllProducts: function () {
            var deferred = q.defer();
            deferred.resolve([
                {
                    id: 1,
                    name: "My Dummy Product"
                }
            ]);
            return deferred.promise;
        },
        getProduct: function (product) {
            var deferred = q.defer();
            deferred.resolve(
                {
                id: 1,
                name: "My Dummy Product",
                description: "Some description"
                }
            );
            return deferred.promise;
        }
    }
}

var initController = function (mockProductData) {
    controller("productsCtrl", {
        $scope: scope,
        productsData: mockProductData
    });
}