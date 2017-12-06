(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('MyFirstController', function($scope){
  var lastValue = "";
  $scope.textInput = "";
  $scope.placeholder = "list comma separated dishes you usually have for lunch"
  $scope.outputMessage = "";
  $scope.mistakeStatus = "muted"
  $scope.clearMessage = function(){
    if($scope.textInput != lastValue){
        $scope.outputMessage = "";
    }
  }

  $scope.checkLunch = function(){
    $scope.mistakeStatus = "muted"
    lastValue = $scope.textInput;
    if($scope.textInput == ""){

      $scope.outputMessage = "Please enter data first";

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

    }

  }

});


})();
