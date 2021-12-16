import React from 'react'
import { useState } from "react"
export default function EvalutionTableSec5_b() {
    const [showMe, setShowMe] = useState(false);
    const [partfiveB, setPartfiveB] = useState({});
    function toggle() {
        setShowMe(!showMe);
    }
    function submitHandler(e){
        e.preventDefault();
       const  myForm=document.getElementById('myForm');
        
        const data={
            "first_evaluation":[
                e.target.p5b161.value,
                e.target.p5b171.value,
                e.target.p5b181.value,
                e.target.p5b191.value,
                e.target.p5b201.value,
                e.target.p5b211.value,
                e.target.p5b221.value,
                e.target.p5b231.value,
                e.target.p5b241.value,
                e.target.p5b251.value,
            ],
            "final_evaluation":[
                e.target.p5b162.value,
                e.target.p5b172.value,
                e.target.p5b182.value,
                e.target.p5b192.value,
                e.target.p5b202.value,
                e.target.p5b212.value,
                e.target.p5b222.value,
                e.target.p5b232.value,
                e.target.p5b242.value,
                e.target.p5b252.value,
            ],
            "score":[
                e.target.p5b163.value,
                e.target.p5b173.value,
                e.target.p5b183.value,
                e.target.p5b193.value,
                e.target.p5b203.value,
                e.target.p5b213.value,
                e.target.p5b223.value,
                e.target.p5b233.value,
                e.target.p5b243.value,
                e.target.p5b253.value,
            ],
        }
        setPartfiveB(x=>[{...x,data}])
    myForm.reset()
    }
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 mb-4 font-bold text-left bg-gray-200">Fifth Part(B): Specialized Standards (10 marks .)
                It is filled out through the specialized part of the educational supervisor’s visit<img src="https://cdn-icons-png.flaticon.com/512/60/60995.png" alt="arrow" className="float-right w-6 mt-2 mr-2"/></h2>
            <form onSubmit={submitHandler} id="myForm" style={{display: showMe?"inline-table":"none"}} className="w-full bg-white ">
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

                                <textarea className="w-full mb-2 " id="p5b161" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b171" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b181" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b191" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b201" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b211" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b221" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b231" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b241" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b251" placeholder="Type here.."></textarea>


                            </td>
                            <td className="px-4 border border-b border-black">
                            <textarea className="w-full mb-2 " id="p5b162" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b172" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b182" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b192" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b202" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b212" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b222" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b232" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b242" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b252" placeholder="Type here.."></textarea>
                            </td>
                            <td className="border border-b border-black">
                            <textarea className="w-full mb-2 " id="p5b163" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b173" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b183" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b193" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b203" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b213" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b223" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b233" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b243" placeholder="Type here.."></textarea>
                                <textarea className="w-full mb-2 " id="p5b253" placeholder="Type here.."></textarea>
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
                <button className="float-right px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 left-2/4 item-left focus:outline-none focus:shadow-outline" type="submit">
                Save
            </button>
            </form>

        </div>
    )
}


