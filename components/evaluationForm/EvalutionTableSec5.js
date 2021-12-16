import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec5() {
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
                e.target.p5a11.value,
                e.target.p5a21.value,
                e.target.p5a31.value,
                e.target.p5a41.value,
                e.target.p5a51.value,
                e.target.p5a61.value,
                e.target.p5a71.value,
                e.target.p5a81.value,
                e.target.p5a91.value,
                e.target.p5a101.value,
                e.target.p5a111.value,
                e.target.p5a121.value,
                e.target.p5a131.value,
                e.target.p5a141.value,
                e.target.p5a151.value,
            ],
            "final_evaluation":[
                e.target.p5a12.value,
                e.target.p5a22.value,
                e.target.p5a32.value,
                e.target.p5a42.value,
                e.target.p5a52.value,
                e.target.p5a62.value,
                e.target.p5a72.value,
                e.target.p5a82.value,
                e.target.p5a92.value,
                e.target.p5a102.value,
                e.target.p5a112.value,
                e.target.p5a122.value,
                e.target.p5a132.value,
                e.target.p5a142.value,
                e.target.p5a152.value,
            ],
            "score":[
                e.target.p5a13.value,
                e.target.p5a23.value,
                e.target.p5a33.value,
                e.target.p5a43.value,
                e.target.p5a53.value,
                e.target.p5a63.value,
                e.target.p5a73.value,
                e.target.p5a83.value,
                e.target.p5a93.value,
                e.target.p5a103.value,
                e.target.p5a113.value,
                e.target.p5a123.value,
                e.target.p5a133.value,
                e.target.p5a143.value,
                e.target.p5a153.value,
            ],
        }
        setPartfiveA(x=>[{...x,data}])
    myForm.reset()
    }
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Fifth Part(A): Assessment elements for classroom performance to be filled out by (the educational supervisor and the school director, and allocated to them 55%.<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2" /></h2>
            <form onSubmit={submitHandler} id="myForm" style={{ display: showMe ? "inline-table" : "none" }} className="w-full bg-white ">
                <table>
                    <thead className="w-full text-white bg-gray-500 ">
                        <tr>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Main Field</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b h-1/3">Sub Field</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Number</th>
                            <th className="px-4 py-3 mx-6 text-xs text-sm font-semibold text-left text-center border border-b py-2/4">Performance Indecation</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the first academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the second academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Mark 1-5</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-left border border-b border-black">
                        <tr>
                            <td className="text-xs text-center border border-b border-black">Education

                            </td>
                            <td className="text-xs text-center ">
                                <p className="mb-12 text-xs text-center">Educaion Planning</p>
                                <p className="mb-12 text-xs text-center">Executing learning processes
                                    and education</p>
                                <p className="mb-12 text-xs text-center">Reinforce learning</p>
                            </td>
                            <td className="border border-b border-black ">

                                <p className="w-full mt-4 text-center mb-11" name="" >1</p>
                                <p className="w-full mb-20 text-center " name="" >2</p>
                                <p className="w-full mb-20 text-center " name="" >3</p>
                                <p className="w-full mb-20 text-center " name="" >4</p>
                                <p className="w-full mb-20 text-center " name="" >5</p>
                                <p className="w-full mb-20 text-center " name="" >6</p>
                                <p className="w-full mb-20 text-center " name="" >7</p>
                                <p className="w-full mb-20 text-center " name="" >8</p>
                                <p className="w-full mb-20 text-center " name="" >9</p>
                                <p className="w-full mb-20 text-center " name="" >10</p>

                            </td>
                            <td className="border border-b border-black ">

                                <tr><p className="w-full mb-14" name="" >Implementation of school plans in the classroom</p></tr>
                                <tr><p className="w-full mb-14" name="" >Preparing for the lesson and taking into account the integration</p></tr>
                                <tr><p className="w-full mb-14" name="" >Observe the logical sequence in teaching educational content</p></tr>
                                <tr><p className="w-full mb-14" name="" >The optimal investment of time to achieve educational outcomes</p></tr>
                                <tr><p className="w-full mb-14" name="" >Use of effective communication (sound language, body language, eye contact)</p></tr>
                                <tr><p className="w-full mb-14" name="" >Effectively employ and diversify active learning strategies</p></tr>
                                <tr><p className="w-full mb-14" name="" >Laboratories, students, linking learning to life</p></tr>
                                <tr><p className="w-full mb-14" name="" >Differentiated support and sensitivity to individual differences</p></tr>
                                <tr><p className="w-full mb-14" name="" >Employing assessment of its various types, using assessment strategies and tools to support student learning</p></tr>
                                <tr><p className="w-full mb-14" name="" >Employ the results of assessment analysis to improve learning</p></tr>

                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mt-4 mb-12 " id="p5a11" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a21" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a31" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a41" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a51" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a61" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a71" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a81" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a91" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a101" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black ">
                            <textarea className="w-full mt-4 mb-12 " id="p5a12" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a22" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a32" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a42" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a52" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a62" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a72" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a82" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a92" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a102" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black ">
                            <textarea className="w-full mt-4 mb-12 " id="p5a13" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a23" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a33" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a43" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a53" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a63" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a73" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a83" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a93" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-14" id="p5a103" placeholder="Type here.."></textarea>
                            </td>
                        </tr>
                        <tr className="border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">learning environment</td>
                            <td className="text-xs text-center border border-b border-black">
                                <tr>
                                    <p className="w-full mb-6 " name="" >Knowledge Vessels</p>
                                </tr>
                                <tr>
                                    <p className="w-full mb-6 " name="" >psychological support
                                        social</p>
                                </tr>
                                <tr>
                                    <p className="w-full mb-6 " name="" >innovation and creativity</p>
                                </tr>
                            </td>

                            <td className="border border-b border-black">
                                <p className="w-full mt-10 mb-16 text-center " name="" >11</p>
                                <p className="w-full mt-10 mb-16 text-center " name="" >12</p>
                                <p className="w-full mt-10 mb-16 text-center " name="" >13</p>

                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mb-7" name="" >Effectively employing diverse learning resources to support student learning (laboratories technology, global knowledge sources)</p>
                                <p className="w-full mb-7" name="" >Providing a safe, nurturing and supportive learning environment to enhance learning opportunities for students</p>
                                <p className="w-full mb-7" name="" >Providing opportunities to support and invest the creativity and innovations of students</p>
                            </td>
                            <td className="border border-b border-black">

                                <textarea className="w-full mt-4 mb-16 " id="p5a111" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 "id="p5a121" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p5a131" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                            <textarea className="w-full mt-4 mb-16 " id="p5a112" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 "id="p5a122" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p5a132" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
 
                            <textarea className="w-full mt-4 mb-16 " id="p5a113" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-16 "id="p5a123" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p5a133" placeholder="Type here.."></textarea>
                            </td>

                        </tr>
                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">Professional development</td>
                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">Life Skills</p>
                                <p className="w-full mt-1 mb-6 text-center ">Teaching Responsibilities</p>

                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-1 mb-12 text-center ">14</p>
                                <p className="w-full mt-1 mb-12 text-center ">15</p>
                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mt-1 mb-10 text-left ">Use of life skills in an educational situation</p>
                                <p className="w-full mt-1 mb-10 text-left ">Employing students' self-learning competencies</p>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-10 " id="p5a141" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p5a151" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                            <textarea className="w-full mb-10 " id="p5a142" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p5a152" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                            <textarea className="w-full mb-10 " id="p5a143" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p5a153" placeholder="Type here.."></textarea>
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
                <button className="float-right px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 left-2/4 item-left focus:outline-none focus:shadow-outline" type="submit">
                Send
            </button>
            </form>

        </div>
    )
}


