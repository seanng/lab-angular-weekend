angular.module("TenSecondMathApp", []).controller('GameController', ['$scope', function($scope){
  $scope.points = 0;
  $scope.solutioninput = '';
  $scope.secondsLeft = 10;

  $scope.num1 = Math.random();
  $scope.num2 = Math.random();

  $scope.checkAnswer = function(){
    if ($scope.solutioninput === ($scope.num1 + $scope.num2)){
      $scope.correctAnswer();
    }
  };

  $scope.correctAnswer = function() {
    $scope.num1 = Math.random();
    $scope.num2 = Math.random();
    $scope.secondsLeft++;
    $scope.solutioninput = '';
  };

  $scope.startGame = function() {
    $scope.points = 0;
    $scope.secondsLeft = 10;
  };

  //Set Interval, check if time === 0 every second.


}]);