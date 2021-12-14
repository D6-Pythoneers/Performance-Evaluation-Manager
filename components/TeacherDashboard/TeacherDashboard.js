import React from "react";

export default function TeacherDashboard() {
  return (
    <div className="w-full p-8">
      <div className="flex justify-around w-full">
        <div className="flex p-4 bg-white rounded-xl">
          <img alt = "Academic Year" src="https://img.icons8.com/color/48/000000/calendar--v1.png" />
          <div className="mx-5 bg-white min-w-max">
            <div className="text-gray-500">Academic Year</div>
            <h4 className="text-2xl font-semibold text-gray-700">2021/2022</h4>
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
            <div className="text-gray-500">Pending Evaluation</div>
            <h4 className="text-2xl font-semibold text-gray-700"></h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img alt = "Last Score" src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png" />
          <div className="mx-5 bg-white">
            <div className="text-gray-500">Last Score</div>
            <h4 className="text-2xl font-semibold text-gray-700">85</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 ">
        <table className="w-2/5">
          <thead>
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">Year</th>
              <th className="px-4 py-3">Score</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-gray-700">
              <td className="px-4 py-3 text-ms font-semibold border">2021</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  {" "}
                  95{" "}
                </span>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="px-4 py-3 text-ms font-semibold border">2020</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold leading-tight text-yellow-600 bg-green-100 rounded-sm">
                  {" "}
                  90{" "}
                </span>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="px-4 py-3 text-ms font-semibold border">2019</td>
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
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-4 py-3">No.</th>
              <th className="px-4 py-3">Goal</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="text-gray-700">
              <td className="px-4 py-3 text-ms font-semibold border">1</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold rounded-sm">
                  {" "}
                  Do something{" "}
                </span>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="px-4 py-3 text-ms font-semibold border">2</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold rounded-sm">
                  {" "}
                  Do something else{" "}
                </span>
              </td>
            </tr>
            <tr className="text-gray-700">
              <td className="px-4 py-3 text-ms font-semibold border">3</td>
              <td className="px-4 py-3 text-xs border">
                <span className="px-2 py-1 font-semibold rounded-sm">
                  {" "}
                  Do something else again{" "}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
