import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getJobApplicants } from '../../features/actions/jobActions'
import { useParams } from 'react-router-dom'

const JobApplicants = () => {
    const { isLoading, jobId } = useParams()
    const dispatch = useDispatch()
    const { jobApplicants } = useSelector(state => state.business)
    useEffect(() => {
        dispatch(getJobApplicants({ jobId }))
    }, [])


    return (
        <div>
            <section className="py-16">
                <div className=" mx-auto px-4 md:px-8">
                    <div className="text-left">
                        <h1 className="text-gray-800 text-xl font-extrabold sm:text-2xl text-left">Job Applicants</h1>
                        <p className="text-gray-600 mt-2">Extend and automate your workflow by using integrations for your favorite tools.</p>
                    </div>
                    {

                        isLoading ? <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                Array(6).fill(true).map(item => {
                                    return <div class="border rounded-lg animate-pulse">
                                        <div class="flex items-start justify-between p-4">
                                            <div class="space-y-2">
                                                <div class="shrink-0">
                                                    <div class="relative flex h-12 w-12 items-center justify-center rounded-full bg-gray-200">

                                                    </div>
                                                </div>
                                                <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                                                <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                                                <div class="h-4 bg-gray-200 rounded w-2/3"></div>

                                            </div>
                                            <div class="h-8 bg-gray-200 rounded mb-1 w-1/4"></div>
                                        </div>
                                        <div class="py-5 px-4 border-t text-right">
                                            <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                                        </div>
                                    </div>
                                })
                            }
                        </div> : <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {
                                Array.isArray(jobApplicants) && jobApplicants.length > 0 ?
                                    jobApplicants?.map((item, idx) => (
                                        <li className="border rounded-lg">
                                            <div className="flex items-start justify-between p-4">
                                                <div className="space-y-2">
                                                    <div className="shrink-0">
                                                        <a
                                                            href="#"
                                                            className="relative flex h-12 w-12 items-center justify-center rounded-full text-white"
                                                        >
                                                            <img
                                                                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                                                                alt="user name"
                                                                title="user name"
                                                                width="48"
                                                                height="48"
                                                                className="max-w-full rounded-full"
                                                            />

                                                        </a>
                                                    </div>
                                                    <p className="text-gray-600 text-sm"> <span className='font-semibold'>Name : </span>{item?.fullName}</p>
                                                    <p className="text-gray-600 text-sm"> <span className='font-semibold'>Email : </span> {item?.email}</p>
                                                    <p className="text-gray-600 text-sm"> <span className='font-semibold'>Mobile Number : </span> {item?.mobile}</p>
                                                </div>
                                                <a href={`${item?.resumePath}`} target='_blank' className="text-gray-700 text-sm border rounded-lg px-3 py-2 duration-150 hover:bg-gray-100">Download</a>
                                            </div>
                                            <div className="py-5 px-4 border-t text-right">
                                                <a href={`${item?.resumePath}`} target='_blank' className="text-indigo-600 hover:text-indigo-500 text-sm font-medium">
                                                    View
                                                </a>
                                            </div>
                                        </li>
                                    )) : 'No Data Found'

                            }
                        </ul>
                    }

                </div >
            </section >
        </div >
    )
}

export default JobApplicants