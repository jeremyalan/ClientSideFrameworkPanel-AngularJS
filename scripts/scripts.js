angular.module('app', [])

   .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.samples = [
         {
            Name: 'starter-pack',
            DisplayText: 'Starter Pack'
         }
      ];

      $scope.select = function (sample) {
         $scope.selectedSample = sample;
      };

      $scope.select($scope.samples[0]);
   }]);