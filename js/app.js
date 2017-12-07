(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('MyFirstController', LCController);

LCController.$inject = ['$scope']

function LCController($scope){
  var lastValue = "";
  $scope.textInput = "";
  $scope.placeholder = "list comma separated dishes you usually have for lunch"
  $scope.outputMessage = "";
  $scope.mistakeStatus = "muted";
  $scope.messageColor = "white";
  $scope.clearMessage = function(){
    if($scope.textInput != lastValue){
        $scope.outputMessage = "";
        $scope.messageColor = "white"
    }
  }

  $scope.checkLunch = function(){
    $scope.mistakeStatus = "muted"
    lastValue = $scope.textInput;
    if($scope.textInput == ""){

      $scope.outputMessage = "Please enter data first";

      $scope.messageColor = "red";

    }else{
      var count = 0;
      var items = $scope.textInput.split(",");
      for(var i = 0; i < items.length; i++){
        if(items[i].trim().length != 0){
          count++;
        }else{
          $scope.mistakeStatus = "danger"
        }
      }

      if(count < 4){
        $scope.outputMessage = "Enjoy!";
      }else{
        $scope.outputMessage = "Too Much!";
      }

      $scope.messageColor = "green";

    }

  }

}


})();
