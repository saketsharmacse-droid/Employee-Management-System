import React, {useState} from 'react';

const Login = () => {

    //hum yaha pe two-way binding krenge.
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //form ka default behaviour is ki wo reload ho jata hai jaise hi submit krte hai toh.
    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Hello Guyssss, Form Submitted!");
        console.log("Email is ", email);
        console.log("Password is ", password)

        setEmail('')
        setPassword('')
    }






    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded-xl border-emerald-600 p-20'>

                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center'>

                    <input 
                        value={email}
                        required 
                        className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full items-center text-xl placeholder:text-gray-400' 
                        type="email" 
                        placeholder='Enter Your Email' 
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                    />

                    <input 
                        value={password}
                        required 
                        className=' outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 rounded-full items-center text-xl placeholder:text-gray-400 mt-3' type="password" 
                        placeholder='Enter Your Password'
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />

                    <button className='text-white outline-none border-none bg-emerald-600 py-3 px-5 rounded-full mt-5 items-center text-xl placeholder:text-white' >Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;

//notes:
//form submit aise likhenge toh turant reload ho jayega: onsubmit={submitHandler}
//hum aise likhenge: 
