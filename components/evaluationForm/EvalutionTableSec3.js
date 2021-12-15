import React from 'react'
import {useState} from "react"
export default function EvalutionTableSec3() {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe);
}
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mb-4 font-bold text-left bg-gray-200">Part Three: The goals that the teacher calls them to achieve and allocates to them (20%) (to be selected from the teacher’s professional growth plan and the school development plan in agreement between the school principal and the teacher)<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2"/></h2>
            <form style={{display: showMe?"inline-table":"none"}} className="w-full bg-white ">
                <table>
                    <thead className="w-full text-white bg-gray-500 ">
                        <tr>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Number</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Desigred Goal</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Accopliched Goals</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Maximum Mark</th>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">Minimum Mark</th>
                        </tr>
                    </thead>
                    <tbody className="gap-1 m-8 text-gray-700 justify-evenly">
                        <tr className="border border-black border-blacklack">
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                            <label className="px-4 py-3 text-sm font-semibold text-center ">1</label></td>
                            <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1/3 px-4 py-3 text-center border border-black ">
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                        </tr>
                        <tr className="border border-black border-blacklack">
                        <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                            <label className="px-4 py-3 text-sm font-semibold text-center ">2</label></td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                        </tr>
                        <tr className="border border-black border-blacklack">
                        <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                            <label className="px-4 py-3 text-sm font-semibold text-center ">3</label></td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                        </tr>
                        <tr className="border border-black border-blacklack">
                        <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                            <label className="px-4 py-3 text-sm font-semibold text-center ">4</label></td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                            <td className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black" >
                                <textarea className="w-full " type="text" placeholder='Typre here..' name="" />
                            </td>
                        </tr>
                        <tr className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-black">
                            Totals
                        </tr>

                    </tbody>
                    {/* <button className="relative px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 left-2/4 item-left focus:outline-none focus:shadow-outline" type="submit">
                        Submit Form
                    </button> */}
                </table>
            </form>

        </div>
    )
}
