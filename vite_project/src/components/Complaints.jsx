import React from 'react'

function Complaints({ complaints }) {
    return (
        <>
            {complaints ?

                complaints.map((item) => {
                    return (

                        <div className='bg-slate-600 w-full text-orange-100 rounded-lg flex p-3 shadow-md shadow-slate-500/30'>
                            <div className='w-full ' >
                                <p >
                                    {item.description}                    </p>
                            </div>
                            <div className='w-full flex justify-between  '>
                                <div>

                                    <h1>{item.status}</h1>
                                </div>
                                <div>

                                    <h1>{new Date(item.date).toLocaleDateString('en-US')}</h1>
                                </div>
                            </div>
                        </div>
                    )
                })

                :
                <h1 className='text-white'>No complaints</h1>



            }

        </>
    )
}

export default Complaints
