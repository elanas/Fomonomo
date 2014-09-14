/**
 * Created by acole9 on 9/14/14.
 */
/**
 * Created by elanastroud on 9/13/14.
 */

var databaseUrl = "db"; // "username:password@example.com/mydb"
var collections = ["movies"]
var db = require("mongojs").connect(databaseUrl, collections);



var saveMovie = function(m) {
    db['movies'].insert({_id: m.id, info: m});
}

var getRandomPoster = function() {
    db['movies'].findOne();
}

var arr = [];
var count = 0;
console.log("do i run");
exports.getAsArray = function() {
    db['movies'].find({}, function(err, cursor){
        cursor.forEach(function(obj) {
           arr.push(obj);
        })
        return arr;
    });
}

getAsArray();
//setTimeout(function() {console.log(arr)}, 5000);


//var m = {"total":1,"movies":[{"id":"12631","title":"Sleepless in Seattle","year":1993,"mpaa_rating":"PG","runtime":105,"release_dates":{"theater":"1993-06-25","dvd":"1997-06-26"},"ratings":{"critics_rating":"Fresh","critics_score":72,"audience_rating":"Upright","audience_score":75},"synopsis":"","posters":{"thumbnail":"http://content7.flixster.com/movie/11/12/06/11120641_tmb.jpg","profile":"http://content7.flixster.com/movie/11/12/06/11120641_tmb.jpg","detailed":"http://content7.flixster.com/movie/11/12/06/11120641_tmb.jpg","original":"http://content7.flixster.com/movie/11/12/06/11120641_tmb.jpg"},"abridged_cast":[{"name":"Tom Hanks","id":"162655641","characters""Sam Baldwin"]},{"name":"Meg Ryan","id":"162658412","characters""Annie Reed"]},{"name":"Bill Pullman","id":"162654131","characters""Walter"]},{"name":"Ross Malinger","id":"439092309","characters""Jonah Baldwin"]},{"name":"Rosie O'Donnell","id":"162670098","characters""Becky"]}],"alternate_ids":{"imdb":"0108160"},"links":{"self":"http://api.rottentomatoes.com/api/public/v1.0/movies/12631.json","alternate":"http://www.rottentomatoes.com/m/sleepless_in_seattle/","cast":"http://api.rottentomatoes.com/api/public/v1.0/movies/12631/cast.json","reviews":"http://api.rottentomatoes.com/api/public/v1.0/movies/12631/reviews.json","similar":"http://api.rottentomatoes.com/api/public/v1.0/movies/12631/similar.json"}}],"links":{"self":"http://api.rottentomatoes.com/api/public/v1.0/movies.json?q=Sleepless+in+Seattle&page_limit=30&page=1"},"link_template":"http://api.rottentomatoes.com/api/public/v1.0/movies.json?q={search-term}&page_limit={results-per-page}&page={page-number}"};

//exports.loadDatabase = loadDatabase;
exports.saveMovie = saveMovie;
//exports.m = m;