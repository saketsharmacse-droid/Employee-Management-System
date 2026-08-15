//yaha pe new employee add krunga, admin se.
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider'

const AddEmployee = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault()

        // basic guard: don't add duplicate emails
        const alreadyExists = userData.some((emp) => emp.email === email)
        if (alreadyExists) {
            alert('An employee with this email already exists!')
            return
        }

        // id: one higher than the current max, so it stays unique
        // even if employees are removed later
        const newId = userData.length
            ? Math.max(...userData.map((emp) => emp.id)) + 1
            : 1

        const newEmployee = {
            id: newId,
            name,
            email,
            password,
            taskNumber: { active: 0, newTask: 0, completed: 0, failed: 0 },
            tasks: []
        }

        setUserData([...userData, newEmployee])

        setName('')
        setEmail('')
        setPassword('')
    }

    return (
        <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
            <form
                onSubmit={(e) => { submitHandler(e) }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Name</h3>
                        <input
                            value={name}
                            required
                            onChange={(e) => setName(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                            type='text'
                            placeholder='Employee Name'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Email</h3>
                        <input
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                            type='email'
                            placeholder='employee@example.com'
                        />
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Password</h3>
                        <input
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4'
                            type='text'
                            placeholder='Set a password'
                        />
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 rounded text-sm mt-4 w-full'>Add Employee</button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;