import React from 'react'


export default function EvalutionTableSec2() {
    return (
        <div>
            <h2 className="pb-4 bg-gray-200 text-left font-bold">Part Two: Teacher's General Information</h2>
                <div className="grid grid-cols-3 mb-5">
                    <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                        <div className='flex flex-col-2'>
                            <h3>Name</h3>
                            <p>.......................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>Degree</h3>
                            <p>.....................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>Date</h3>
                            <p>..........................</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                        <div className='flex flex-col-2'>
                            <h3>National ID</h3>
                            <p>....................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>Dictatorate</h3>
                            <p>.....................</p>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                        <div className='flex flex-col-2'>
                            <h3>Ministry ID</h3>
                            <p>.........................</p>
                        </div>
                        <div className='flex flex-col-2'>
                            <h3>School Name</h3>
                            <p>....................</p>
                        </div>
                    </div>
                </div>
            
        </div>
    )
}

