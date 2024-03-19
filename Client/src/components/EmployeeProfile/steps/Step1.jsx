import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { addDataOfStepForm1 } from '../../../features/slices/businessSlice'


const Step1 = ({ setStep }) => {
    const dispatch = useDispatch()
    const { step1 } = useSelector(state => state.business)

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(step1?.isFilled ? {
        defaultValues: {
            companyName: step1?.formData?.companyName,
            position: step1?.formData?.position,
            department: step1?.formData?.department,
            role: step1?.formData?.role,
            typeOfJob: step1?.formData?.typeOfJob,
            location: step1?.formData?.location,
            minSalary: step1?.formData?.minSalary,
            maxSalary: step1?.formData?.maxSalary,
            shift: step1?.formData?.shift

        }
    } : {})


    const onSubmit = (data) => {
        console.log("data::", data)
        dispatch(addDataOfStepForm1({ lable: 'Job Details', isFilled: true, formData: data }))
        setStep(prev => {
            if (prev <= 3) return prev + 1
            else return prev
        })
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='min-h-[70vh] w-full space-y-5 '>
            <div className='text-lg font-medium'>
                <span>Job Details</span>
                <p className='text-sm text-gray-400'> we use this information to find the best candidates for the job.</p>
            </div>
            <div>
                <label className="font-medium">
                    Company You're Hiring For
                </label>
                <input
                    {...register("companyName", { required: true })}
                    type="text"
                    placeholder=''
                    className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                />
                {errors.companyName && <span className='text-red-500'>Company field is required</span>}
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <label className="font-medium">
                        Job Title / Designation
                    </label>
                    <input
                        {...register("position", { required: true })}
                        type="text"
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                    {errors.position && <span className='text-red-500'>Job Title field is required</span>}
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <label className="font-medium">
                        Department
                    </label>
                    <input
                        {...register("department", { required: true })}
                        type="text"
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                    {errors.department && <span className='text-red-500'>Department field is required</span>}
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='space-y-2'>
                    <label className="font-medium">
                        Category / Role
                    </label>
                    <input
                        {...register("role", { required: true })}
                        type="text"
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                    {errors.role && <span className='text-red-500'>Role field is required</span>}
                </div>
            </div>



            <div className=''>
                <p class="font-medium mb-1 ">Type of Job</p>
                <div class="flex gap-x-4">
                    {
                        ['Full Time', 'Part Time']?.map(item => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                                <input
                                    {...register("typeOfJob", { required: true })}
                                    class="peer hidden" value={item} type="radio" id={item} />
                                <label class={`peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border ${errors.typeOfJob ? 'ring-4 ring-red-500/30' : null}`} for={item}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }


                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Location</p>
                <div class="flex gap-x-4">
                    {
                        ['Work From Home', 'Work From Office']?.map(item => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                                <input
                                    {...register("location", { required: true })}
                                    value={item}
                                    class="peer hidden" type="radio" id={item} />
                                <label class={`peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border ${errors.location ? 'ring-4 ring-red-500/30' : null}`} for={item}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }

                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Shift</p>
                <div class="flex gap-x-4">
                    {
                        ['Day', 'Night']?.map(item => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                                <input
                                    {...register("shift", { required: true })}
                                    value={item}
                                    class="peer hidden" type="radio" id={item} />
                                <label class={`peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border ${errors.shift ? 'ring-4 ring-red-500/30' : null}`} for={item}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }

                </div>
            </div>

            {/* <div className='grid grid-cols-2'>
                <div className='space-y-2'>
                    <label className="font-medium">
                        Location
                    </label>
                    <div className='flex justify-start items-center gap-3 '>
                        {
                            [`Work From Office`, `Work From Home`].map(item => {
                                return <div className='rounded-3xl border-2 cursor-pointer px-4 py-2 border-indigo-500'>{item}</div>
                            })
                        }
                    </div>
                    <input
                        type="text"
                        required
                        placeholder='Add a location'
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                </div>
            </div> */}

            <div>
                <label className="font-medium">
                    Salary
                </label>
                <div className='grid md:grid-cols-2'>
                    <div className='flex  items-center gap-3 w-full '>
                        <div className='w-full'>
                            <input
                                {...register("minSalary", { required: true })}
                                type="number"
                                placeholder='Min'
                                className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                            />
                            {errors.maxSalary && <span className='text-red-500'>This field is required</span>}
                        </div>

                        <div className='w-full'>
                            <input
                                {...register("maxSalary", { required: true })}
                                type="number"
                                placeholder='Max'
                                className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                            />
                            {errors.maxSalary && <span className='text-red-500'>This field is required</span>}
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-around py-6'>
                <button
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

export default Step1