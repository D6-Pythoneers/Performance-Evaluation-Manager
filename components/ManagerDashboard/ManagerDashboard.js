import React from "react";
import { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/auth'

import TeacherRow from "./TeacherRow";
import School from '../../pages/api/School'
export default function ManagerDashboard() {
  const { user } = useAuth()
  const [school, SetSchool] = useState(new School(user))

  console.log(school)
  return (
    <div className="w-full p-8">
      <div className="flex justify-around w-full">
        <div className="flex p-4 bg-white rounded-xl">
          <img alt="Academic Year" src="https://img.icons8.com/color/48/000000/calendar--v1.png" />
          <div class="mx-5 bg-white min-w-max">
            <div class="text-gray-500">Academic Year</div>
            <h4 class="text-2xl font-semibold text-gray-700">{school.academic_year}</h4>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white rounded-xl">
          <img alt="Evaluation Phase" src="https://img.icons8.com/fluency/48/000000/test.png" />
          <div class="mx-5 bg-white min-w-max">
            <div class="text-gray-500">Evaluation Phase</div>
            <h4 class="text-2xl font-semibold text-gray-700">First</h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt="Pending Evaluations" src="https://img.icons8.com/color/48/000000/data-pending.png" />
          <div class="mx-5 bg-white">
            <div class="text-gray-500">Pending Evaluations</div>
            <h4 class="text-2xl font-semibold text-gray-700">10</h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt="Completed Evaluations" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png" />
          <div class="mx-5 bg-white">
            <div class="text-gray-500">Completed Evaluations</div>
            <h4 class="text-2xl font-semibold text-gray-700">15</h4>
          </div>
        </div>
      </div>

      {/*  */}
      <div className="flex flex-col w-2/5 mt-12 ">
        <h2 className="ml-12 text-3xl">Teachers</h2>
        <div className="flex justify-between m-12 mt-4 overflow-x-hidden overflow-y-scroll w-fit h-96">
          <table class="w-96">
            <tbody class="bg-white">
              {
                 school.schoolTeachers.map(teacher => console.log(teacher))
                 }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
