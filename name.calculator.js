(function (){
    'use strict'

    angular.module('NameCalculator',[])
        .controller('NameCalculatorController', function($scope){
            $scope.name = "";
            $scope.totalValue = 0;

            $scope.displayNumber = function(){
                $scope.totalValue = calculateNumericForString($scope.name);
            };

            function calculateNumericForString(string){
                var value = 0;
                for (var i=0;i<string.length;i++){
                    value += string.charCodeAt(i); 
                }
                return value;
            }

        });

})();