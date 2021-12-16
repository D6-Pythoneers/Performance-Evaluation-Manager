import React from "react";
import axios from 'axios';
import { useAuth } from "../../contexts/auth";
import Swal from 'sweetalert2'

export default function TeacherDashboard ({ resources }) {
  const { tokens } = useAuth()
  const approve_evaluation = async (eval_obj) => {
    eval_obj.status = 'approved'
    const response = await axios.put(`${process.env.NEXT_PUBLIC_RESOURCE_URL}evaluations/${eval_obj.evaluation_id}`, eval_obj, {
      headers: {
        'Authorization': 'Bearer ' + tokens.access
      }
    })

  }
  console.log(resources);
  return (
    <div className="w-full p-8" style={{ "minHeight": "87vh" }}>

      <div className="flex justify-around w-full">
        <div className="flex p-4 bg-white rounded-xl">
          <img alt="Academic Year" src="https://img.icons8.com/color/48/000000/calendar--v1.png" />
          <div className="mx-5 bg-white min-w-max">
            <div className="text-gray-500">Academic Year</div>
            <h4 className="text-2xl font-semibold text-gray-700">{resources ? resources.academic_year : 2021}</h4>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white rounded-xl">
          <img alt="Evaluation Phase" src="https://img.icons8.com/fluency/48/000000/test.png" />
          <div className="mx-5 bg-white min-w-max">
            <div className="text-gray-500">Evaluation Phase</div>
            <h4 className="text-2xl font-semibold text-gray-700">First</h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt="Pending Evaluation" src="https://img.icons8.com/color/48/000000/data-pending.png" />
          <div className="mx-5 bg-white">
            <div className="text-gray-500">Evaluation</div>
            {/* for demo only  */}

            <h4 className="text-2xl font-semibold text-gray-700">{"in progress"}</h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt="Last Score" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png" />
          <div className="mx-5 bg-white">
            <div className="text-gray-500">Last Score</div>
            <h4 className="text-2xl font-semibold text-gray-700">90</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 ">
        <table className="w-2/5">
          <thead>
            <tr className="font-semibold tracking-wide text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600 text-md">
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-gray-700">
              <td className="px-4 py-3 font-semibold border text-ms">2021</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  {resources ? resources.schoolEvaluations.map(evaluation => {
                    if (evaluation.user == resources.manager.id) {
                      if (!evaluation.evaluated) {
                        return (<button
                          onClick={() => approve_evaluation(evaluation)}
                          className='font-semibold text-gray-700'
                        >{evaluation.status}</button>)
                      } else {
                        return (<span className="px-2 py-1 font-semibold leading-tight text-yellow-600 bg-green-100 rounded-sm">
                          {evaluation.score}
                        </span>)
                      }
                    }
                  }) : pending}
                </span>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="px-4 py-3 font-semibold border text-ms">2020</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-yellow-600 bg-green-100 rounded-sm">
                  {" "}
                  90{" "}
                </span>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="px-4 py-3 font-semibold border text-ms">2019</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  {" "}
                  92{" "}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ************************ */}
        <table data-cy="goals-table" className="w-2/5">
          <thead>
            <tr className="font-semibold tracking-wide text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600 text-md">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">Goal</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            {resources.schoolEvaluations[0].goals.map((goal, index) => {
              return (
                <tr data-cy="goal-row" className="text-gray-700" key={index}>
                  <td className="px-4 py-3 font-semibold border text-ms">{index + 1}</td>
                  <td className="px-4 py-3 text-xs border">
                    <span data-cy="goal-entry" className="px-2 py-1 font-semibold rounded-sm">
                      {goal.goal}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
