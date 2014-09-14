/**
 * Created by josephmin on 9/14/14.
 */
var app = angular.module("webapp", []);

app.controller('webController', function($scope) {
    $scope.selected = {};
    $scope.selected = function (){
        $scope.mItem.style = {"color":"white"};
    }
});