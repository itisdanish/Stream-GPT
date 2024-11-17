const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-12'>
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div>
        <button className='py-3 px-10 text-white bg-slate-400 rounded-lg bg-opacity-50'>
          ▶ Play
        </button>
        <button className='mx-2 py-3 px-10 text-white bg-slate-400 rounded-lg bg-opacity-50'>
          More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
