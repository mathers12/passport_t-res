(function(app) {

    app.config(function ($stateProvider) {
        $stateProvider.state('seats', {
            url: '/seats',
            views: {
                "main": {
                    controller: 'SeatsController',
                    templateUrl: 'seats/seats.tpl.html'
                }
            },
            data:{ pageTitle: 'Seats' }
        });
    });

    app.controller('SeatsController', function ($scope, $resource) {

        var init = function() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.

            var States = $resource('/api/states');
            $scope.states = States.query({});

            var Rooms = $resource('/api/rooms');
            $scope.rooms = Rooms.query({});

            var Parts = $resource('/api/parts');
            $scope.parts = Parts.query({});

            var Tables = $resource('/api/tables');
            $scope.tables = Tables.query({});

            var Seats = $resource('/api/seats');
            $scope.seats= Seats.query({});
        };

        // modifying Seat
        $scope.SaveSeat = function (seat, changedSeat) {
            console.log("Seat: " + seat.order + "\t Selected state: "+ changedSeat.state.name + "\t Selected table: "+ changedSeat.table.order);
            seat.state = changedSeat.state;
            seat.table = changedSeat.table;
            seat.part = changedSeat.part;
            seat.room = changedSeat.room;
            var Seats = $resource('/api/seats');
            Seats.save(seat);
            $scope.seats = Seats.query({});
        };

        // clean Seat
        $scope.CleanSeat = function (seat) {
            seat.profile._id =  null;
            seat.room = seat.room._id;
            seat.table = seat.table._id;
            seat.part = seat.part._id;
            seat.state = $scope.states[0]._id;
            seat.clean = {profile:false};
            console.log("Seat: " + seat.order + '\t set a State: '+ $scope.states[0].name);
            var Seats = $resource('/api/seats');
            Seats.save(seat);
            $scope.seats = Seats.query({});
        };

        // delete Seat
        $scope.DeleteSeat = function (seat) {
            console.log("Seat: " + seat.order);
            var Seat = $resource('/api/seats/:id'),
                Seats = $resource('/api/seats');
            Seat.delete({id: seat._id});
            $scope.seats = Seats.query({});
        };

        // adding new Seat
        $scope.AddSeat = function (seat) {

            var States = $resource('/api/states');
            var state = States.query({}, function(){
                if (seat === undefined) {
                    seat = {
                        order: $scope.seats.length,
                        state: state[0]._id
                    };
                } else {
                    seat.order = $scope.seats.length;
                    seat.state = state[1]._id;
                }
                console.log("Adding Seat: '" + seat.order + "'\t Selected state: '"+ state[0].name + "'");
                var newSeat = $resource('/api/seats/add');
                newSeat.save(seat);
                var Seats = $resource('/api/seats');
                $scope.seats = Seats.query({}, function (data){
                    $scope.addSeat = undefined;
                    return data;
                });
            });
        };

        init();
    });

}(angular.module("T-Res-App.seats", [
    'ui.router'
])));