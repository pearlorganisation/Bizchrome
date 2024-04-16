import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux';
import { addDataOfStepForm3 } from '../../../features/slices/businessSlice';

const Step3 = ({ setStep }) => {
    const dispatch = useDispatch()
    const { step3 } = useSelector(state => state.business)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(step3?.isFilled ? {
        defaultValues: {
            typeOfInterview: step3?.formData?.typeOfInterview,
            interviewAddress: step3?.formData?.interviewAddress,


        }
    } : {})

    const onSubmit = (data) => {
        console.log("data::", data)
        dispatch(addDataOfStepForm3({ lable: 'Interview Information', isFilled: true, formData: data }))
        setStep(prev => {
            if (prev <= 3) return prev + 1
            else return prev
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className=' min-h-[70vh] w-full space-y-5 flex flex-col justify-between '>
            <div className='space-y-5'>
                <div className='text-lg font-medium'>
                    <span>Interview</span>
                    <p className='text-sm text-gray-400'> we use this information to find the best candidates for the job.</p>
                </div>

                <div className=''>
                    <p className="font-medium mb-1 ">Type of Interview</p>
                    <div className="flex gap-x-4">

                        {
                            [`In-Person-Interview`, `Telephonic/Online`]?.map((item, ind) => {
                                return <div className="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                                    <input
                                        {...register("typeOfInterview", { required: true })}
                                        className="peer hidden" type="radio" value={item} id={`${item}`} />
                                    <label className={`peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border ${errors.typeOfInterview ? 'ring-4 ring-red-500/30' : null}`} for={`${item}`}> </label>
                                    <div className="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                    <span className="pointer-events-none z-10">{item}</span>
                                </div>
                            })
                        }
                    </div>
                </div>

                <div>
                    <label className="font-medium">
                        Interview Address
                    </label>
                    <textarea
                        {...register("interviewAddress", { required: true })}
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                        id="" cols="30" rows="10"></textarea>
                    {errors.interviewAddress && <span className='text-red-500'>Interview Address is required</span>}

                </div>
            </div>
            <div className='flex justify-around py-6'>
                <button
                    type='button'
                    onClick={() => {
                        setStep(prev => {
                            if (prev >= 2) return prev - 1
                            else return prev
                        })
                    }}
                    className='px-4 py-2 rounded-md border-2 border-indigo-400 text-white bg-indigo-600'>Back</button>

                <button type='submit' onClick={() => {

                }} className='px-4 py-2 rounded-md border-2 border-indigo-400 text-white bg-indigo-600'>Next</button> </div>
        </form>
    )
}

export default Step3