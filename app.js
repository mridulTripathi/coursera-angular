(function () {
  'use strict';

  var x = 'hello';

  angular.module('myFirstApp',[])
    .controller('MyFirstController', function($scope){
        $scope.name = 'Mridul';
        $scope.sayHello = function () {
          return "Coursera";
        };
    });

})();
