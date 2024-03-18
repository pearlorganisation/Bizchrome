import React, { useEffect, useState } from 'react'
import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import { FaCircleCheck } from "react-icons/fa6";
import { useSelector } from 'react-redux'
import Step5 from './steps/PricePlans'


const CreateJobStepForm = () => {
    const { step1, step2, step3, step4, step5 } = useSelector(state => state.business)
    const [step, setStep] = useState(1)
    const steps = [
        {
            name: 'Job Details',
            isFilled: step1?.isFilled

        },
        {
            name: 'Candidate Requirement',
            isFilled: step2?.isFilled
        }
        ,
        {
            name: 'Interview Information',
            isFilled: step3?.isFilled

        },
        {
            name: 'Preview',
            isFilled: step4?.isFilled

        },

    ]
    useEffect(() => {
        console.log("steps::", step)
    }, [step])

    return (
        <div className='w-full h-full bg-white'>
            <div className='min-h-dvh container mx-auto px-4 py-3 space-y-6'>
                <div className='font-semibold text-2xl border-b-2 pb-3'>Post a New Job.</div>
                <div className='flex container mx-auto justify-around relative '>
                    {
                        steps?.map((item, ind) => {
                            return <div className='flex flex-col justify-center items-center relative'>
                                <div className='cursor-pointer w-12 h-12 text-center px-4 py-2 bg-indigo-600 rounded-md text-white grid place-items-center'>
                                    {item?.isFilled ? <FaCircleCheck /> : ind + 1}
                                </div>
                                <p className=''>{item?.name}</p>
                            </div>
                        })

                    }
                </div>
                <div className=''>
                    {
                        step === 1 && <Step1 setStep={setStep} />
                    }
                    {
                        step === 2 && <Step2 setStep={setStep} />
                    }
                    {
                        step === 3 && <Step3 setStep={setStep} />
                    }
                    {
                        step === 4 && <Step4 setStep={setStep} />
                    }


                </div>

            </div>
        </div>
    )
}

export default CreateJobStepForm