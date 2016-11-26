/// <reference path="Templates/dashboard.html" />
(function () {
    
    var module = angular.module("ui", ["common", "ngAnimate", "ui.router", "googlechart", "ui.bootstrap"]);


    module.config(function($stateProvider, $urlRouterProvider) {

        //You can also specify the controller here, resolve property can also be configured here
        $stateProvider
            .state("dashboard", { abstract: true, url: "/dashboard", templateUrl: "Templates/dashboard.html" })
                .state("health", { parent: "dashboard", url: "/health", templateUrl: "Templates/health.html" })
                .state("performance", { parent: "dashboard", url: "/performance", templateUrl: "Templates/performance.html" })
                .state("errors", { parent: "dashboard", url: "/errors", templateUrl: "Templates/errors.html" })
                .state("usage", { parent: "dashboard", url: "/usage", templateUrl: "Templates/usage.html" })
            .state("admin", { url: "/admin", templateUrl: "Templates/admin.html" });

        $urlRouterProvider.otherwise("/dashboard/health");

    });

}());