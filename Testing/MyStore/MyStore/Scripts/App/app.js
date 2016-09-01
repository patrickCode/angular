angular.module("common", []);
angular.module("product", ["common"]);

var app = angular.module("app", ["ui.router", "product"]);

app.config(["$stateProvider", "$urlRouterProvider", "$httpProvider", "$locationProvider",
    function ($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider
            .when("", "/products")
            .otherwise("/products");

        $stateProvider.state("shell", {
            url: "",
            controller: "shellCtrl",
            templateUrl: "Templates/shell.html"
        }).state("shell.products", {
            url: "/products",
            controller: "productsCtrl",
            templateUrl: "Templates/products.html"
        })
    }]);