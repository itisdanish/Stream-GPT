const VideoTitle = ({ title, overview }) => {
  return (
    <div className='absolute bottom-20 left-16 text-white'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='mt-4 text-lg max-w-xl'>{overview}</p>
      <div className='mt-8'>
        <button className='py-3 px-10 text-black bg-white rounded-md hover:bg-gray-300 transition'>
          ▶ Play
        </button>
        <button className='ml-4 py-3 px-10 text-white bg-gray-700 bg-opacity-50 rounded-md hover:bg-gray-600 transition'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
