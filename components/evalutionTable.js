import React from 'react'
import Head from 'next/head'

import EvalutionTableHeader from './evaluationForm/EvalutionTableHeader'
import EvalutionTableSec1 from './evaluationForm/EvalutionTableSec1'
import EvalutionTableSec2 from './evaluationForm/EvalutionTableSec2'
import EvalutionTableSec3 from './evaluationForm/EvalutionTableSec3'
import EvalutionTableSec4 from './evaluationForm/EvalutionTableSec4'
import EvalutionTableSec4_b from './evaluationForm/EvalutionTableSec4_b'
import EvalutionTableSec5 from './evaluationForm/EvalutionTableSec5'
import EvalutionTableSec5_b from './evaluationForm/EvalutionTableSec5_b'
import EvalutionTableSec5_c from './evaluationForm/EvalutionTableSec5_c'
import EvalutionTableSec6 from './evaluationForm/EvalutionTableSec6'
import EvalutionTableFooter from './evaluationForm/EvalutionTableFooter'


export default function EvalutionTable ({ user, school,evaluations }) {

    return (
        <div className="flex flex-col justify-center min-h-screen py-2 pr-2">
            <Head>
                <title>Evaluation Form</title>
                <link rel="icon" href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Coat_of_arms_of_Jordan.svg/1200px-Coat_of_arms_of_Jordan.svg.png" />
            </Head>

            <EvalutionTableHeader />



            <main className="flex flex-col justify-center w-full flex-1 px-20 text-center ">
                <EvalutionTableSec1 />
                <EvalutionTableSec2 user={user} school={school} evaluations={evaluations}/>
                <EvalutionTableSec3 user={user} school={school} evaluations={evaluations} />
                <EvalutionTableSec4 />
                <EvalutionTableSec4_b />
                <EvalutionTableSec5 />
                <EvalutionTableSec5_b />
                <EvalutionTableSec5_c />
                <EvalutionTableSec6 />
            </main>



            <EvalutionTableFooter />
        </div>


    )
}

