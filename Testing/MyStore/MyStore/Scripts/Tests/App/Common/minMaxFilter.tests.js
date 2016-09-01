/// <reference path="../../../Lib/angular.js" />
/// <reference path="../../../Lib/angular-ui-router.js" />
/// <reference path="../../../Lib/angular-mocks.js" />
/// <reference path="../../../Lib/qunit.js" />

/// <reference path="../../../App/app.js" />
/// <reference path="../../../App/Common/minMaxFilter.js" />


var injector;
var filter;
var minMaxFiler;

QUnit.module("filter-test", {
    setup: function () {
        injector = angular.injector(['ng', 'common']);
        filter = injector.get("$filter");
        minMaxFiler = filter("minmax");
    },
    teardown: function () {
        injector = null;
        filter = null;
        minMaxFiler = null;
    }
});

QUnit.test("min-range value", function () {
    var items = getMockItems();

    var filteredItems = minMaxFiler(items, 2, 4);
    equal(3, filteredItems.length);
});

QUnit.test("undefined min value", function () {
    var items = getMockItems();

    var filteredItems = minMaxFiler(items, undefined, 4);
    equal(4, filteredItems.length);
});

var getMockItems = function () {
    return [
        {
            id: 1,
            rating: 1
        },
        {
            id: 2,
            rating: 2
        },
        {
            id: 3,
            rating: 3
        },
        {
            id: 4,
            rating: 4
        },
        {
            id: 5,
            rating: 5
        }

    ]
}