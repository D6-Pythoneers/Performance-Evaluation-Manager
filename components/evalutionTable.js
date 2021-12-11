import React from 'react'
import Head from 'next/head'


export default function EvalutionTable() {
    return (
        <div className="flex flex-col justify-center min-h-screen py-2 pr-2">
            <Head>
                <title>Evaluation Form</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className="  text-left font-bold ">
                <img className="center w-20 ml-4 item-center h-24 min-h-full" src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Coat_of_arms_of_Jordan.svg/1200px-Coat_of_arms_of_Jordan.svg.png'></img>
                <h2 className="mr-8 text-left">Hashemite Kingdom of Jordan</h2>
            </header>


            <main className="flex flex-col justify-center w-full flex-1 px-20 text-center ">
                <h2 className="bg-gray-200 text-left font-bold">Part One: Instructions for filling this form</h2>
                <div className="grid grid-col-2">
                </div>
                <div className="grid grid-cols-2 mb-5">
                    <div className="grid grid-rows-1 gap-2 p-2 m-2  rounded-md">
                        <ol className=" w-10/12 list-decimal  text-left text-justify">
                            <li>This form has been continuously dealt with to ensure that the teacher is aware of its contents at the beginning of the year It is filled twice a year (at the end of each semester).</li>
                            <li>The assessment is based on the teaching profession charter, the professional code of conduct, and the general and specialized teacher standards in the description Detailed information for each indicator</li>
                            <li>When dealing with this form, consideration is given to activating the principle of partnership between stakeholders in every part, which will lead to Enhances confidence and commitment to the results required of the teacher to achieve, strengthening strengths and addressing weaknesses</li>
                            <li>The teacher maintains a file of achievements and evidence, updates it continuously, and presents it to those concerned with assessment upon request. </li>
                            <li>Positive facts are monitored if the assessment is excellent, and negative facts are monitored if the assessment is poor</li>
                            <li>No modification may be made to any of the contents of the annual performance appraisal form after it has been approved</li>
                        </ol>
                    </div>
                    <div className="grid grid-rows-1 gap-2 p-2 m-2  rounded-md">
                        <ol className=" w-10/12 text-left text-justify">
                            <li>7. This form is the main reference in preparing the teacher performance evaluation.</li>
                            <li>8. If a penalty is taken against the employee in the evaluation year, his assessment shall be according to what is stipulated in Article (74 a/c) of the Civil Service System No. (9) for the year 2222.</li>
                            <li>The levels/degrees of performance appraisal shall be as follows:-
                                <ul className="list-disc pl-10">
                                    <li>Excellent: The employee has the ability to accomplish work in a way that exceeds the expected level</li>
                                    <li>Very Good: The employee has the ability to accomplish work in a way that exceeds the expected level.</li>
                                    <li>Good: The employee has the ability to complete the work satisfactorily and meets the expected level.</li>
                                    <li>Acceptable: The employee has the ability to complete the work at the minimum expected level.</li>
                                    <li>Poor: The employee's performance is less than the expected and acceptable level and needs improvement and development.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </div>
                <h2 className="bg-gray-200 text-left font-bold">Part One: Instructions for filling this form</h2>
                <div className="grid grid-cols-3 mb-5">
                    <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                        <div className='flex flex-col-2'>
                            <h3>Name</h3>
                            <p>................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>Degree</h3>
                            <p>................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>Date</h3>
                            <p>................</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                        <div className='flex flex-col-2'>
                            <h3>National ID</h3>
                            <p>................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>Dictatorate</h3>
                            <p>................</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                        <div className='flex flex-col-2'>
                            <h3>Ministry ID</h3>
                            <p>................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>School Name</h3>
                            <p>................</p>
                        </div>
                    </div>
                </div>
                <h2 className="mb-4 bg-gray-200 text-left font-bold">Part Three: The goals that the teacher calls them to achieve and allocates to them (20%) (to be selected from the teacher’s professional growth plan and the school development plan in agreement between the school principal and the teacher)</h2>
                <form className="w-full bg-white ">
                    <thead className="  w-full bg-gray-500 text-white">
                        <tr>
                            <th className="w-1 text-center py-3 px-4 uppercase font-semibold text-sm">Number</th>
                            <th className="w-1/3 text-center py-3 px-4 uppercase font-semibold text-sm">Desigred Goal</th>
                            <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Accopliched Goals</th>
                            <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Maximum Mark</th>
                            <th className="text-center py-3 px-4 uppercase font-semibold text-sm">Minimum Mark</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        <tr>
                            <label className=" text-center py-3 px-4  font-semibold text-sm">1</label>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                        </tr>
                        <tr className="bg-gray-100">
                            <label className="text-center py-3 px-4  font-semibold text-sm">2</label>
                            <td className="w-1/3 text-center py-3 px-10">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                        </tr>
                        <tr>
                            <label className="text-center py-3 px-4  font-semibold text-sm">3</label>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                        </tr>
                        <tr className=" border-b border border-black bg-gray-100">
                            <label className="text-center py-3 px-4  font-semibold text-sm">4</label>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                            <td className="w-1/3 text-center py-3 px-4">
                                <input className="border-b border border-black " type="text" name="" />
                            </td>
                        </tr>

                    </tbody>
                </form>
            </main>
            <footer className="flex items-center justify-center w-full h-24 border-t">
                &copy; Performance Evaluation System. All rights reserved.
            </footer>
        </div>


    )
}

