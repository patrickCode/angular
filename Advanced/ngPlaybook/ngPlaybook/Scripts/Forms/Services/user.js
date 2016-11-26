(function (module) {

    var user = function() {
        return {
            username: "",
            email: "",
            website: "",
            phone: "",
            birthdate: "",
            age: "",
            feellike: "",
            color: "",
            cuisine: "",
            bio: "",
            terms: "",
            status: "",
            rating: 3
        };
    };

    module.factory("user", user);

}(angular.module("forms")))