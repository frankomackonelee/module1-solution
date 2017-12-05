(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('MyFirstController', function($scope){
  $scope.textInput = "";
  $scope.placeholder = "list comma separated dishes you usually have for lunch"
  $scope.outputMessage = "";
  var messages = ["just right","not enough", "too much"]
  $scope.checkLunch = function(){
    var items = $scope.textInput.split(",");
    if(items.length < 3){
      $scope.outputMessage = messages[0];
    }else if (items.length == 3) {
      $scope.outputMessage = messages[1];
    }else{
      $scope.outputMessage = messages[2];
    }
  }

});


})();
