import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBG from './VideoBG';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies) return null;

  const mainMovie = movies[6];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className='relative h-screen w-full'>
      <VideoBG movieId={id} />
      <div className='absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black via-transparent to-black'>
        <VideoTitle title={original_title} overview={overview} />
      </div>
    </div>
  );
};

export default MainContainer;