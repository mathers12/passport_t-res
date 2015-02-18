(function(app) {

    app.config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            views: {
                "main": {
                    controller: 'LoginController',
                    templateUrl: 'login/login.tpl.html'
                }
            },
            data:{ pageTitle: 'Login' }
        });
    }]);

    //app.service('Login', ['$scope','$firebase', function (user){
    //
    //    var ref = new Firebase("https://blazing-fire-175.firebaseio.com");
    //
    //    ref.authWithPassword({
    //        email    : user.email,
    //        password : user.password
    //    }, function(error, authData) {
    //        if (error === null) {
    //            // user authenticated with Firebase
    //            console.log("User ID: " + authData.uid + ", Provider: " + authData.provider);
    //        } else {
    //            console.log("Error authenticating user:", error);
    //        }
    //    });
    //}]);

    app.controller('LoginController', ["$scope","$location","$http",function($scope,$location,$http)
    {

        $scope.Login = function()
        {
             var polls = $resource('/auth/');

             $scope.Login = function() {
             $scope.user.link = $location.url();
             polls.save($scope.user);
             };

        };


    }
]);

}(angular.module("T-Res-App.login", [
    'firebase',
    'ui.router',
    "ngResource"
])));