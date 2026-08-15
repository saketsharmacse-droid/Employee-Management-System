import React from 'react';

const Header = ({data}) => {
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-semibold'> Hello <br/> <span className='text-3xl'>{data.name} 👋</span> </h1>
            <button className='bg-red-600 hover:bg-red-800 text-lg font-medium text-white px-5 py-2 rounded-small'> Logout</button>
        </div>
    );
}

export default Header;
