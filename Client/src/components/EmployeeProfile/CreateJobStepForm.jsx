import React, { useEffect, useState } from 'react'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'

const CreateJobStepForm = () => {
    const [step, setStep] = useState(1)
    const steps = [
        {
            name: 'Job Details',

        },
        {
            name: 'Candidate Requirement',

        }
        ,
        {
            name: 'Interview Information',

        },
        {
            name: 'Price Plans',

        }
    ]
    useEffect(() => {
        console.log("steps::", step)
    }, [step])

    return (
        <div className='min-h-dvh container mx-auto px-4 py-3 space-y-6'>
            <div className='flex container mx-auto justify-around'>
                {
                    steps?.map((item, ind) => {
                        return <div className='flex flex-col justify-center items-center relative'>
                            <div className='cursor-pointer w-12 text-center px-4 py-2 bg-indigo-600 rounded-md text-white'> {ind + 1} </div>
                            <p className=''>{item?.name}</p>
                        </div>
                    })

                }
            </div>
            <div className=''>
                {
                    step === 1 && <Step1 />
                }
                {
                    step === 2 && <Step2 />
                }
                {
                    step === 3 && <Step3 />
                }
                {
                    step === 4 && <Step4 />
                }
            </div>
            <div className='flex justify-around border-t-2 py-6'> <button onClick={() => {
                setStep(prev => {
                    if (prev >= 2) return prev - 1
                    else return prev
                })
            }} className='px-4 py-2 rounded-md border-2 border-indigo-400 text-white bg-indigo-600'>Back</button> <button onClick={() => {
                setStep(prev => {
                    if (prev <= 3) return prev + 1
                    else return prev
                })
            }} className='px-4 py-2 rounded-md border-2 border-indigo-400 text-white bg-indigo-600'>Next</button> </div>
        </div>
    )
}

export default CreateJobStepForm