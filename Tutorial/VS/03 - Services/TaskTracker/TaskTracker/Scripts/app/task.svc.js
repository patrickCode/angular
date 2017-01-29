angular.module("taskTrackerApp")
        .factory("taskService", function () {
            var tasks = [{
                title: "Fix UI Accessibility Issues",
                description: "Users are unable to navigate full site with keyboard",
                assignedTo: "johnmc@microsoft.com",
                priority: "High",
                effort: 7,
                estimatedDays: 12
            }, {
                title: "Knowledge Transfer",
                description: "Conduct Ramp-up session to transfer the knowledge of Web Services",
                assignedTo: "nfury@microsoft.com",
                priority: "Low",
                effort: 1,
                estimatedDays: 4
            }, {
                title: "Analyze 1 month customer usage patterns",
                description: "Analyze all App Insights logs for the last 30 days to detect common usage patterns among Customers",
                assignedTo: "rdeckard@microsoft.com",
                priority: "Medium",
                effort: 25,
                estimatedDays: 8
            }];

            var getAllTasks = function () {
                return tasks;
            }

            var addNewTask = function (task) {
                var validationMessage = validateTask(task);
                if (validationMessage === "Validated") {
                    tasks.push(task);
                    return "Success";
                }
                else {
                    return validationMessage;
                }
            }

            var validateTask = function (task) {
                if (task.title === undefined || task.title === null || task.title === "") {
                    return "Title cannot be blank";
                }
                if (task.assignedTo === undefined || task.assignedTo === null || task.assignedTo === "") {
                    return "Task hasn't been assigned";
                }
                if (task.effort > 30) {
                    return "Too high effort. Please consider breaking the task into multiple simpler tasks";
                }
                if (task.estimatedDays > 50) {
                    return "For a single task days cannot be greated than 50. Please consider breaking your task";
                }
                return "Validated";
            }

            return {
                getAllTasks: getAllTasks,
                addNewTask: addNewTask
            }
        });