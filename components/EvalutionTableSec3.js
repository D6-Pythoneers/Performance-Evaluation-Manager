import React from 'react'

export default function EvalutionTableSec3() {
    return (
        <div>
            <h2 className="pb-4  mb-4 bg-gray-200 text-left font-bold">Part Three: The goals that the teacher calls them to achieve and allocates to them (20%) (to be selected from the teacher’s professional growth plan and the school development plan in agreement between the school principal and the teacher)</h2>
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
                <tbody className="m-8  gap-1 justify-evenly text-gray-700">
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
                    <tr className=" bg-gray-100 col-start-1 col-end-5 ">
                        Totals
                    </tr>

                </tbody>
                <button class="bg-blue-500 hover:bg-blue-700 text-white relative  left-2/4 font-bold item-left py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Submit Form
                    </button>

            </form>

        </div>
    )
}
