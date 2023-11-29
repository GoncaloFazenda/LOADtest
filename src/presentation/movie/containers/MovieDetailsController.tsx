import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import MovieDetailsScreen from './MovieDetailsScreen';
import Movie from '../../../services/entities/Movie';
import {getGenreByIdThunk} from '../../../services/thunks/MovieThunks';
import GenreResponse from '../../../services/responses/GenreResponse';

type Props = {
  navigation: any;
  route: any;
};

export default function MovieDetailsController(props: Props) {
  const [overview, setOverview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);
  const [genres, setGenres] = useState<GenreResponse[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isloading, setisLoading] = useState<boolean>(true);
  const [checked, setToggleChecked] = useState<boolean>(false);

  const {movieData} = props.route.params as {movieData: Movie};

  async function getGenres(genre_ids: number[]) {
    setisLoading(true);
    let [genres, error] = await getGenreByIdThunk(genre_ids);
    if (genres) setGenres(genres);
    else if (error) setErrorMessage(error.message);
    setisLoading(false);
  }

  useEffect(() => {
    // setting rating to only one decimal place
    let rating = Math.round(movieData.vote_average * 10) / 10;
    setRating(rating);
    setOverview(movieData.overview);
    getGenres(movieData.genre_ids);
  }, []);
  return (
    <MovieDetailsScreen
      overview={overview}
      rating={rating}
      genres={genres}
      errorMessage={errorMessage}
      isLoading={isloading}
      setToggleChecked={() => setToggleChecked(!checked)}
      checked={checked}
    />
  );
}
