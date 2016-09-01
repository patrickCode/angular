/// <reference path="../../../Lib/angular.js" />
/// <reference path="../../../Lib/angular-ui-router.js" />
/// <reference path="../../../Lib/angular-mocks.js" />
/// <reference path="../../../Lib/qunit.js" />

/// <reference path="../../../App/app.js" />
/// <reference path="../../../App/Common/navigator.js" />

var injector;
var locationService;
var locationVistied;
var navigator;

QUnit.module("navigator-test", {
    setup: function () {
        angular.module("common")
            .factory("mockLocationService", function () {
                return function () {
                    return {
                        path: function (url) {
                            locationVistied = url;
                        }
                    }
                }
            })
            .config([
        "$provide", function ($provide) {
            $provide.decorator("$location", function ($delegate, mockLocationService) {
                return mockLocationService($delegate);
            });
        }]);

        injector = angular.injector(['ng', 'ngMock', 'common']);
        locationService = injector.get("$location");
        navigator = injector.get('navigator');
    },
    teardown: function () {
        injector = null;
        locationService = null;
        locationVistied = null;
        navigator = null;
    }
});

QUnit.test("go to product details", function () {
    navigator.goToProductDetails(2);

    equal("products/2/details", locationVistied);
});