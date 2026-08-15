import React,{useContext} from 'react';
import {AuthContext} from '../../context/AuthProvider'

const AllTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    return (
        <div className='bg-[#1c1c1c] mt-5 rounded p-5 '>
            <div className='bg-red-400 mb-2 flex justify-between rounded py-2 px-4'>
                        <h2 className='w-1/5 text=lg font-medium '>Employee Name</h2>
                        <h3 className='w-1/5 text=lg font-medium '>New Task</h3>
                        <h5 className='w-1/5 text=lg font-medium '>Active</h5>
                        <h5 className='w-1/5 text=lg font-medium '>Completed</h5>
                        <h5 className='w-1/5 text=lg font-medium '>Failed</h5>
            </div>


            <div className=''>
                {userData.map(function(elem, idx){
                return  <div key={idx} className='border-2 border-emerald-500 mb-2 flex justify-between rounded py-2 px-4'>
                        <h2 className='w-1/5 text=lg font-medium '>{elem.name}</h2>
                        <h3 className='w-1/5 text=lg font-medium text-blue-600'>{`${elem.taskNumber.newTask} New Tasks`}</h3>
                        <h5 className='w-1/5 text=lg font-medium text-yellow-400'>{`${elem.taskNumber.active} Active Tasks`}</h5>
                        <h5 className='w-1/5 text=lg font-medium text-purple-400'>{`${elem.taskNumber.completed} Completed Tasks`}</h5>
                        <h5 className='w-1/5 text=lg font-medium text-red-400'>{`${elem.taskNumber.failed} Failed Tasks`}</h5>
                        </div>
            
                })}
            
            </div>
        </div>
);
}

export default AllTask;
