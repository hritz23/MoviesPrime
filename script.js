const slider = document.querySelector('.container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;
    
    slider.scrollLeft = scrollLeft - walk;
});



const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


function App() {}

window.onload = function (event) {
    var app = new App();
    window.app = app;
};
App.prototype.processingButton1 = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#gal');
    const slick = track.querySelectorAll('.card');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}
App.prototype.processingButton = function(event) {
    const btn = event.currentTarget;
    const slickList = event.currentTarget.parentNode;
    const track = event.currentTarget.parentNode.querySelector('#track');
    const slick = track.querySelectorAll('.slick');

    const slickWidth = slick[0].offsetWidth;
    
    const trackWidth = track.offsetWidth;
    const listWidth = slickList.offsetWidth;

    track.style.left == ""  ? leftPosition = track.style.left = 0 : leftPosition = parseFloat(track.style.left.slice(0, -2) * -1);

    btn.dataset.button == "button-prev" ? prevAction(leftPosition,slickWidth,track) : nextAction(leftPosition,trackWidth,listWidth,slickWidth,track)
}

let prevAction = (leftPosition,slickWidth,track) => {
    if(leftPosition > 0) {
        console.log("entro 2")
        track.style.left = `${-1 * (leftPosition - slickWidth)}px`;
    }
}

let nextAction = (leftPosition,trackWidth,listWidth,slickWidth,track) => {
    if(leftPosition < (trackWidth - listWidth)) {
        track.style.left = `${-1 * (leftPosition + slickWidth)}px`;
    }
}




// api





var api_key = "b4a603c6d5278ac724dd401f79c011e9"; //TODO insert your unique API KEY here
var api_popular = "https://api.themoviedb.org/3/movie/popular?api_key=" + api_key+"&page=3";
var api_nowplaying = "https://api.themoviedb.org/3/movie/now_playing?api_key=" + api_key+"&page=2";
var api_upcoming = "https://api.themoviedb.org/3/movie/upcoming?api_key=" + api_key+"language=en-US&page=1";

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
</div>`).appendTo(".wrapper");
  });
});


$.getJSON( api_nowplaying, function( data ) {

    $.each( data.results, function( i, item ) {
      var posterFullUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
      
      // $(`<div class='col-3 mb-1'><img src='` + posterFullUrl + `'><h5>` + item.title + `</h5></div>`).appendTo(".wrapper");
      $(`<div class="slick">
      <div class="cards2">
      <div class="poster"><img
          src="` + posterFullUrl + `" alt="` + item.title + `"></div>
      <div class="details">
        <h1>` + item.title + `</h1>
        <h2>2016 • TV-14 • TV Series</h2>
        <div class="rating">
          <i class="fas fa-star"></i>
          <span>`+item.vote_average+`</span>
        </div>
        <div class="tags">
          <span class="tag yellow">Horror</span>
          <span class="tag">Fantasy</span>
          <span class="tag blue">Drama</span>
        </div>
        <p class="desc">
        ` + item.overview + `
        </p>

      </div>
    </div>
    </div>`).appendTo("#track");
    });
  });



  $.getJSON( api_nowplaying, function( data ) {

    $.each( data.results, function( i, item ) {
      var posterFullUrl = "https://image.tmdb.org/t/p/w500" + item.poster_path;
      var backdrop = "https://image.tmdb.org/t/p/w500" + item.backdrop_path;
      
      // $(`<div class='col-3 mb-1'><img src='` + posterFullUrl + `'><h5>` + item.title + `</h5></div>`).appendTo(".wrapper");
      $(`<article class="card">
      <a onclick="movieSelected(`+item.id+`)">
      <figure>
          <img
              src="` + posterFullUrl + `"
              alt="Preview"
              title="Preview"
          />
          <img src="`+ backdrop +`" class="img-top" />
      </figure></a>
  </article>`).appendTo("#gallery");
    });
  });



  function movieSelected(id){
    sessionStorage.setItem("movieId", id);
    location.replace("movie-page.html");
    return false;
}

