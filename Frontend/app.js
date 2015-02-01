var apiUri = 'http://104.236.221.213:3000';
angular.module('Kikets', [])

.controller('bodyCtrl',  ['$scope', '$http', function ($scope, $http) {
    $scope.username = '';
    $scope.password = '';
    $scope.fullName = '';
    $scope.user = '';
    $scope.friend = '';
    $scope.title = '';
    $scope.content = '';
    $scope.status = '';

    $scope.boolLogin = false;
    $scope.boolSignUp = true;
    $scope.boolBttn = true;
    $scope.boolFriends = true;
    $scope.boolSend = true;

    $scope.loginClick = function () {
        var loginData = {
        username: $scope.username,
        password: $scope.password
      };
      $http.post(apiUri + '/login', loginData)
        .success(function(data, status) {
          if (status === 200){
            $scope.boolLogin = true;
            $scope.boolBttn = false;
            $http.get(apiUri + '/user/' + $scope.username)
              .success(function(data) {
                $scope.user = data;
              })
              .error(function(err) {
                console.log(err);
              });
          } else {
            $scope.username = '';
            $scope.password = '';
          }
        })
        .error(function(err) {
          $scope.username = '';
          $scope.password = '';
        });    
    }

    $scope.SignUpClick = function () {
          $scope.boolSignUp = false;
          $scope.boolLogin = true;
    }

    $scope.SignUpFinish = function () {
      var signupData = {
        username: $scope.username,
        password: $scope.password,
        fullName: $scope.fullName
      };
      $http.post(apiUri + '/user', signupData)
        .success(function(data, status) {
          $scope.boolSignUp = true;
          $scope.boolLogin = false;
        })
        .error(function(err) {
          console.log(err);
        });  
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
      var addFriendData = {
        username: $scope.username,
        friend: $scope.friend
      };
      $http.post(apiUri + '/addFriend', addFriendData)
        .success(function(data, status) {
          $scope.user = data;
          $scope.boolBttn = false;
          $scope.boolFriends = true;
        })
        .error(function(err) {
          console.log(err);
        });       
    }

    $scope.SubmitSend = function () {
      var ticketData = {
        username: $scope.username,
        title: $scope.title,
        content: $scope.content,
        friend: $scope.friend
      };
      $http.post(apiUri + '/ticket/create', ticketData)
        .success(function(data, status) {
          $scope.user = data;
          $scope.boolBttn = false;
          $scope.boolSend = true;
          })
        .error(function(err) {
          console.log(err);
        }); 
    }

    $scope.updateTicket = function (ticketTitle) {
      var updateData = {
        username: $scope.username,
        title: ticketTitle,
        status: 'done'
      };
      $http.post(apiUri + '/ticket/update', updateData)
        .success(function(data, status) {
          $scope.user = data;
        })
        .error(function(err) {
          console.log(err);
        });
    }


}]);










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
