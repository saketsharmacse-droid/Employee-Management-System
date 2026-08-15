import React, { useContext } from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';
import { AuthContext } from '../../context/AuthProvider';

const TaskList = ({data}) => {

    const [userData, setUserData] = useContext(AuthContext)

    // Updates one task's status for this employee, and keeps taskNumber
    // counts in sync. Works the same immutable way as CreateTask's fix —
    // build a new array/objects so React actually re-renders.
    const updateTaskStatus = (taskIdx, action) => {
        const updatedData = userData.map((emp) => {
            if (emp.id !== data.id) return emp

            const updatedTasks = emp.tasks.map((task, idx) => {
                if (idx !== taskIdx) return task

                if (action === 'accept') {
                    return { ...task, newTask: false, active: true }
                }
                if (action === 'complete') {
                    return { ...task, active: false, newTask: false, completed: true }
                }
                if (action === 'fail') {
                    return { ...task, active: false, newTask: false, failed: true }
                }
                return task
            })

            const updatedTaskNumber = { ...emp.taskNumber }
            if (action === 'accept') {
                updatedTaskNumber.newTask -= 1
                updatedTaskNumber.active += 1
            }
            if (action === 'complete') {
                updatedTaskNumber.active -= 1
                updatedTaskNumber.completed += 1
            }
            if (action === 'fail') {
                updatedTaskNumber.active -= 1
                updatedTaskNumber.failed += 1
            }

            return { ...emp, tasks: updatedTasks, taskNumber: updatedTaskNumber }
        })

        setUserData(updatedData)
    }

    return (
        <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10'>

        {data.tasks.map((elem, idx) => {

            // FIX: check newTask BEFORE active — a pending task has both
            // active:true and newTask:true, so active must not win first.
            // if(elem.active){
            //     return <AcceptTask key={idx} data={elem}/>
            // }
            // if(elem.NewTask){
            //     return <NewTask key={idx} data={elem}/>
            // }

            if(elem.newTask){
                return <NewTask key={idx} data={elem} onAccept={() => updateTaskStatus(idx, 'accept')}/>
            }
            if(elem.active){
                return <AcceptTask key={idx} data={elem} onComplete={() => updateTaskStatus(idx, 'complete')} onFail={() => updateTaskStatus(idx, 'fail')}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx} data={elem}/>
            }
        })}

        </div>
    );
}

export default TaskList;