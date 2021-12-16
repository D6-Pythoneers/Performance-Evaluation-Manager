import React from 'react'
import { useState } from 'react'
import { useAuth } from '../contexts/auth'
export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const handleLogin = (e) => {
    e.preventDefault()
    console.log(username, password)
    login(username, password)
  }
  const styles = {
    background: 'url("https://miro.medium.com/max/1400/1*1Xm4NjD-yZ0NF8rOhw1dsw.gif")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
   
};
  return (
    
    <div className='flex flex-col w-screen h-screen text-white'>
      
      <div class="h-screen w-full flex justify-center items-center bg-no-repeat" style={styles}>
        <div class="bg-image w-full sm:w-1/2 md:w-9/12 lg:w-1/2 mx-3 md:mx-5 mb-96 lg:mx-0 shadow-md flex flex-col md:flex-row items-center rounded z-10 overflow-hidden bg-center bg-cover bg-gray-800">
          <div class="w-full md:w-1/2 flex flex-col justify-center items-center bg-opacity-25 bg-gray-800 backdrop">
            <h1 class="text-3xl md:text-4xl font-extrabold text-white my-2 md:my-0">
              <img width="50px" height="60px" src='https://i.ibb.co/71rGjSd/PEM-removebg-preview.png' />
            </h1>
            <p class="mb-2 mt-2 text-white hidden md:block ">
              Performance Evaluation System

            </p>
          </div>
          <div class="w-full md:w-1/2 flex flex-col items-center bg-white py-5 md:py-8 px-4">
            <h3 class="mb-4 font-bold text-3xl flex items-center text-gray-800 ">
              LOGIN
            </h3>
            <form action="#" class="px-3 flex flex-col justify-center items-center w-full gap-3">
              <input
                id='username' placeholder="User ID"
                class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
              />
              <input id='password'
                type="password" placeholder="Password"
                class="px-4 py-2 w-full rounded border border-gray-300 shadow-sm text-base placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:border-blue-500"
              />
              <button class="flex justify-center items-center bg-blue-500 hover:bg-blue-600 text-white focus:outline-none focus:ring rounded px-3 py-1"
                onClick={() =>
                  login(
                    document.getElementById('username').value,
                    document.getElementById('password').value
                  )
                }
                className='w-full px-4 py-2 mb-6 font-bold text-white bg-gray-800  rounded hover:bg-blue-700'
              >
                Login
              </button>
            </form>
            <p class="text-gray-700 text-sm mt-2 ml-56">
              Need Help?
              <a href="#" class="text-blue-500 hover:text-blue-900 mt-3 focus:outline-none font-bold underline">
                Support
              </a>
            </p>
          </div>
        </div>
      </div>



    </div>
  )
}

