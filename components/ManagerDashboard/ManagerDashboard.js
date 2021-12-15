import React from 'react'
import { useState } from 'react';
export default function ManagerDashboard ({ resources }) {
  
  return (
    (<div data-cy="manager-dashboard" className='w-full p-8'>
      <div className='flex justify-around w-full'>
        <div className='flex p-4 bg-white rounded-xl'>
          <img
            alt='Academic Year'
            src='https://img.icons8.com/color/48/000000/calendar--v1.png'
          />
          <div className='mx-5 bg-white min-w-max'>
            <div className='text-gray-500'>Academic Year</div>
            <h4 className='text-2xl font-semibold text-gray-700'>2021</h4>
          </div>
        </div>
        <div className='flex gap-4 p-4 bg-white rounded-xl'>
          <img
            alt='Evaluation Phase'
            src='https://img.icons8.com/fluency/48/000000/test.png'
          />
          <div className='mx-5 bg-white min-w-max'>
            <div className='text-gray-500'>Evaluation Phase</div>
            <h4 className='text-2xl font-semibold text-gray-700'>First</h4>
          </div>
        </div>
        <div className='flex p-4 bg-white rounded-xl'>
          <img
            alt='Pending Evaluations'
            src='https://img.icons8.com/color/48/000000/data-pending.png'
          />
          <div className='mx-5 bg-white'>
            <div className='text-gray-500'>Pending </div>
            <h4 className='text-2xl font-semibold text-gray-700'>{resources ? resources.schoolTeachers.length : 11}</h4>
          </div>
        </div>
        <div className='flex p-4 bg-white rounded-xl'>
          <img
            alt='Completed Evaluations'
            src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png'
          />
          <div className='mx-5 bg-white'>
            <div className='text-gray-500'>Completed Evaluations</div>
            <h4 className='text-2xl font-semibold text-gray-700'>0</h4>
          </div>
        </div>
      </div>

      {/*  */}
      <div className='flex flex-col w-full mt-12 '>
        <h2 className='ml-12 text-3xl'>Teachers</h2>
        <div data-cy="teacher-cards-container" className="grid w-full grid-cols-4 m-8 ml-0 ">
          {resources
            ? resources.schoolTeachers.map((teacher, index) => (
              <div data-cy="teacher-card" key={index} className="w-56 px-6 py-8 m-16 mx-16 mt-0 text-center bg-gray-800 rounded-lg shadow-lg">
                <div className="mb-3 ">
                  <img
                    className="w-auto mx-auto rounded-full"
                    src="https://i.ibb.co/3YpLCb6/15346636991003506792default-user.png"
                    alt=""
                  />
                </div>
                <h2 className="text-xl font-medium text-white">{teacher.name}</h2>
                <span className="block mb-5 text-white">{teacher.role}</span>

                <a href="/evaluation" className="px-4 py-2 text-white bg-blue-800 rounded-full"
                >Evaluate</a>

              </div>
            ))
            : false}
        </div>

      </div>
    </div>)
  )
}