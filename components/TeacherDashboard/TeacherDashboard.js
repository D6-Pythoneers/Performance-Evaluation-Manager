import React from "react";

export default function TeacherDashboard({resources}) {
  console.log(resources);
  return (
    <div className="w-full p-8" style={{"minHeight":"87vh"}}>
      <div className="flex justify-around w-full">
        <div className="flex p-4 bg-white rounded-xl">
          <img alt = "Academic Year" src="https://img.icons8.com/color/48/000000/calendar--v1.png" />
          <div className="mx-5 bg-white min-w-max">
            <div className="text-gray-500">Academic Year</div>
            <h4 className="text-2xl font-semibold text-gray-700">{resources.academic_year}</h4>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white rounded-xl">
          <img alt = "Evaluation Phase" src="https://img.icons8.com/fluency/48/000000/test.png" />
          <div className="mx-5 bg-white min-w-max">
            <div className="text-gray-500">Evaluation Phase</div>
            <h4 className="text-2xl font-semibold text-gray-700">First</h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt = "Pending Evaluation" src="https://img.icons8.com/color/48/000000/data-pending.png" />
          <div className="mx-5 bg-white">
            <div className="text-gray-500">Evaluation</div>
            <h4 className="text-2xl font-semibold text-gray-700">Pending </h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt = "Last Score" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png" />
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
                  {" "}
                  pending{" "}
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
        <table className="w-2/5">
          <thead>
            <tr className="font-semibold tracking-wide text-left text-gray-900 uppercase bg-gray-100 border-b border-gray-600 text-md">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">Goal</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {resources.schoolEvaluations[0].goals.map((goal,index)=>{return(
              <tr className="text-gray-700" key={index}>
              <td className="px-4 py-3 font-semibold border text-ms">{index+1}</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold rounded-sm">
                  {goal.goal}
                </span>
              </td>
            </tr>
            )})}
          </tbody>
        </table>
      </div>
    </div>
  );
}
