(function (module) {

    var employee = function (firstName, lastName, level) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.level = level;
    };

    module.value("Employee", employee);

}(angular.module("ui")));
