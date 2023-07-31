var api_key = "b4a603c6d5278ac724dd401f79c011e9"; //TODO insert your unique API KEY here
var api_url = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key;
$.getJSON( api_url, function( data ) {

  $.each( data.results, function( i, item ) {
    var posterFullUrl = "https://image.tmdb.org/t/p/w185//" + item.poster_path;
    
    // $(`<div class='col-3 mb-1'><img src='` + posterFullUrl + `'><h5>` + item.title + `</h5></div>`).appendTo(".wrapper");
    $(`<div class="cards3">
  <div class="poster">
    <img src="` + posterFullUrl + `"alt="` + item.title + `"></div>
  <div class="details" style="font-size: 16px ;">
    <h1>` + item.title + `</h1>
    <h2>2017 • TV-MA • TV Series</h2>
    <div class="rating">
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="fas fa-star"></i>
      <i class="far fa-star"></i>
      <span>4.4/5</span>
    </div>
    <div class="tags">
      <span class="tag">Crime</span>
      <span class="tag">Drama</span>
      <span class="tag">Mystery</span>
    </div>
    <p class="desc">
      A family saga with a supernatural twist, set in a German town where the disappearance of two young
      children exposes the relationships among four families.
    </p>

  </div>
</div>`).appendTo(".wrapper");
  });
});