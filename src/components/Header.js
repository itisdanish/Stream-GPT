import React from 'react';

const Header = () => {
  return (
    <div className='absolute top-0 left-0 right-0 px-8 py-2 bg-gradient-to-b from-black z-20'>
      <img
        className='w-40 m-5'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='logo'
      />
    </div>
  );
};

export default Header;
