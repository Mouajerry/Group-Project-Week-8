
$.ajax({
   url: 'https://api-gate2.movieglu.com/filmsNowShowing/?n=10',
   method: "GET",
   headers: {
       "client": "MOVI_37",
       "x-api-key": "cFx9t6rLTOa7PJuzXlQa138h5SP8rMgb6QZzjYYi",
       "Authorization": "Basic TU9WSV8zNzphSDdVeU5zYUF5WE8=",
       "api-version": "v200",
       "Geolocation": "38.90;-94.82",
       "territory": "US",
       "device-datetime": "2019-04-05T08:30:17.360Z"
   }

}).then(function (response) {
   renderButtons(response);
   console.log(response.films[0].age_rating[0].rating);
   console.log(response.films[0].images.poster[1].medium.film_image);
   console.log(response);

   for (var i = 0; i < response.films.length; i++) {
       var filmName = response.films[i].film_name;
       var filmImage = response.films[i].images.poster[1].medium.film_image;
       var filmRating = response.films[i].age_rating[0].rating;
       var filmTrailer = response.films[i].film_trailer;

       var image = $("<img>").attr("src", filmImage);
       var trailerButton = $("<a>")

       trailerButton.attr("href", filmTrailer);
       trailerButton.text("Movie Trailer");

       filmDiv = $("<div class='filmsShowing'>");
       filmDiv.text(filmName);
       var singleMovieDiv = $("<div>");

       singleMovieDiv.append(filmDiv, "Rating: " + filmRating, trailerButton);
       $("#movies-view").append(singleMovieDiv);
       $("#poster-view").append(image)
   }

});


function renderButtons(response) {


   $("#buttons-view").empty();

   for (var i = 0; i < response.films.length; i++) {
       var movieTitle = $("<button>");
       console.log(i);
       movieTitle.addClass("movie-btn");
       movieTitle.attr("data-name", response.films[i].film_name);
       movieTitle.text(response.films[i].film_name);
       $("#buttons-view").append(movieTitle);
   }
}