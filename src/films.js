// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result = movies.map(movies => movies.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const moviesBydirector = movies.filter(movie => movie.director === director);
  return moviesBydirector
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  const directorMovies = movies.filter(movie => movie.director === director);
  const sumScore = directorMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);
  const averageScore = sumScore / directorMovies.length;
  return parseFloat(averageScore.toFixed(2));

}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const moviesCopy = movies.slice();
  const sortedMovies = moviesCopy.sort((a, b) => {
    if (a.title && b.title) {
      return a.title.localeCompare(b.title);
    } else {
      return 0;
    }
  });

  const titles = sortedMovies.slice(0, 20).map(movie => movie.title);
  return titles;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  const sortedMovies = movies.slice();
  sortedMovies.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return sortedMovies;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {
  const genreMovies = movies.filter(movie => movie.genre.includes(genre));
  if (genreMovies.length === 0) {
    return 0;
  } else {
    const totalScore = genreMovies.reduce((accumulator, movie) => accumulator + movie.score, 0);
    return totalScore / genreMovies.length;
  }
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  const durArray = movies.filter(movie => movie.duration);

  const moviesWithDurationAsNumber = [];

  durArray.forEach(movie => {
    const duration = movie.duration;
    const parts = duration.split(' ');
    let hours = 0;
    let minutes = 0;
    
    parts.forEach(function (part) {
      if (part.includes('h')) {
        hours = parseInt(part);
      } else if (part.includes('min')) {
        minutes = parseInt(part);
      }
    });
     const totalMinutes = hours * 60 + minutes;

     
     moviesWithDurationAsNumber.push({...movie, duration: totalMinutes});
  });
  
  return moviesWithDurationAsNumber;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {

}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
