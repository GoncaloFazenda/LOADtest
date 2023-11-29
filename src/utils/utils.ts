// ---------------------- TMDB API info ----------------------
// Experienced problems setting up .env file with react-native-dotenv lib, so I just hardcoded the values here.
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZDlmMjBmZTZiYjhhZjIwYzdkZTU5YzZiMDc2NjliNCIsInN1YiI6IjY1NjYxN2M0YThiMmNhMDEwYmMxMjVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iB0rwXPf0xmbIqKEL8is74fqltS-rTAtAGUVcvQi-6k';
const TMDB_IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export {TMDB_BASE_URL, TMDB_TOKEN, TMDB_IMG_BASE_URL};
