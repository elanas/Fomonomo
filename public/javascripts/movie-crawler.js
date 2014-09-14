/**
 * Created by josephmin on 9/13/14.
 */


var apikey = "up3wv3uvufs74w5yqh2tdpza";
var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0";
// construct the uri with our apikey
var moviesSearchUrl = baseUrl + '/movies.json?apikey=' + apikey;
var current;
var indexPop = 0;
var indexAct = 0;
var indexAni = 0;
var indexCom = 0;
var indexRom = 0;
var allJSONIndex = 0;

var favorites = [];
var popular = ["Boyhood", "Up", "The Dark Knight", "Her", "Ferris Bueller's Day Off", "The Silence of the Lambs", "Schindler's List", "Marvel's The Avengers", "The Good, the Bad and the Ugly", "Guardians of the Galaxy"];
var action = ["Lawrence of Arabia", "The Hurt Locker", "Aliens", "Crouching Tiger, Hidden Dragon", "Jurassic Park"];
var animated = ["WALL-E", "The Iron Giant", "Spirited Away", "Kung Fu Panda", "The Adventures of Tintin", "Monsters, Inc."];
var comedy = ["Monty Python and the Holy Grail", "Airplane!", "The LEGO Movie", "The Grand Budapest Hotel", "Super Troopers"];
var romance = ["Casablanca", "Sleepless in Seattle", "The Artist", "Titanic", "A Walk to Remember"];

var all = [popular, action, animated, comedy, romance];
var popJSON = [];
var actJSON = [];
var aniJSON = [];
var comJSON = [];
var romJSON = [];
var allJSON = [popJSON, actJSON, aniJSON, comJSON, romJSON];

$(document).ready(function() {
    // send off the query
    current = popular[0];
    $.ajax({
    url: moviesSearchUrl + '&q=' + encodeURI(current),
    dataType: "jsonp",
    success: searchCallback
    });
});
// callback for when we get back the results
function searchCallback(data) {
    var movies = data.movies;
    var movie = $(movies).first()[0];
    popJSON.push(movie);
    $("div.movie-title").text(popJSON[0].title);
    $("img.poster-image").attr("src", popJSON[0].posters.detailed.toString().substring(0, popJSON[0].posters.detailed.toString().length - 7) + "ori.jpg");
    $("div.movie-rating2").text(popJSON[0].ratings.critics_score + "%");
}


all.forEach(function(genre) {
    genre.forEach(function(title) {
        $(document).ready(function() {
            // send off the query
            $.ajax({
                url: moviesSearchUrl + '&q=' + encodeURI(title),
                dataType: "jsonp",
                success: searchCallback
            });
        });
        // callback for when we get back the results
        function searchCallback(data) {
            var movies = data.movies;
            var movie = $(movies).first()[0];
            switch (genre) {
                case popular:
                    popJSON.push(movie);
                    break;
                case action:
                    actJSON.push(movie);
                    break;
                case animated:
                    aniJSON.push(movie);
                    break;
                case comedy:
                    comJSON.push(movie);
                    break;
                case romance:
                    romJSON.push(movie);
                    break;
                default:
                    break;
            }
        }
    });
});