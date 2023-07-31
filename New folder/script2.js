const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=b4a603c6d5278ac724dd401f79c011e9&page=1';
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=b4a603c6d5278ac724dd401f79c011e9&query=";

const wrapper = document.getElementById("wrapper");
// const form = document.getElementById("form");
// const search = document.getElementById("search");

showMovies(apiUrl);
function showMovies(url){
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = IMGPATH + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        wrapper.appendChild(el);
    }); 
});
}


// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     wrapper.innerHTML = '';
     
//     const searchTerm = search.value;

//     if (searchTerm) {
//         showMovies(SEARCHAPI + searchTerm);
//         search.value = "";
//     }
// });