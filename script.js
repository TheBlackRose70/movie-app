//Author Andre' Dixon

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ba790d12ef47e907c483d2add57e3fa7&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=ba790d12ef47e907c483d2add57e3fa7&query="'

const main = document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

// Get initial movies
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview} = movie

    const movieEl = document.createElement
    ('div')
    movieEl.classList.add('movie')
    movieEl.innerHTML = `
    <div class="movie">
      <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="">
      <div class="movie-info">
        <h3>Movie Title</h3>
          <span class="green">9.8</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Aliquid itaque eius repellendus vel aperiam iure id aspernatur 
        labore ad iste.
      </div>
    </div>
    `
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if(searchTerm && searchTerm !== '') {
      getMovies(SEARCH_API + searchTerm)

      search.value = ''
  } else {
      window.location.reload()
  }
})