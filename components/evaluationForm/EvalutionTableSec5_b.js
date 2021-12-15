import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec5_b() {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe);
}
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Fifth Part(B): Specialized Standards (10 marks .)
                It is filled out through the specialized part of the educational supervisor’s visit</h2>
            <form style={{display: showMe?"inline-table":"none"}} className="w-full bg-white ">
                <table>

                    <tbody className="text-xs text-left border border-b border-black">

                        <tr className="border border-b border-black">
                            <td className="px-6 text-xs text-center border border-b border-black">Major</td>
                            <td className="pl-24 text-xs text-center border border-b border-black">

                            </td>

                            <td className="px-8 text-center border border-b border-black">
                                <p className="w-full mb-7" name="" >16</p>
                                <p className="w-full mb-7" name="" >17</p>
                                <p className="w-full mb-7" name="" >18</p>
                                <p className="w-full mb-7" name="" >19</p>
                                <p className="w-full mb-7" name="" >20</p>
                                <p className="w-full mb-7" name="" >21</p>
                                <p className="w-full mb-7" name="" >22</p>
                                <p className="w-full mb-7" name="" >23</p>
                                <p className="w-full mb-7" name="" >24</p>
                                <p className="w-full mb-7" name="" >25</p>

                            </td>
                            <td className="px-24 border border-b border-black">

                            </td>
                            <td className="border border-b border-black">

                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>


                            </td>
                            <td className="px-4 border border-b border-black">
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " name="" placeholder="Type here.."></textarea>
                            </td>

                        </tr>

                        <tr className="text-xs text-center bg-blue-300 border border-b border-black">
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black"></td>
                            <td className="border border-b border-black">The scores for parts A and B are added up and divided by 5.</td>
                            <td className="border border-b border-black"></td>

                        </tr>


                    </tbody>

                </table>
            </form>

        </div>
    )
}


