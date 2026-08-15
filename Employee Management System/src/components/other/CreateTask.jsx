import React, {useState, useContext} from 'react';
import {AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)
    

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    // const [newTask, setNewTask] = useState({});


    const submitHandler = (e) => {
        e.preventDefault()

        // setNewTask({taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false})

        // const data = userData
        // data.forEach(function(elem){
        //     if(assignTo == elem.name){
        //         elem.tasks.push(newTask)
        //         elem.taskNumber.newTask += 1
        //         // console.log(elem)

        const taskToAdd = {taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false}

        // BUG: `data` was just a reference to `userData`, and forEach mutated
        // the same array/objects in place. setUserData(data) then received the
        // SAME reference as before, so React saw no change and skipped re-render.
        // const data = userData
        // data.forEach(function(elem){
        //     if(assignTo == elem.name){
        //         elem.tasks.push(taskToAdd)
        //     }
        // })
        // setUserData(data)

        // FIX: build a brand new array (and new objects for the changed
        // employee) with .map(), so React sees a new reference and re-renders.
        // Also restored the taskNumber.newTask increment, which had been
        // dropped along the way.
        const updatedData = userData.map((elem) => {
            if (assignTo === elem.name) {
                return {
                    ...elem,
                    tasks: [...elem.tasks, taskToAdd],
                    taskNumber: {
                        ...elem.taskNumber,
                        newTask: elem.taskNumber.newTask + 1
                    }
                }
            }
            return elem
        })

        setUserData(updatedData)
        // localStorage.setItem('employees',JSON.stringify(data))
        console.log(updatedData)


        setTaskDate('')
        setAssignTo('')
        setCategory('')
        setTaskDescription('')
        setTaskTitle('')

        
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-wrap w-full items-start justify-between '
                >
                    <div className='w-1/2'>
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                            <input 
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            className="text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type='text' placeholder='Make a UI Design'/>
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                            <input 
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            className='text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='date'/>
                        </div>

                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                            <input 
                            value={assignTo}
                            onChange={(e) => {
                                setAssignTo(e.target.value)
                            }}
                            className='text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type='text' placeholder='Employee Name'/>
                        </div>
                        
                        <div>
                            <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                            <input 
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            className='text-sm  py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4' type="text" placeholder="design, dev, etc"/>
                        </div>

                    </div>

                    
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                        <textarea  
                            value={taskDescription}
                            onChange={(e) => {
                                setTaskDescription(e.target.value)
                            }}
                            className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border border-gray-400'name="" cols='30' rows='10' id="">
                        </textarea>
                        <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Create Task</button>
                    </div>

                    
                </form>
            </div>
    );
}

export default CreateTask;