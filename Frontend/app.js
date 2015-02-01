angular.module('Kikets', [])

.controller('bodyCtrl', function($scope) {

$scope.boolLogin = false;
$scope.boolSignUp = true;
$scope.boolBttn = true;
$scope.boolFriends = true;
$scope.boolSend = true;

 $scope.loginClick = function () {
      $scope.boolLogin = true;
      $scope.boolBttn = false;
    }

$scope.SignUpClick = function () {
      $scope.boolSignUp = false;
      $scope.boolLogin = true;
    }

$scope.SignUpFinish = function () {
      $scope.boolSignUp = true;
      $scope.boolLogin = false;
    }

$scope.NewKiket = function () {
      $scope.boolBttn = true;
      $scope.boolSend = false;
    }

$scope.AddFriends = function () {
      $scope.boolBttn = true;
      $scope.boolFriends = false;
    }

$scope.SubmitFriends = function () {
      $scope.boolBttn = false;
      $scope.boolFriends = true;
    }

$scope.SubmitSend = function () {
      $scope.boolBttn = false;
      $scope.boolSend = true;
    }


});










/*.controller('loginCtrl', function($scope) {
    



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

.controller('signupCtrl')*/