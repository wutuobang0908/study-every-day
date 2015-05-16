/**
 * Created by Administrator on 2015/5/16.
 */
var app = angular.module('myApp',[]);
app.controller('MyController',function($scope , $timeout){
   $scope.counter = 0;
    $scope.add = function(amount){
        $scope.counter += amount;
    };
    $scope.subtract = function(amount){
        $scope.counter += amount;
    };
});