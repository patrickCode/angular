(function(module) {

    var ratingsCtrl = function($scope) {
        $scope.currentRate = 1;
        $scope.type = "Skill";
        
        $scope.skills = [
            {
                Label: "Deployment",
                Rate: 3,
                Elements: [
                    {
                        Label: "Active Directory",
                        Rate: 4
                    },
                    {
                        Label: "Android",
                        Rate: 2
                    },
                    {
                        Label: "Citrix",
                        Rate: 0
                    },
                    {
                        Label: "CRM Plugins",
                        Rate: 1
                    }
                ]
            },
            {
                Label: "On-Premises",
                Rate: 3,
                Elements: [
                    {
                        Label: ".NET",
                        Rate: 3
                    },
                    {
                        Label: "ASP.NET",
                        Rate: 1
                    },
                    {
                        Label: "ASP.NET MVC",
                        Rate: 4
                    },
                    {
                        Label: "CSOM",
                        Rate: 4
                    },
                    {
                        Label: "IIS",
                        Rate: 0
                    },
                    {
                        Label: "SQL Servier",
                        Rate: 2
                    }
                ]
            }
        ];

        $scope.selectedChildrenSkills = [];

        $scope.changeFuncSkill = function(newLabel) {
            $scope.selectedFuncSkill = newLabel;
            var parentSkill = _.findWhere($scope.skills, {Label: newLabel});
            $scope.selectedChildrenSkills = parentSkill.Elements;
        }

        $scope.parentrate = function(type, selectedValue) {
            var parentSkill = _.findWhere($scope.skills, {Label: type});
            if (parentSkill !== undefined) {
                parentSkill.Rate = selectedValue;
                _.each(parentSkill.Elements, function(skill) {
                    skill.Rate = selectedValue;
                })
            }
        }

        var init = function() {
            $scope.changeFuncSkill("Deployment");
        }
        init();
        
    }

    module.controller("ratingsController", ratingsCtrl);

}(angular.module("app")));