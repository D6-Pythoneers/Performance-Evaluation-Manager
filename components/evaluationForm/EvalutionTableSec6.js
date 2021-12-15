import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec6() {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe);
}
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Part(6): Evaluation elements for extra-curricular educational performance to be filled out by (the educational supervisor and the school director) and allocated for them (15%)</h2>
            <form style={{display: showMe?"inline-table":"none"}} className="w-full bg-white ">
                <table>
                    <thead className="w-full text-white bg-gray-500 ">
                        <tr>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Standards area</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b h-1/3">Field</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Number</th>
                            <th className="px-4 py-3 mx-6 text-xs text-sm font-semibold text-left text-center border border-b py-2/4">Performance Indecation</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the first academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the second academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Mark 1-5</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-left border border-b border-black">
                        <tr>
                            <td className="text-xs text-center border border-b border-black">Academic and pedagogical knowledge

                            </td>
                            <td className="text-xs text-center ">
                                <p className="mb-12 text-xs text-center">Educaional Knowledge</p>
                                <p className="mb-12 text-xs text-center">The general framework of the curriculum</p>

                            </td>

                            <td className="border border-b border-black ">

                                <p className="w-full mt-4 text-center mb-14" name="" >1</p>
                                <p className="w-full text-center mb-14" name="" >2</p>


                            </td>
                            <td className="border border-b border-black ">

                                <tr><p className="w-full mb-10 " name="" >Academic knowledge of specialization (accuracy and up-to-date information)</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Knowledge of the general framework of the curriculum and general and specific outcomes, and their use in the classroom</p></tr>


                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mt-4 mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mt-4 mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>



                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mt-4 mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>


                            </td>
                        </tr>
                        <tr className="border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">learning and Education</td>
                            <td className="text-xs text-center border border-b border-black">
                                <tr>
                                    <p className="w-full mb-56 " name="" >Education planning</p>
                                </tr>
                                <tr>
                                    <p className="w-full mb-6 " name="" >Implementation of learning and teaching processes</p>
                                </tr>
                                <tr>
                                    <p className="w-full mb-6 " name="" >Education strengthening</p>
                                </tr>
                            </td>

                            <td className="border border-b border-black">
                                <p className="w-full mb-16 text-center " name="" >3</p>
                                <p className="w-full mb-16 text-center " name="" >4</p>
                                <p className="w-full mb-16 text-center " name="" >5</p>
                                <p className="w-full mb-16 text-center " name="" >6</p>
                                <p className="w-full mb-16 text-center " name="" >7</p>
                                <p className="w-full mb-16 text-center " name="" >8</p>
                                <p className="w-full mb-16 text-center " name="" >9</p>
                                <p className="w-full mb-16 text-center " name="" >10</p>


                            </td>
                            <td className="border border-b border-black">
                                <tr><p className="w-full mb-10 " name="" >Preparing a quarterly/annual plan based on the analysis of the academic content.</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Preparing the daily plan and its worksheets and annexes (the variety of outputs and their comprehensiveness are appropriate, teaching and assessment strategies, and self-reflection..etc.</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Remedial and enrichment plans and activities for students</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Follow-up of classroom activities, employing laboratories, various learning resources, and documenting achievement in appropriate records</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Building and executing tests based on the specification table and good test specificationss</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Analyze test results and provide support to the student based on test results</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Organizing main and side bookmarks, realtime calendar records and tools</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Communicating with parents regarding student results</p></tr>

                            </td>
                            <td className="border border-b border-black">

                                <textarea className="w-full mt-4 mb-16 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mt-4 mb-16 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mt-4 mb-16 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " name="" placeholder="Type here.."></textarea>
                            </td>

                        </tr>
                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">Education Enviroment</td>
                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">Psychological and social support</p>


                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-1 text-center mb-14">11</p>
                                <p className="w-full mt-1 text-center mb-14">12</p>
                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mt-1 mb-10 text-left ">Follow up school records, organize student files, and follow up on the work of the class teacher</p>
                                <p className="w-full mt-1 mb-10 text-left ">Follow up on student absence and fill in attendance record</p>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>

                            </td>
                        </tr>
                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">sustainable professional development</td>
                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">professional development methodology</p>


                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">13</p>

                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-left ">Building a professional growth plan based on professional standards according to needs and constantly updating it and implemented in cooperation with the educational supervisor</p>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>


                            </td>
                        </tr>
                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black"></td>
                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">Implementing Professional Development</p>

                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">14</p>

                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-left ">Maintain an organized, comprehensive and updated file of achievement on a continuous basis</p>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>


                            </td>
                        </tr>
                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">Learning for life</td>
                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">Scientific Research Methodology</p>


                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">15</p>
                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-left ">Using and acquiring scientific research skills for students to develop the teaching-learning process</p>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " name="" placeholder="Type here.."></textarea>


                            </td>
                        </tr>
                        <tr className="text-xs text-center bg-blue-300 border border-b border-black">
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black">Mark from 10(sum*10)</td>
                            <td className="border border-b border-black"></td>

                        </tr>


                    </tbody>

                </table>
            </form>
            <div className='flex mt-2 flex-row-1'>
                <div className='flex flex-row-1 ' >
                    <p>Pricipal Recommendations</p>
                    <p>.........................</p>

                </div>
            </div>
            <div className='flex flex-row-1 '>
                <div className='flex flex-row-1' >
                    <p>Supervisor Recommendations</p>
                    <p>...................</p>

                </div>

            </div>
            <div className='flex flex-row-1 '>
                <div className='flex flex-row-1' >
                    <p className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200 rounded-lg">Final Summation out of 100</p>
                    <textarea className='mt-4 ml-4 ' placeholder='Type here..'></textarea>

                </div>
            </div>
            <div className='flex justify-center flex-row-1'>
                <div className='flex flex-row-1' >
                    <p className="pb-4 mt-4 mb-4 font-bold text-left rounded-lg">General Grading</p>
                    <p className='mt-4 ml-4 bg-gray-200 rounded-lg'>from 85 to 100 -{'>'}</p>
                    <p className='mt-4 ml-4 text-red-500 '>Excellant</p>
                    <p className='mt-4 ml-4 bg-gray-200 rounded-lg '>below 75-85 -{'>'} </p>
                    <p className='mt-4 ml-4 text-red-500 '>Very Good</p>
                    <p className='mt-4 ml-4 bg-gray-200 rounded-lg'>below 65-75 -{'>'} </p>
                    <p className='mt-4 ml-4 text-red-500 '>Good</p>
                    <p className='mt-4 ml-4 bg-gray-200 rounded-lg'>below 50-65 -{'>'} </p>
                    <p className='mt-4 ml-4 text-red-500 '>Intermediate</p>
                    <p className='mt-4 ml-4 bg-gray-200 rounded-lg'>below 50 -{'>'} </p>
                    <p className='mt-4 ml-4 text-red-500 '>Satisfactory</p>
                </div>
            </div>
            <button className="relative px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 left-2/4 item-left focus:outline-none focus:shadow-outline" type="submit">
                    Submit Form
                </button>

        </div>
    )
}