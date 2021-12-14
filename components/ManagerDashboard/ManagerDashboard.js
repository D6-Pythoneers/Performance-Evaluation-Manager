import React from 'react'
import useResouce from '../../hooks/useResource'
import { createContext, useContext, useState, useEffect } from "react";
import { render } from 'react-dom';
export default function ManagerDashboard ({ resources }) {
  console.log(resources)
  return (
    resources != null ?
      (<div className='w-full p-8'>
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
              <div className='text-gray-500'>Pending Evaluations</div>
              <h4 className='text-2xl font-semibold text-gray-700'>10</h4>
            </div>
          </div>
          <div className='flex p-4 bg-white rounded-xl'>
            <img
              alt='Completed Evaluations'
              src='https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png'
            />
            <div className='mx-5 bg-white'>
              <div className='text-gray-500'>Completed Evaluations</div>
              <h4 className='text-2xl font-semibold text-gray-700'>15</h4>
            </div>
          </div>
        </div>

        {/*  */}
        <div className='flex flex-col w-2/5 mt-12 '>
          <h2 className='ml-12 text-3xl'>Teachers</h2>
          <div className='flex justify-between m-12 mt-4 w-fit h-96'>
            {resources.schoolTeachers.map((teacher, index) => {
              return (<div key={index}>{teacher.name}</div>)
            })}
          </div>
        </div>
      </div>) : null
  )
}