import React from 'react'
import Head from 'next/head'
import EvalutionTableHeader from './EvalutionTableHeader'

import EvalutionTableSec1 from './EvalutionTableSec1'
import EvalutionTableSec2 from './EvalutionTableSec2'
import EvalutionTableSec3 from './EvalutionTableSec3'

import EvalutionTableFooter from './EvalutionTableFooter'


export default function EvalutionTable() {
    return (
        <div className="flex flex-col justify-center min-h-screen py-2 pr-2">
            <Head>
                <title>Evaluation Form</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Coat_of_arms_of_Jordan.svg/1200px-Coat_of_arms_of_Jordan.svg.png" />
            </Head>

            <EvalutionTableHeader />



            <main className="flex flex-col justify-center w-full flex-1 px-20 text-center ">
                <EvalutionTableSec1 />
                <EvalutionTableSec2 />
                <EvalutionTableSec3 />
            </main>



            <EvalutionTableFooter />
        </div>


    )
}

