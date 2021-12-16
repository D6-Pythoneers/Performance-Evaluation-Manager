import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec6() {
    const [showMe, setShowMe] = useState(false);
    const [partfiveA, setPartfiveA] = useState({});
    function toggle() {
        setShowMe(!showMe);
    }
    function submitHandler(e){
        e.preventDefault();
       const  myForm=document.getElementById('myForm');
        
        const data={
            "first_evaluation":[
                e.target.p611.value,
                e.target.p621.value,
                e.target.p631.value,
                e.target.p641.value,
                e.target.p651.value,
                e.target.p661.value,
                e.target.p671.value,
                e.target.p681.value,
                e.target.p691.value,
                e.target.p6101.value,
                e.target.p6111.value,
                e.target.p6121.value,
                e.target.p6131.value,
                e.target.p6141.value,
                e.target.p6151.value,
            ],
            "final_evaluation":[
                e.target.p612.value,
                e.target.p622.value,
                e.target.p632.value,
                e.target.p642.value,
                e.target.p652.value,
                e.target.p662.value,
                e.target.p672.value,
                e.target.p682.value,
                e.target.p692.value,
                e.target.p6102.value,
                e.target.p6112.value,
                e.target.p6122.value,
                e.target.p6132.value,
                e.target.p6142.value,
                e.target.p6152.value,
            ],
            "score":[
                e.target.p613.value,
                e.target.p623.value,
                e.target.p633.value,
                e.target.p643.value,
                e.target.p653.value,
                e.target.p663.value,
                e.target.p673.value,
                e.target.p683.value,
                e.target.p693.value,
                e.target.p6103.value,
                e.target.p6113.value,
                e.target.p6123.value,
                e.target.p6133.value,
                e.target.p6143.value,
                e.target.p6153.value,
            ],
        }
        setPartfiveA(x=>[{...x,data}])
    myForm.reset()
    }
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Part(6): Evaluation elements for extra-curricular educational performance to be filled out by (the educational supervisor and the school director) and allocated for them (15%)<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2" /></h2>
            <form onSubmit={submitHandler} id="myForm" style={{ display: showMe ? "inline-table" : "none" }} className="w-full bg-white ">
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
                                <textarea className="w-full mt-4 mb-12 " id="p611" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p621" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mt-4 mb-12 " id="p612" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p622" placeholder="Type here.."></textarea>



                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mt-4 mb-12 " id="p613" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p623" placeholder="Type here.."></textarea>


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
                                <tr><p className="w-full mb-10 " name="" >Preparing the daily plan and its worksheets and annexes {"("}the variety of outputs and their comprehensiveness are appropriate, teaching and assessment strategies, and self-reflection..etc.</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Remedial and enrichment plans and activities for students</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Follow-up of classroom activities, employing laboratories, various learning resources, and documenting achievement in appropriate records</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Building and executing tests based on the specification table and good test specificationss</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Analyze test results and provide support to the student based on test results</p></tr>
                                <tr><p className="w-full mb-10 " name=""  >Organizing main and side bookmarks, realtime calendar records and tools</p></tr>
                                <tr><p className="w-full mb-10 " name="" >Communicating with parents regarding student results</p></tr>

                            </td>
                            <td className="border border-b border-black">

                                <textarea className="w-full mt-4 mb-16 " id="p631" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 " id="p641" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p651" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p661" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p671" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p681" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p691" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p6101" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mt-4 mb-16 " id="p632" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 " id="p642" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p652" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p662" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p672" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p682" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p692" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p6102" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mt-4 mb-16 " id="p633" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 " id="p643" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p653" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p663" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p673" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p683" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p693" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p6103" placeholder="Type here.."></textarea>
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
                                <textarea className="w-full mb-10 " id="p6111" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p6121" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p6112" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p6122" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p6113" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p6123" placeholder="Type here.."></textarea>

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
                                <textarea className="w-full mb-10 "  id="p6131" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 "id="p6132"placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p6113" placeholder="Type here.."></textarea>


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
                                <textarea className="w-full mb-10 " id="p6141" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p6142" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p6143" placeholder="Type here.."></textarea>


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
                                <textarea className="w-full mb-10 " id="p6151" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 "id="p6151" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p6151" placeholder="Type here.."></textarea>


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
                    <textarea className='mt-4 ml-4 ' id="final_score" placeholder='Type here..'></textarea>

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