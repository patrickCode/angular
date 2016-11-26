(function(module) {

    var setupDom = function(element) {  //operating using browser APIs
        var input = element.querySelector("input, textarea, select, star-rating");
        var type = input.getAttribute("type");
        var name = input.getAttribute("name");
        if (type !== "checkbox" && type !== "radio") {
            input.classList.add("form-control");
        }

        var label = element.querySelector("label");
        label.classList.add("control-label");

        element.classList.add("form-group");
        return name;
    };

    var addMessges = function (form, element, name, $compile, scope) {
        var messages = "<div class='help-block' ng-messages='" + form.$name + "." + name + ".$error' ng-hide='" + form.$name + "." + name + ".$untouched'>" +
            "<div ng-messages-include='Templates/messages.html'></div></div>";
        element.append($compile(messages)(scope));
    };

    var watcherFor = function (form, name) {
        return function() {
            if (name && form[name])
                return form[name].$invalid && form[name].$touched;
        };
    };

    var updaterFor = function (element) {
        return function (isInvalid) {
            if (isInvalid)
                element.removeClass("has-success").addClass("has-error");
            else
                element.removeClass("has-error").addClass("has-success");
        }
    };

    var link = function ($compile) {
        return function (scope, element, attributes, form) {
            var name = setupDom(element[0]);   //Dereferencing the Angular's jqlite wrapped element.
            addMessges(form, element, name, $compile, scope);
            scope.$watch(watcherFor(form, name), updaterFor(element));
        };
    }

    var formInput = function($compile) {
        return {
            restrict: "A",
            require: '^form',   //Requires the Form's Controller
            link: link($compile)
        };
    };

    module.directive("forminput", formInput);

}(angular.module("forms")));