import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        navigate('/error');
      });
  };
  return (
    <div className='fixed top-0 left-0 right-0 flex items-center justify-between px-8 py-4 bg-gradient-to-b from-black via-transparent z-20'>
      {/* Netflix Logo */}
      <img
        className='w-32 object-contain'
        src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'
        alt='Netflix Logo'
      />

      {/* User Profile and Sign Out */}
      <div className='flex items-center space-x-4'>
        <img
          className='w-10 h-10 rounded'
          alt='user'
          src='https://occ-0-6245-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229'
        />
        <button
          className='bg-red-500 py-1 px-2 rounded-md  text-white font-medium hover:underline'
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
