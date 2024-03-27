import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { MdModeEditOutline } from "react-icons/md";
import { createJob } from "../../../features/actions/businessActions";
import { useParams } from "react-router-dom";


const FaqsCard = (props) => {

    const answerElRef = useRef()
    const [state, setState] = useState(false)
    const [answerH, setAnswerH] = useState('0px')
    const { faqsList, idx } = props

    const handleOpenAnswer = () => {
        const answerElH = answerElRef.current.childNodes[0].offsetHeight
        setState(!state)
        setAnswerH(`${answerElH + 20}px`)
    }

    return (
        <div
            className="space-y-3 mt-5 overflow-hidden border-b"
            key={idx}
            onClick={handleOpenAnswer}
        >
            <h4 className="cursor-pointer pb-5 flex items-center justify-between text-lg text-gray-700 font-medium">
                {faqsList?.lable}
                <div className="flex  justify-start items-center gap-0">
                    <MdModeEditOutline size={20} className="text-gray-500" />
                    {
                        state ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                        )
                    }
                </div>
            </h4>
            <div
                ref={answerElRef} className="duration-300"
                style={state ? { height: answerH } : { height: '0px' }}
            >
                <div className=" border-t-2 pt-1">
                    {faqsList?.formData != null && Object.entries(faqsList?.formData)?.map(([key, value]) => (
                        <div key={key}>
                            <p className="text-gray-500 flex justify-between">
                                <span className="capitalize px-1 tracking-widest">{key}</span> <span className="font-semibold text-gray-800"> {value} </span>
                            </p>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

const Step4 = ({ setStep }) => {
    const { step1, step2, step3, step4, step5 } = useSelector(state => state.business)
    const dispatch = useDispatch()

    const { companyId } = useParams()

    const faqsList = [
        step1,
        step2,
        step3
    ]

    const onSubmit = () => {
        const {
            typeOfInterview,
            interviewAddress,
            department,
            typeOfJob,
            role,
            shift,
            minimumExperience,
            minimumEducation,
            englishLevel,
            jobTags,
            companyName,
            totalExperience,
            jobTypeName,
            ...rest
        } = { ...step1?.formData, ...step2?.formData, ...step3?.formData }
        const payload = {
            ...rest,
            companyId: companyId,
            company: companyName,
            tags: jobTags?.map(item => {
                return { name: item }
            }),
            jobRequirements: {
                experience: minimumExperience,
                education: minimumEducation,
                communicationLevel: englishLevel
            },
            jobRole: {
                deparment: department,
                employmentType: typeOfJob,
                category: role,
                shift: shift
            }, interviewDetails: {
                address: interviewAddress,
                interviewMode: typeOfInterview
            }
        }

        console.log("form::", payload)
        dispatch(createJob({ jobId: Number(jobTypeName), payload: payload }))
    }


    return (
        <section className="leading-relaxed max-w-screen-xl mt-12 mx-auto px-4 md:px-8 border">
            <div className="mt-14 w-full mx-auto">
                {
                    faqsList.map((item, idx) => (
                        <FaqsCard
                            idx={idx}
                            faqsList={item}
                        />
                    ))
                }
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

                <button type='button' onClick={() => {
                    // setStep(prev => {
                    //     if (prev <= 4) return prev + 1
                    //     else return prev
                    // })
                    onSubmit()
                }} className='px-4 py-2 rounded-md border-2 border-indigo-400 text-white bg-indigo-600'>Next</button> </div>
        </section>
    )
}

export default Step4