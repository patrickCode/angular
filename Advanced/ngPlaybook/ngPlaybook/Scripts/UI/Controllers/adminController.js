(function (module) {

    var adminController = function (Employee, confirmPromotion) {

        var model = this;

        var removeEmployee = function(employee) {
            for (var i = 0; i < model.employees.length; i++) {
                if (employee === model.employees[i]) {
                    model.employees.splice(i, 1);
                    alert(employee.firstName + " has been promoted");
                }
            }
        }

        model.promote = function(emp) {
            confirmPromotion(emp).then(removeEmployee);
        };

        model.employees = [
            new Employee("Pratik", "Bhattacharya", 3),
            new Employee("Anjay", "Gupta", 4),
            new Employee("Ruchira", "Dutta", 3),
            new Employee("Pradeep", "Budapanahali", 2)
        ];
    }

    module.controller("adminController", adminController);

}(angular.module("ui")));