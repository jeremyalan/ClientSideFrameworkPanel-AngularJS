angular.module('app', [])

   .controller('MainCtrl', ['$scope', function ($scope) {
      $scope.samples = [
         {
            Name: 'starter-pack',
            DisplayText: 'Starter Pack'
         },
         {
            Name: 'pain-points',
            DisplayText: 'Pain Points'
         },
         {
            Name: 'productivity',
            DisplayText: 'Productivity'
         },
         {
            Name: 'common-scenarios',
            DisplayText: 'Common Scenarios'
         },
         {
            Name: 'getting-started',
            DisplayText: 'Getting Started'
         }
      ];

      $scope.select = function (sample) {
         $scope.selectedSample = sample;
      };

      $scope.select($scope.samples[0]);
   }]);