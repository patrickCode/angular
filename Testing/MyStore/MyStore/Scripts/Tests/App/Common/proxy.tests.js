/// <reference path="../../../Lib/angular.js" />
/// <reference path="../../../Lib/angular-ui-router.js" />
/// <reference path="../../../Lib/angular-mocks.js" />
/// <reference path="../../../Lib/qunit.js" />

/// <reference path="../../../App/app.js" />
/// <reference path="../../../App/Common/proxy.js" />

var injector;
var proxy;
var httpBackend;

QUnit.module("proxy", {
    setup: function () {
        injector = angular.injector(['ng', 'ngMockE2E', 'common']);
        httpBackend = injector.get('$httpBackend');
        proxy = injector.get('proxy');
    },
    teardown: function () {
        injector = null;
        httpBackend = null;
        proxy = null;
    }
});

QUnit.test("get", function () {
    expect(1);
    var url = "http://localhost/api/products";
    var dummyProducts = [
                {
                    id: 1,
                    name: "My Dummy Product"
                }
    ];
    httpBackend.whenGET(url).respond(dummyProducts);

    proxy.get(url)
        .then(function (response) {
            deepEqual(dummyProducts, response.data);
            start();
        });
    stop();
});

QUnit.test("get fails", function () {
    expect(2);
    var url = "http://localhost/api/products";
    httpBackend.whenGET(url).respond(400, null, null, "Bad Request");

    proxy.get(url)
        .then(null, function (error) {
            equal(400, error.status);
            equal("Bad Request", error.statusText, JSON.stringify(error));
            start();
        });
    stop();
});