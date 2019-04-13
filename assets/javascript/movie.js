
$.ajax({
  url: 'https://api-gate2.movieglu.com/filmsNowShowing/?n=10',
  method: "GET",
  headers: {
      "client": "MOVI_39",
      "x-api-key": "6Qji5lwzQd15MNSfpoUMk5YWSTFQc4ag87PHEITR",
      "Authorization": "Basic TU9WSV8zOTpPcUNCeHJLNGd4Szc=",
      "api-version": "v200",
      "Geolocation": getLocation(),//"38.90;-94.82"(OP, Kansas coordinates)
      "territory": "US",
      "device-datetime": "2019-04-12T08:30:17.360Z"
  }

}).then(function (response) {
  renderButtons(response);
  console.log(response.films[0].age_rating[0].rating);
  console.log(response.films[0].images.poster[1].medium.film_image);
  console.log(response);

   var isActive = false;


  for (var i = 0; i < response.films.length; i++) {
      var filmName = response.films[i].film_name;
      var filmImage = response.films[i].images.poster[1].medium.film_image;
      var filmRating = response.films[i].age_rating[0].rating;
      var filmTrailer = response.films[i].film_trailer;

      var image = $("<img>").attr("src", filmImage);
      var trailerButton = $("<a>")

      trailerButton.attr("href", filmTrailer);
      trailerButton.attr("target", "_blank");
      trailerButton.text("Movie Trailer");

      filmDiv = $("<div class='filmsShowing'>");
      filmDiv.text(filmName);
      var singleMovieDiv = $("<div>");

      singleMovieDiv.append(filmDiv, "Rating: " + filmRating, trailerButton);
      $("#movies-view").append(singleMovieDiv);
      $("#poster-view").append(image)

      //    <div class="carousel-item active" data-interval="10000">
//     <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item" data-interval="2000">
//     <img src="..." class="d-block w-100" alt="...">
//     </div>
//     <div class="carousel-item">
//     <img src="..." class="d-block w-100" alt="...">
//     </div>

      var carouselDiv = $("<div>");
      carouselDiv.addClass("carousel-item");
      carouselDiv.attr("data-interval", "5000");
      if(!isActive){
          carouselDiv.addClass("active");
          isActive = !isActive
      }
      var img = $("<img>");
      var ratingHtml = $("<p>" + "Rating: " + filmRating + "</p>");

      img.attr("src", filmImage);
      img.addClass("d-block w-100");
      carouselDiv.append(img).append(ratingHtml).append(trailerButton);
      console.log(carouselDiv);
      $(".carousel-inner").append(carouselDiv);
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

// Function to obtain current location
function getLocation() {
 navigator.geolocation.getCurrentPosition(function(position) {
    return position.coords.latitude + ";" + position.coords.longitude;
 })
}