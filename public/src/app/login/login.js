(function(app) {

    app.config(function ($stateProvider) {
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
    });

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

    app.controller('LoginController', ["$scope","$location","$resource","$http",function($scope,$location,$resource,$http)
    {

        $scope.Login = function()
        {
            var data = {
                email: $scope.user.email,
                password: $scope.user.password
            };
            /*--RESOURCE VARIANT--*/
             /*var polls = $resource('/auth/');

             $scope.user.link = $location.url();
             polls.save($scope.user,function()
             {
                 $location.url('/home');
             });*/



            if ($location.search().from === undefined){ // Testujeme ci mame nejake parametre v URL
                data.link = '/home';
            }
            else{
                data.link = $location.search().from;
            }

            /*--HTTP VARIANT--*/
            $http.post('/auth/',
                data
                ).success(function()
                {

                    $location.url(data.link);

                }).error(function(data,status)
                {
                    if (status == 401)
                    {
                        alert("Neplatne meno alebo heslo!");
                    }
                });
        };


    }

]);

}(angular.module("T-Res-App.login", [
    'firebase',
    'ui.router',
    "ngResource"
])));