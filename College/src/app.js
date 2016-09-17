angular.module("common", []);

angular.module("professors", ["common"]);
angular.module("students", ["common"]);

angular.module("college", ["ui.router", "professors", "students", "common"]);

angular.module("college")
    .config(["$stateProvider", "$urlRouterProvider",
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('');

            $stateProvider.state("shell", {
                url: "",
                controller: "shellController",
                templateUrl: "/src/templates/shell.html"
            })
        }]);