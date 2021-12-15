import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec4_b() {
    const [showMe, setShowMe] = useState(false);
    function toggle() {
        setShowMe(!showMe);
    }
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Fourth Part: (B) Evaluation elements related to career excellence and professional achievements to be filled out by the school principal and allocated for it(10%)<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2" /></h2>
            <form style={{ display: showMe ? "inline-table" : "none" }} className="w-full bg-white ">
                <table>
                    <thead className="w-full text-white bg-gray-500 ">
                        <tr>
                            <th className="w-1 px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Field</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b h-1/3">Point of view</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Number</th>
                            <th className="px-4 py-3 mx-6 text-xs text-sm font-semibold text-left text-center border border-b py-2/4">Indecations</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the first academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">The first review stage/ end of the second academic semester Domain Aspect No. Indicators Rating / Positive and negative facts, if any</th>
                            <th className="px-4 py-3 text-xs text-sm font-semibold text-left text-center border border-b">Mark 1-5</th>
                        </tr>
                    </thead>
                    <tbody className="text-xs text-left border border-b border-black">
                        <tr>
                            <td className="text-xs text-center border border-b border-black">Personal philosophy and professional ethics

                            </td>
                            <td className="text-xs text-center border border-b border-black">Values, attitudes and professional behavior

                            </td>

                            <td className="border border-b border-black ">
                                <p className="w-full mb-12 text-center " name="" >1</p>
                                <p className="w-full mb-12 text-center " name="" >2</p>
                                <p className="w-full mb-12 text-center " name="" >3</p>
                                <p className="w-full mb-12 text-center " name="" >4</p>

                            </td>
                            <td className="border border-b border-black ">
                                <p className="w-full mb-8 " name="" >Participation in teams, clubs and school committees</p>
                                <p className="w-full mb-8 " name="" >Relationship with the local community and parents</p>
                                <p className="w-full mb-8 " name="" >Providing solutions and suggestions related to the school’s technical and administrative matters</p>
                                <p className="w-full mb-8 " name="" >Participation in the implementation of the school's development and procedural plan</p>

                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mb-10 " id="p4b11" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b21" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b31" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b41" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mb-10 " id="p4b12" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b22" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b32" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b42" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black ">
                                <textarea className="w-full mb-10 " id="p4b13" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b23" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b33" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-10 " id="p4b43" placeholder="Type here.."></textarea>

                            </td>
                        </tr>
                        <tr className="border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">learning environment</td>
                            <td className="text-xs text-center border border-b border-black">Innovation and creativity</td>
                            <td className="border border-b border-black">
                                <p className="w-full mt-1 mb-8 text-center " name="" >5</p>
                                <p className="w-full mt-1 mb-8 text-center " name="" >6</p>

                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mb-8 " name="" >Engage his students in local, national and international competitions</p>
                                <p className="w-full mb-8 " name="" >Get national and international awards</p>
                            </td>
                            <td className="border border-b border-black">

                                <textarea className="w-full mb-8 " id="p4b51" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-4 " id="p4b61" placeholder="Type here.."></textarea>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-8 " id="p4b52" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-4 " id="p4b62" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-8 " id="p4b53" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-4 " id="p4b63" placeholder="Type here.."></textarea>
                            </td>

                        </tr>
                        <tr className="text-xs text-center border border-b border-black">
                            <td className="text-xs text-center border border-b border-black">Professional development</td>
                            <td className="text-xs text-center border border-b border-black">
                                <p className="w-full mt-1 mb-6 text-center ">Professional development methodology</p>
                                <p className="w-full mt-1 mb-6 text-center ">Hiring Professional Development</p>
                                <p className="w-full mt-1 mb-6 text-center ">Sustainable professional development</p>
                            </td>
                            <td className="border border-b border-black">
                                <p className="w-full mb-16 text-center ">7</p>
                                <p className="w-full mb-16 text-center ">8</p>
                                <p className="w-full mb-16 text-center ">9</p>
                                <p className="w-full mb-16 text-center ">10</p>
                            </td>
                            <td className="text-justify border border-b border-black">
                                <p className="w-full mt-1 mb-10 text-left ">Participation in educational development initiatives and programs (adopting a culture of development)</p>
                                <p className="w-full mt-1 mb-10 text-left ">Participation in professional learning communities, training workshops, and interaction with educational support</p>
                                <p className="w-full mt-1 mb-10 text-left ">Action research and publications that contribute to the educational process</p>
                                <p className="w-full mt-1 mb-10 text-left ">Follow up on educational and technological developments and keep abreast of them</p>

                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-12 " id="p4b71" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b81" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b91" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b101" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-12 " id="p4b72" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b82" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b92" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b102" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-12 " id="p4b73" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b83" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b93" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-12 " id="p4b103" placeholder="Type here.."></textarea>
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

        </div>
    )
}

