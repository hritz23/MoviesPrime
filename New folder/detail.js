var api_key = "b4a603c6d5278ac724dd401f79c011e9"; //TODO insert your unique API KEY here
var api_popular = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key+"&page=3";

$.getJSON( api_popular, function( data ) {

    $.each( data.results, function( i, item ) {
      var posterFullUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
      // var date = item.release_date;
      // let year = date.getFullYear();
      // $(`<div class='col-3 mb-1'><img src='` + posterFullUrl + `'><h5>` + item.title + `</h5></div>`).appendTo(".wrapper");
      $(`<div class="cards3">
    <div class="poster">
      <img src="` + posterFullUrl + `"alt="` + item.title + `"></div>
    <div class="details" style="font-size: 16px ;">
      <h1>` + item.title + `</h1>
      <h2>`+ item.release_date.split("-")[0] +`</h2>
      <div class="rating">
        <i class="fas fa-star"></i>
        <span>`+item.vote_average+`</span>
      </div>
      <!--<div class="tags">
        <span class="tag">Crime</span>
        <span class="tag">Drama</span>
        <span class="tag">Mystery</span>
      </div>-->
      <p class="desc">
      ` + item.overview + `
      </p>
  
    </div>
  </div>`).appendTo(".movie");
    });
  });