/**
 * Created by josephmin on 9/13/14.
 */
angular.module('webapp', [])
    .controller('MovieController', ['$scope', function($scope) {
        $scope.switchMovie = function() {
            $scope.newMovie = '<img ng-click="switchMovie()" ng-model="poster" class="poster-image" src="images/poster2.png"/>';
        };
    }]);