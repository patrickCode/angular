/// <reference path="Templates/dashboard.html" />
(function () {
    
    var app = angular.module("forms", ["ngRoute", "ngMessages"]);

    var routes = [
        { url: "/", settings: { templateUrl: "Templates/home.html" } },
        { url: "/results", settings: { templateUrl: "Templates/results.html" } }
    ];

    var registerRoutes = function ($routeProvider) {
        routes.forEach(function (route) {
            $routeProvider.when(route.url, route.settings);
        });
        $routeProvider.otherwise({ redirectTo: routes[0].url });
    };

    app.config(registerRoutes);
}());