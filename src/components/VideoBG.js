import { useEffect } from 'react';
import { API_OPTION } from '../utils/constants';

const VideoBG = ({ movieId }) => {
  const getMovieVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/912649/videos?language=en-US',
      API_OPTION
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return <div>VideoBG</div>;
};

export default VideoBG;
