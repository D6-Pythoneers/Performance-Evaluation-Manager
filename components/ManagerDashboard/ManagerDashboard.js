import React from 'react'
export default function ManagerDashboard({ resources }) {
  return (
      (<div className='w-full p-8'>
        <div className='flex justify-around w-full'>
        <div className='flex p-4 bg-white rounded-xl'>
            <img  width='40px'
              alt='Completed Evaluations'
              src='https://icons.iconarchive.com/icons/google/noto-emoji-travel-places/1024/42496-school-icon.png'
            />
            <div className='mx-5 bg-white'>
              <div className='text-gray-500'>School Name</div>
              <h4 className='text-2xl font-semibold text-gray-700'>{resources.schoolInfo[0].school_name}</h4>
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
              alt='Academic Year'
              src='https://img.icons8.com/color/48/000000/calendar--v1.png'
            />
            <div className='mx-5 bg-white min-w-max'>
              <div className='text-gray-500'>Academic Year</div>
              <h4 className='text-2xl font-semibold text-gray-700'>2021</h4>
            </div>
          </div>
          
        </div>

        {/*  */}
        <div className='flex flex-col w-full mt-12 '>
          <h2 className='ml-12 text-3xl'>Teachers</h2>
            <div className="grid w-full grid-cols-4 m-8 ml-0 ">
              {resources
                ? resources.schoolTeachers.map((teacher) => (
                  <div class="bg-gray-800 px-6 py-8 rounded-lg shadow-lg text-center m-16 mt-0 mx-16 w-56">
                    <div class="mb-3 ">
                      <img
                        class="w-auto mx-auto rounded-full"
                        src="https://thumbs.dreamstime.com/z/vector-illustration-isolated-white-background-user-profile-avatar-black-line-icon-user-profile-avatar-black-line-icon-121102131.jpg"
                        alt=""
                      />
                    </div>
                    <h2 class="text-xl font-medium text-white">{teacher.name}</h2>
                    <span class="text-white block mb-5">{teacher.role}</span>

                    <a href="/evaluation" class="px-4 py-2 bg-blue-800 text-white rounded-full"
                    >Evaluate</a>

                  </div>
                ))
                : false}
            </div>

          </div>
        </div>
      ) 
  )
}