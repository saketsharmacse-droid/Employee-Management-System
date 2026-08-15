import React from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import AddEmployee from '../other/AddEmployee';

const AdminDashboard = (props) => {
    return (
        <div className='h-screen p-7 w-full'>
            <Header changeUser={props.changeUser}/>

            <AddEmployee/>
            <CreateTask/>
            <AllTask/>

            
        </div>
    );
}

export default AdminDashboard;
