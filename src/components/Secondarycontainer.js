import React from 'react';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  return (
    <div className='px-10 py-6'>
      <h2 className='text-2xl text-white font-bold mb-4'>
        Get In On the Action
      </h2>
      <div className='flex space-x-4 overflow-x-scroll scrollbar-hide'>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className='min-w-[200px] relative group cursor-pointer transition-transform duration-300 hover:scale-105'
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='w-full h-full rounded-md'
            />
            <div className='absolute bottom-2 left-2 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded-md'>
              Recently Added
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SecondaryContainer;
