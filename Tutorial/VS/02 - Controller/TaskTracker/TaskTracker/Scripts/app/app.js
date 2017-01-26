var app = angular.module("taskTrackerApp", []);

app.controller("taskController", function ($scope) {
    $scope.applicationName = "Task Tracker";
    $scope.companyInfo = "Microsoft";

    $scope.task = {
        title: "",
        details: "",
        assignedTo: "",
        priority: "Low",
        effort: 0,
        estimatedDays: 0
    }

    $scope.taskSubmitted = true;
    $scope.errorMessage = "";

    $scope.users = [
        { alias: "johnmc@microsoft.com", name: "John McClane" },
        { alias: "nfury@microsoft.com", name: "Nick Fury" },
        { alias: "rdeckard@microsoft.com", name: "Rick Deckard" },
        { alias: "leon@microsoft.com", name: "Léon" },
        { alias: "adwaller@microsoft.com", name: "Amanda Waller" }
    ];

    $scope.effortToString = function (effortValue) {
        if (effortValue <= 5)
            return "Low Effort";
        if (effortValue <= 15)
            return "Medium Effort";
        if (effortValue <= 30)
            return "High Effort";
        else
            return "Task Impossible";
    }

    $scope.getEstimatedDate = function (esitimatedDays) {
        var currentDateMs = Date.now();
        var estimatedMs = currentDateMs + (esitimatedDays * 24 * 60 * 60 * 1000);
        var estimatedDate = new Date(estimatedMs).toLocaleDateString();
        $scope.task.estimatedDate = estimatedDate;
    }

    $scope.submitTask = function () {
        //Validations
        $scope.taskSubmitted = false;
        if ($scope.task.title === undefined || $scope.task.title === null || $scope.task.title === "") {
            $scope.errorMessage = "Title cannot be blank";
            return;
        }
        if ($scope.task.assignedTo === undefined || $scope.task.assignedTo === null || $scope.task.assignedTo === "") {
            $scope.errorMessage = "Task hasn't been assigned";
            return;
        }
        if ($scope.task.effort > 30) {
            $scope.errorMessage = "Too high effort. Please consider breaking the task into multiple simpler tasks";
            return;
        }
        if ($scope.task.estimatedDays > 50) {
            $scope.errorMessage = "For a single task days cannot be greated than 50. Please consider breaking your task";
            return;
        }
        $scope.taskSubmitted = true;
        alert("Task Succesfully submitted");
    }
})