(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider.state('register', {
            url: '/register',
            views: {
                "main": {
                    controller: 'RegisterController',
                    templateUrl: 'register/register.tpl.html'
                }
            },
            data:{ pageTitle: 'Register' }
        });
    });

    app.controller('RegisterController', function ($scope) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        };

        init();
    });

}(angular.module("T-Res-App.register", [
    'ui.router'
])));