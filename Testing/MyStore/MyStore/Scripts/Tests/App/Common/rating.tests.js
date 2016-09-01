/// <reference path="../../../Lib/angular.js" />
/// <reference path="../../../Lib/angular-ui-router.js" />
/// <reference path="../../../Lib/angular-mocks.js" />
/// <reference path="../../../Lib/qunit.js" />

/// <reference path="../../../App/app.js" />
/// <reference path="../../../App/Common/ratings.dir.js" />

var injector;
var compile;
var scope;
var templateCache;

QUnit.module("rating-test", {
    setup: function () {
        injector = angular.injector(['ng', 'common']);
        scope = injector.get('$rootScope').$new();
        compile = injector.get('$compile');
        templateCache = injector.get('$templateCache');
    },
    teardown: function () {
        injector = null;
        scope = null;
        compile = null;
    }
});

QUnit.test("locater", function () {
    var dirHtml = "<star-rating></star-rating>";
    var dummyHtml = "Star Rating invoked";
    templateCache.put("Templates/ratings.html", dummyHtml);

    var domElement = compile(dirHtml)(scope);

    scope.$digest();

    var domHtml = domElement.html();
    equal(dummyHtml, domHtml);
});

QUnit.test("scope", function () {
    scope.product = {
        id: 1,
        rating: 3
    };
    var dirHtml = "<star-rating rate='product.rating' object='product'></star-rating>";
    var dummyHtml = "Star Rating invoked";

    templateCache.put("Templates/ratings.html", dummyHtml);

    var domElement = compile(dirHtml)(scope);
    scope.$digest();
    var domHtml = domElement.html();

    equal(dummyHtml, domHtml);
    equal(scope.product.rating, domElement.isolateScope().rate);
    deepEqual(scope.product, domElement.isolateScope().object);
});


QUnit.test("scope", function () {
    var modifedObj;
    var modifiedRate;
    scope.product = {
        id: 1,
        rating: 3
    };
    scope.update = function (obj, value) {
        modifedObj = obj;
        modifiedRate = value;
    }
    var dirHtml = "<star-rating rate='product.rating' object='product' changed='update(obj, value)'></star-rating>";
    var dummyHtml = "Star Rating invoked";

    templateCache.put("Templates/ratings.html", dummyHtml);

    var domElement = compile(dirHtml)(scope);
    scope.$digest();
    var domHtml = domElement.html();

    equal(dummyHtml, domHtml);
    domElement.isolateScope().click(5);
    scope.$apply();

    equal(5, modifiedRate)
});