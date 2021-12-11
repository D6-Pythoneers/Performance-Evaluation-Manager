import React from 'react'
import Head from 'next/head'
export default function EvalutionTable() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">

                <Head>
                    <title>Evaluation Form</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <header>
                    <img className="h-24 min-h-full" src='https://bohatala.com/wp-content/uploads/2015/08/performance-management.jpg'></img>
                </header>

                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <table className="w-2/3 py-8 my-10 border border-black mt-0 mb-8  ">
                        <thead className=" border border-black ">
                            <tr >
                                <th>Song</th>
                                <th>Artist</th>
                                <th>Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td>Malcolm Lockyer</td>
                                <td>1961</td>
                            </tr>
                            <tr>
                                <td>Witchy Woman</td>
                                <td>The Eagles</td>
                                <td>1972</td>
                            </tr>
                            <tr>
                                <td>Shining Star</td>
                                <td>Earth, Wind, and Fire</td>
                                <td>1975</td>
                            </tr>
                        </tbody>
                    </table>
                </main>

                <footer className="flex items-center justify-center w-full h-24 border-t">
                    &copy; Performance Evaluation System. All rights reserved.
                </footer>
            </div>


        </div>
    )
}

