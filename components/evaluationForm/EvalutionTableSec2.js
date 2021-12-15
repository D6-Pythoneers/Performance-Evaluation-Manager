import React from 'react'
import { useState } from 'react';
export default function EvalutionTableSec2 () {
    const [showMe, setShowMe] = useState(false);
    function toggle(){
    setShowMe(!showMe);
}
    return (
        <div>
            <h2 onClick={toggle} className="pb-4 mt-4 font-bold text-left bg-gray-200">Part Two: Teacher's General Information</h2>
            <div style={{display: showMe?"flex":"none"}} className="grid grid-cols-3 mt-5 mb-5">
                <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                    <div className='flex flex-col-2'>
                        <h3>Name</h3>
                        <textarea name="name_area" defaultValue="......................" />

                    </div>
                    <div className='flex flex-col-2'>
                        <h3>Degree</h3>
                        <textarea name="degree_area" defaultValue="......................" />
                    </div>
                    <div className='flex flex-col-2'>
                        <h3>Date</h3>
                        <textarea name="date_area" defaultValue="......................" />
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                    <div className='flex flex-col-2'>
                        <h3>National ID</h3>
                        <textarea name="nid_area" defaultValue="......................" />
                    </div>
                    <div className='flex flex-col-2'>
                        <h3>Dictatorate</h3>
                        <textarea name="dictatorate_area" defaultValue="......................" />
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-2 p-2 m-2 rounded-md">
                    <div className='flex flex-col-2'>
                        <h3>Ministry ID</h3>
                        <textarea name="ministry_area" defaultValue="........................." />
                    
                    </div>
                    <div className='flex flex-col-2'>
                        <h3>School Name</h3>
                        <textarea name="school_area" defaultValue="........................." />
                    
                    </div>
                </div>
            </div>


        </div>
    )
}

