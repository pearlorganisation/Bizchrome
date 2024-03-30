import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getAllJobById } from '../../features/actions/businessActions'
import { Link, useParams } from 'react-router-dom'

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
                        return <Link to={`/business/${item?._id}/jobApplicants`}>

                            <div className='flex justify-between bg-blue-100 px-6 py-4 rounded-md place-items-center'>
                                <div>
                                    <p className='font-medium text-xl'>{item?.jobRole?.category}</p>
                                    <p className='line-clamp-1'><span className='border-r-2 border-r-gray-400 pr-2 mr-2'>{item?.interviewDetails?.address}</span> <span className='border-r-2 border-r-gray-400 pr-2 mr-2'>{new Date(item?.createdAt).toDateString()}</span> <span>{item?.company}</span></p>
                                </div>

                                <div className='rounded-lg bg-white px-4 py-2 grid place-items-center cursor-pointer font-medium'>  View Applicants  </div>
                            </div></Link>
                    })
                }
            </div>
        </div>
    )
}

export default MyJobs