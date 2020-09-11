
 const currentmovies = () => {
   axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=da460864370ee1cda939342b90a2d9d6&language=en-US&page=1')
   .then(response => {
     var print = ``;
     var data = response.data.results;
     const images = 'https://image.tmdb.org/t/p/w500';
     const searchMovies = document.getElementById('movie-callback');
     console.log(data);
     const section = document.createElement("section");

     data.forEach((item, i) => {
       print +=`
      <div class = "section">
       <img src = ${images + item.poster_path}>
         
      </div>
       `;    
 })
 searchMovies.innerHTML = print;
 })
}


 const upcoming = () =>{
  axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=da460864370ee1cda939342b90a2d9d6&language=en-US&page=1')
  .then(response => {
    var print = ``;
    var data = response.data.results;
    const images = 'https://image.tmdb.org/t/p/w500';
    const searchMovies = document.getElementById('upcoming');
    console.log(data);
    data.forEach((items, i) => {
      print +=`
     <div class = "sectionTwo">
      <img src = ${images + items.poster_path}>
        
     </div>
      `;
})
searchMovies.innerHTML = print;
})
   }


   const popular = () =>{
    axios.get('https://api.themoviedb.org/3/movie/popular?api_key=da460864370ee1cda939342b90a2d9d6&language=en-US&page=1')
    .then(response => {
      var print = ``;
      var data = response.data.results;
      const images = 'https://image.tmdb.org/t/p/w500';
      const searchMovies = document.getElementById('popular');
      console.log(data);
      data.forEach((items, i) => {
        print +=`
       <div class = "sectionThree">
        <img src = ${images + items.poster_path}>
          
       </div>
        `;
  })
  searchMovies.innerHTML = print;
  })
     }
   

   currentmovies();
   upcoming(); 
   popular();
