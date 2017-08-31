(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchChecker);

    LunchChecker.$inject = ['$scope'];
    
    function LunchChecker($scope) {
        console.log("We are in Controller!");

        $scope.message = "";
        $scope.count = 0;
        $scope.values = "";

        $scope.checkCount = function () {
            if ($scope.values != "") {
                var array = $scope.values.split(',');
                console.log(array);

                for(var i=0;i<array.length;i++){
                    if(array[i].replace(/\s/g, '').length){
                        $scope.count++;
                    }
                    console.log(array[i]);
                }

                console.log($scope.count);
            }
            else {
                $scope.count = 0;
                console.log("No value Entered");
            }
        };

        $scope.checkLunch = function () {
            $scope.count = 0;

            $scope.checkCount();

            if ($scope.count > 0) {
                if ($scope.count < 4) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            } else {
                $scope.message = 'Please enter data first';
            }
        };
    }

    console.log("We are in js!");

})();
