import React, {useState} from 'react';

const Header = (props) => {

    // const [username, setUsername] = useState('');

    // if(!data){
    //     setUsername('Admin')
    // }
    // else{
    //     setUsername(data.name)
    // }
    // ^ commented out because calling setUsername during render
    //   (not inside an event handler/useEffect) causes React to
    //   re-render in a loop.

    // Instead, just compute the value directly on each render:
    const username = props.data ? props.data.name : 'Admin'

    const logOutUser = () => {
        localStorage.setItem('loggedInUser', '')
        // window.location.reload()
        props.changeUser('')
    }
    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-semibold'> Hello <br/> <span className='text-3xl'>{username} 👋</span> </h1>
            <button 
            onClick={logOutUser}
            className='bg-red-600 hover:bg-red-800 text-lg font-medium text-white px-5 py-2 rounded-small'> Logout</button>
        </div>
    );
}

export default Header;