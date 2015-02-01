angular.module('Kikets', [])

.controller('loginCtrl', function($scope) {
    console.log('hello');
    $scope.name = 'Misha';
    $scope.boolean1 = false;

    $scope.listme = [
    '1',
    '2',
    '3',
    '4'
    ];


    $scope.buttonClick = function () {
      $scope.name='Rishab';
      $scope.boolean1 = !($scope.boolean1);
    }
});