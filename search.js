document.getElementById('movie-button').addEventListener('click', () => {
  const apiKey = 'da460864370ee1cda939342b90a2d9d6';
  const searchBar = document.getElementById('searchbar').value;
  const search = document.getElementById('movie-callback');
  const searchtitle = document.getElementById('movie-title')
  // const new = document.getElementById('new-movie');
  const images = 'https://image.tmdb.org/t/p/w500';
  console.log(searchBar);




getsearchMovies = () =>{
axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=en-US&query='+ searchBar +'&page=1&include_adult=false')

.then(response => {
  var print = ``;
  // var section = document.createElement('div');
  // section.setAttribute('class', 'movies');
  var data = response.data.results;
  console.log(data);
  data.forEach((item, i) => {
    if(item.poster_path){
    print +=`
   <div class = "section">
    <img src = ${images + item.poster_path}>
      <p class = "title">
      <h3> ${item.original_title} </h3>
      <h3> ${item.release_date} </h3>
      <div class = "content">
       </div>
   </div>
    `;
search.innerHTML = print;
return search;
    }
  });
})

.catch(error => console.error(error));

}






getsearchMovies();






})



document.onclick = (event) =>{
  const target = event.target;

  if(target.tagName.toLowerCase() === 'img'){
    console.log('found you nigga');
    const section = event.target.parentElement;
    const content = section.nextElementSibling;
    content.classList.add('content-display');

  }

}
