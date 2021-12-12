import React from "react";

export default function TeacherDashboard() {
  return (
    <div className="w-full p-8">
      <div className="flex justify-around w-full">
        <div className="flex p-4 bg-white rounded-xl">
          <img src="https://img.icons8.com/color/48/000000/calendar--v1.png" />
          <div class="mx-5 bg-white min-w-max">
            <div class="text-gray-500">Academic Year</div>
            <h4 class="text-2xl font-semibold text-gray-700">2021/2022</h4>
          </div>
        </div>
        <div className="flex gap-4 p-4 bg-white rounded-xl">
          <img src="https://img.icons8.com/fluency/48/000000/test.png" />
          <div class="mx-5 bg-white min-w-max">
            <div class="text-gray-500">Evaluation Phase</div>
            <h4 class="text-2xl font-semibold text-gray-700">First</h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img src="https://img.icons8.com/color/48/000000/data-pending.png" />
          <div class="mx-5 bg-white">
            <div class="text-gray-500">Pending Evaluation</div>
            <h4 class="text-2xl font-semibold text-gray-700"></h4>
          </div>
        </div>
        <div className="flex p-4 bg-white rounded-xl">
          <img src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/64/000000/external-chart-data-analytics-icongeek26-linear-colour-icongeek26-1.png" />
          <div class="mx-5 bg-white">
            <div class="text-gray-500">Last Score</div>
            <h4 class="text-2xl font-semibold text-gray-700">85</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-16 ">
        <table class="w-2/5">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">Year</th>
              <th class="px-4 py-3">Score</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">2021</td>
              <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  {" "}
                  95{" "}
                </span>
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">2020</td>
              <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-yellow-600 bg-green-100 rounded-sm">
                  {" "}
                  90{" "}
                </span>
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">2019</td>
              <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                  {" "}
                  92{" "}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        {/* ************************ */}
        <table class="w-2/5">
          <thead>
            <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th class="px-4 py-3">No.</th>
              <th class="px-4 py-3">Goal</th>
            </tr>
          </thead>
          <tbody class="bg-white">
            <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">1</td>
              <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold rounded-sm">
                  {" "}
                  Do something{" "}
                </span>
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">2</td>
              <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold rounded-sm">
                  {" "}
                  Do something else{" "}
                </span>
              </td>
            </tr>
            <tr class="text-gray-700">
              <td class="px-4 py-3 text-ms font-semibold border">3</td>
              <td class="px-4 py-3 text-xs border">
                <span class="px-2 py-1 font-semibold rounded-sm">
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
