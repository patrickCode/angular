angular
    .module("taskTrackerApp")
    .controller("taskController", function ($scope, taskService, userService) {
        $scope.applicationName = "Task Tracker";
        $scope.companyInfo = "Microsoft";

        $scope.tasks = taskService.getAllTasks();
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

        $scope.users = userService.getAllUsers();

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
            return estimatedDate;
        }

        $scope.getUser = function (alias) {
            return userService.getUser(alias);
        }

        $scope.submitTask = function () {
            var result = taskService.addNewTask($scope.task);
            if (result === 'Success') {
                $scope.taskSubmissionFailed = false;
                alert("Task Succesfully submitted");
                tasks = taskService.getAllTasks();
            }
            else {
                $scope.taskSubmissionFailed = true;
                $scope.errorMessage = result;
            }
        }
    })