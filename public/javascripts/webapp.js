/**
 * Created by elanastroud on 9/13/14.
 */

(function () {

    var app = angular.module("webapp", ['ngAnimate']);

    app.controller('webController', ['$window', '$scope', '$http', '$timeout', function ($window, $scope, $http, $timeout) {

        $scope.showPoster = true;
        $scope.showPlayButton = false;

        var p;
        $(document).ready(function() {
            console.log('running')
            // create youtube player
            var player;
            window.onYouTubePlayerAPIReady = function() {
                player = new YT.Player('player', {
                    height: '100%',
                    width: '100%',
                    videoId: 'Y0oX0xiwOv8',
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        'autohide': 1
                    }
                });
                p = player;
            }

            // autoplay video
            function onPlayerReady(event) {
//                event.target.playVideo();
            }

            // when video ends
            function onPlayerStateChange(event) {
                if(event.data === 0) {
                    p.seekTo(0, true);
                    $scope.hideIframe();

                }
            }
        });

        $scope.showIframe = function() {
            setTimeout(function() {
                $('#player').css('visibility','visible');
                $('.poster').addClass('ng-hide');
                p.playVideo();
            }, 1000);
        }

        $scope.hideIframe = function() {
            if($('#player').css('visibility') == 'hidden') {
                return;
            }
            $('#player').css('visibility','hidden');
            p.stopVideo();
            $scope.showPoster = true;
            $scope.$apply();

        }

    }]);

})();

