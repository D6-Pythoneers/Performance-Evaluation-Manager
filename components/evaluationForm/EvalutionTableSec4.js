import React from 'react'
import { useState } from "react"

export default function EvalutionTableSec4() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    function submitHandler(e){
        e.preventDefault();
       const  myForm=document.getElementById('myForm');
        
        const data={
            "goal":[e.target.goal1.value,e.target.goal2.value,e.target.goal3.value,e.target.goal4.value],
            "goal_result":[e.target.goal1_result.value,e.target.goal2_result.value,e.target.goal3_result.value,e.target.goal4_result.value],
            "max_score":[e.target.goal1_max.value,e.target.goal2_max.value,e.target.goal3_max.value,e.target.goal4_max.value],
            "score":[e.target.goal1_min.value,e.target.goal2_min.value,e.target.goal3_min.value,e.target.goal4_min.value],
        }
    setGoals(x=>[{...x,data}])
    myForm.reset()
    }
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Part Four: (A) The assessment elements of knowledge and professional behavior to be filled out by the school principal, and 30% is allocated to them.<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2" /></h2>
            <form id="myForm" style={{ display: showMe ? "inline-table" : "none" }} className="w-full bg-white " onSubmit={submitHandler}>
                <table>
                    <thead className="w-full text-white bg-gray-500 ">
                        <tr>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Standards Area</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Number</th>
                            <th className="px-4 py-3 mx-6 text-xs text-sm font-semibold text-left text-center border border-b py-2/4">Indecations</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the first academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the second academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Mark 1-5</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-left border border-b border-black">
                        <tr className="border border-b border-black ">
                            <td className="text-xs text-center border border-b border-black">Education in Jordan

                            </td>


                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mb-16 text-center " name="" >1</p>
                                <p className="w-full mb-16 text-center " name="" >2</p>


                            </td>
                            <td className="border border-b border-black ">
                                <p className="w-full mt-1 mb-6 text-left " name="" >Knowledge of the educational system, awareness of functional legislation, adherence to instructions and acceptance of directives</p>
                                <p className="w-full mt-1 mb-6 text-left " name="" >Adhering to all his professional responsibilities and duties and condemning them efficiently and effectively (morning queue, shift, working hours, class occupancy, implementation of school leadership directives..) and his roles in accordance with educational development</p>


                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mb-12 " id="p4a11" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4a21" placeholder="Type here.."></textarea>


                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mb-12 " id="p4a12" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4a22" placeholder="Type here.."></textarea>



                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mb-12 " id="p4a13" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4a23" placeholder="Type here.."></textarea>


                            </td>
                        </tr>

                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">Personal Philisophy</td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-2 mb-12 text-center " name="" >3</p>
                                <p className="w-full mb-12 text-center " name="" >4</p>
                                <p className="w-full mb-12 text-center " name="" >5</p>
                                <p className="w-full mb-12 text-center " name="" >6</p>
                                <p className="w-full mb-12 text-center ">7</p>
                                <p className="w-full mb-12 text-center ">8</p>
                                <p className="w-full mb-12 text-center ">9</p>
                                <p className="w-full mb-12 text-center ">10</p>
                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mb-8 " name="" >He has a vision, mission, and goals of his own that emanate from the ministry's vision, missions, and goals, and employs them in the educational process</p>
                                <p className="w-full mb-8 " name="" >Commitment to positive values and trends and their dissemination at the school level</p>
                                <p className="w-full mb-8 " name="" >Pay attention to the general appearance and grooming.</p>
                                <p className="w-full mt-1 mb-8 text-left ">Initiative, cooperation and teamwork, participating in school activities and councils</p>
                                <p className="w-full mt-1 mb-8 text-left ">Accepting students and dealing with them with integrity, respect, justice, equality and non-discrimination between them.</p>
                                <p className="w-full mt-1 mb-8 text-left ">Responsible guidance for students in dealing with their problems.</p>
                                <p className="w-full mt-1 mb-8 text-left ">Effective communication and communication with school administration and colleagues</p>
                                <p className="w-full mt-1 mb-8 text-left ">Maintaining school property and directing students to do that</p>

                            </td>
                            <td className="border border-b border-black">
                                <textarea type='textarea' className="w-full mb-12 " id="p4a31" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a41" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a51" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a61" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a71" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a81" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a91" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a101" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea type='textarea' className="w-full mb-12 " id="p4a32" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a42" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a52" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a62" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a72" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a82" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a92" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a102" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea type='textarea' className="w-full mb-12 " id="p4a33" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a43" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a53" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a63" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a73" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a83" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a93" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-7" id="p4a103" placeholder="Type here.."></textarea>
                            </td>
                        </tr>
                        <tr className="text-xs text-center bg-blue-300 border border-b border-black">
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


