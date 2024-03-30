import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllJobById } from '../../features/actions/businessActions'
import { useParams } from 'react-router-dom'

const MyJobs = () => {
    const dispatch = useDispatch()
    const { businessData } = useSelector(state => state.business)
    const { companyId } = useParams()
    useEffect(() => {
        dispatch(getAllJobById({ companyId }))
    }, [])

    return (
        <div className='container mx-auto py-4 font-sans'>
            <div className='font-semibold py-2 '>All Jobs (20)</div>
            <div className='space-y-3'>
                {
                    Array.isArray(businessData) && businessData?.length > 0 && businessData?.map(item => {
                        return <div className='grid grid-cols-3 bg-blue-100 px-6 py-4 rounded-md place-items-center'>
                            <div>
                                <p className='font-medium text-xl'>{item?.jobRole?.category}</p>
                                <p className='line-clamp-1'><span className='border-r-2 border-r-gray-400 pr-2 mr-2'>{item?.interviewDetails?.address}</span> <span className='border-r-2 border-r-gray-400 pr-2 mr-2'>Posted on: 18 Mar 2024</span> <span>Abhishek Bahuguna</span></p>
                            </div>
                            {/* <div className='rounded-lg bg-white px-4 py-2 grid place-items-center'> <span className='font-medium'>1</span> Action Pending </div> */}
                            <div className='rounded-lg bg-white px-4 py-2 grid place-items-center'> <span className='font-medium'>0</span>  View Applicants  </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default MyJobs