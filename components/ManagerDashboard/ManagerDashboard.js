import React from 'react'
import useResouce from '../../hooks/useResource'
export default function ManagerDashboard() {
  const { resources } = useResouce()
  console.log(resources)
  return (
    <div className='w-full p-8'>
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
      <h2 className='ml-12 text-3xl mt-12'>Teachers</h2>

      <div id="container" class="w-4/5 mx-auto ml-0">
        <div className=" grid  grid-cols-3 gap-3 m-12 w-full ml-0 ">
          {resources
            ? resources.map((teacher) => (
              <div class="bg-gray-800 px-6 py-8 rounded-lg shadow-lg text-center m-16 mt-0 mx-24 w-56 border border-gray">
                <div class="mb-3">
                  <img
                    class="w-auto mx-auto rounded-full"
                    src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-line-icon-121102131.jpg"
                    alt=""
                  />
                </div>
                <h2 class="text-xl font-medium text-white">{teacher.name}</h2>
                <span class="text-white block mb-5">{teacher.role}</span>

                <a href="#" class="px-4 py-2 bg-blue-800 text-white rounded-full"
                >Evaluate</a>

              </div>
            ))
            : false}
        </div>




      </div>
    </div>
  )
}
