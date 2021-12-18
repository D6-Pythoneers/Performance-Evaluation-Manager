import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec3 ({ user, school, evaluations }) {
    const [showMe, setShowMe] = useState(false);
    const [goals, setGoals] = useState({});

    function submitHandler (e) {
        e.preventDefault();
        const myForm = document.getElementById('myForm');

        const data = {
            "goal": [e.target.goal1.value, e.target.goal2.value, e.target.goal3.value, e.target.goal4.value],
            "goal_result": [e.target.goal1_result.value, e.target.goal2_result.value, e.target.goal3_result.value, e.target.goal4_result.value],
            "max_score": [e.target.goal1_max.value, e.target.goal2_max.value, e.target.goal3_max.value, e.target.goal4_max.value],
            "score": [e.target.goal1_min.value, e.target.goal2_min.value, e.target.goal3_min.value, e.target.goal4_min.value],
        }
        setGoals(x => [{ ...x, data }])
        myForm.reset()
    }
    function toggle () {
        setShowMe(!showMe);
    }
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mb-4 font-bold text-left bg-gray-200">Part Three: The goals that the teacher calls them to achieve and allocates to them (20%) (to be selected from the teacher’s professional growth plan and the school development plan in agreement between the school principal and the teacher)<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2" /></h2>
            <form id="myForm" style={{ display: showMe ? "inline-table" : "none" }} className="w-full bg-white " onSubmit={submitHandler}>
                <table>
                    <thead className="w-full text-white bg-gray-500 ">
                        <tr>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Number</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Goal</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Goal results</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Maximum Mark</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Minimum Mark</th>
                        </tr>
                    </thead>
                    <tbody className="gap-1 m-8 text-gray-700 justify-evenly">
                        {evaluations ? evaluations.map(evaluation => {
                            if (evaluation.user == user.id) {
                                {
                                    return evaluations[0].goals.map((goal, index) => {
                                        return (
                                            <tr className="border border-black border-blacklack">
                                                <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                                    <label className="px-4 py-3 text-sm font-semibold text-center ">{index + 1}</label></td>
                                                <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                                    <textarea className="w-full " type="text" placeholder='Typre here..' id="goal1" value={goal.goal} />
                                                </td>
                                                <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                                    <textarea className="w-full " type="text" placeholder='Typre here..' id="goal1_result" />
                                                </td>
                                                <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                                    <textarea className="w-full " type="text" placeholder='Typre here..' id="goal1_max" />
                                                </td>
                                                <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                                    <textarea className="w-full " type="text" placeholder='Typre here..' id="goal1_min" />
                                                </td>
                                            </tr>

                                        )

                                    })

                                }
                            }

                        }) : null}



                    </tbody>
                    {/* <button className="relative px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 left-2/4 item-left focus:outline-none focus:shadow-outline" type="submit">
                        Submit Form
                    </button> */}
                </table>

                <button className="float-right px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 left-2/4 item-left focus:outline-none focus:shadow-outline" type="submit">
                    Save
                </button></form>

        </div>
    )
}
