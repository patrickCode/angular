angular
       .module("taskTrackerApp")
       .service("userService", function () {

           var userList = [{ alias: "johnmc@microsoft.com", name: "John McClane" },
                    { alias: "nfury@microsoft.com", name: "Nick Fury" },
                    { alias: "rdeckard@microsoft.com", name: "Rick Deckard" },
                    { alias: "leon@microsoft.com", name: "Léon" },
                    { alias: "jryan@microsoft.com", name: "Jack Ryan" },
                    { alias: "adwaller@microsoft.com", name: "Amanda Waller" }];

           this.getAllUsers = function () {
               return userList;
           }

           this.getUser = function(alias) {
               return userList.find(function (user) {
                   return user.alias === alias;
               });
           }
       });