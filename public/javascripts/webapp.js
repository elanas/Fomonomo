/**
 * Created by elanastroud on 9/13/14.
 */

var test;

(function () {

    var app = angular.module("webapp", ['ngAnimate']);

    app.controller('webController', ['$window', '$scope', '$http', '$timeout', function ($window, $scope, $http, $timeout) {

        $scope.showPoster = true;
        $scope.showPlayButton = false;
        $scope.dim = true;
//
//        $scope.posters = [
//            {img: 'images/poster.png', score: "93", title: "Gamer"},
//            {img: 'images/poster1.png', score: "99", title: "Boyhood"},
//            {img: 'images/eurotrip.png', score: "77", title: "Eurotrip"}];

        console.log(MOVIEARR);

        var imgStr = 'posters[original]';
        var rating = 'ratings[critics_score]';

        var getImgUrl = function(orig) {
            var str = orig.substring(0,orig.length-7) + 'ori.jpg';
            return str;
        }

        var makePosterObject = function(i) {
            return {img: getImgUrl(MOVIEARR[i].info[imgStr]), score: MOVIEARR[i].info[rating], title: MOVIEARR[i].info.title};
        }

        $scope.posters = [
            makePosterObject(0), makePosterObject(1),makePosterObject(2)];



//        console.log(JSON.stringify({img: MOVIEARR[0].info.posters['original'], score: MOVIEARR[0].info.ratings.critics_score, title: MOVIEARR[0].info.title}));


        $scope.index = 0;

        var count = 0;
        $scope.nextPoster = function() {
            count ++;
            $scope.posters[$scope.index - 1] = makePosterObject($scope.index + count);
            $scope.index = ($scope.index + 1)% $scope.posters.length;

        }

//        this.test = $scope.nextPoster();

        $scope.prevPoster = function() {
            if($scope.index == 0) {
                $scope.index = $scope.posters.length-1;
            } else {
                $scope.index = ($scope.index - 1);
            }
        }

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

//        console.log(JSON.stringify(MOVIEARR[0]));
//        console.log('what the fuck');

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

        $(document).keydown(function(e) {
        console.log(e.keyCode);
            if(e.keyCode === 37) {
                $scope.prevPoster();
                $scope.$apply();
            }
            if(e.keyCode === 39) {
                $scope.nextPoster();
                $scope.$apply();

            }
        });

    }]);




})();

