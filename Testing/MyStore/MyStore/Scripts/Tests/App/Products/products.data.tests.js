/// <reference path="../../../Lib/angular.js" />
/// <reference path="../../../Lib/angular-ui-router.js" />
/// <reference path="../../../Lib/angular-mocks.js" />
/// <reference path="../../../Lib/qunit.js" />

/// <reference path="../../../App/app.js" />
/// <reference path="../../../App/Products/products.data.js" />

var injector;
var productsData;
var q;

QUnit.module("products-data", {
    setup: function () { },
    teardown: function () {
        injector = null;
        productsData = null;
        qService = null;
    }
});

var setup = function (proxyProcessor) {
    angular.module("common")
        .factory("proxy", function () {
            return proxyProcessor;
        });
    injector = angular.injector(['ng', 'common', 'product']);
    q = injector.get('$q');
    productsData = injector.get('productsData');
}

QUnit.test("get all products api", function () {
    expect(1);
    var dummyData = [
        {
            id: 1,
            name: "My Dummy Product"
        }
    ];
    var mockProxy = {
        get: function () {
            var deferred = q.defer();
            deferred.resolve({
                data: dummyData
            });
            return deferred.promise;
        }
    }
    setup(mockProxy);

    productsData.getAllProducts()
        .then(function (data) {
            deepEqual(dummyData, data);
            start();
        });
    stop();
});

QUnit.test("get all products api unauthenticated", function () {
    expect(1);
    var mockProxy = {
        get: function () {
            var deferred = q.defer();
            deferred.reject({
                status: 401,
                reasonPhrase: "Some phrase"
            });
            return deferred.promise;
        }
    }
    setup(mockProxy);
    
    productsData.getAllProducts()
        .then(null, function (error) {
            equal("User is not authenticated", error);
            start();
        });
    stop();
});