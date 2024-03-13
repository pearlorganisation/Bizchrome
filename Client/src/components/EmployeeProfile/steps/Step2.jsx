import React, { useState } from 'react'
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Step2 = () => {
    const [titles, setJobTitles] = useState([])
    const [title, setTitle] = useState('')
    return (
        <div className='min-h-[70vh] w-full space-y-5 '>
            <div className='text-lg font-medium'>
                <span>Candidate Requirements</span>
                <p className='text-sm text-gray-400'> we use this information to find the best candidates for the job.</p>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Minimum Education</p>
                <div class="flex gap-x-4">

                    {
                        [`10th Or Below 10th`, `12th Pass`, `Diploma`, `ITI`, `Graduate`, `Post Graduate`]?.map((item, ind) => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                                <input class="peer hidden" type="radio" name={`radio1`} id={`${item}`} />
                                <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for={`${item}`}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Total Experienced Required</p>
                <div class="flex gap-x-4">

                    {
                        [`Any`, `Experienced Only`, `Freshers Only`]?.map((item, ind) => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                                <input class="peer hidden" type="radio" name={`radio1`} id={`${item}`} />
                                <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for={`${item}`}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Minimum Experienced Required</p>
                <div class="flex gap-x-4">

                    {
                        [`6 Months`, `1 Year`, `2 Year`, `3 Year`, `5 Year`]?.map((item, ind) => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                                <input class="peer hidden" type="radio" name={`radio1`} id={`${item}`} />
                                <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for={`${item}`}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Candidate from which job title can apply?</p>
                <div class="grid grid-cols-2 w-full mt-2">
                    <div className='space-y-3'>
                        <div className='flex gap-3'>
                            {
                                titles?.map((item, indexToRemove) => {
                                    return <div className='px-4 py-1 rounded-3xl bg-indigo-100 border-2 ring-4 ring-indigo-500/40 border-indigo-500 relative group cursor-pointer'    >{item} <span onClick={() => {
                                        setJobTitles(prev => {
                                            const temp = titles.filter((_, idx) => idx != indexToRemove)
                                            return temp
                                        })
                                    }} className='hidden group-hover:block absolute bg-red-400 border-2  border-red-500 rounded-full text-white top-[-0.6rem] right-0'><IoMdClose /></span></div>
                                })
                            }
                        </div>
                        <div className='flex justify-start  gap-3 '>

                            <input
                                type="text"
                                onChange={(e) => { setTitle(e.target.value) }}
                                required
                                value={title}
                                placeholder=''
                                className="w-full focus:ring-4 ring-indigo-500/30 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                            />
                            <button onClick={() => {
                                title.length != 0 ? setJobTitles(prev => {
                                    return [...prev, title]
                                }) : null
                                setTitle('')
                            }} className='px-4 py-2 rounded-lg bg-indigo-500 text-white'><IoMdAdd /></button>
                        </div>
                    </div>

                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">English Level Required</p>
                <div class="flex gap-x-4">

                    {
                        [`No English`, `Basic English`, `Good English`]?.map((item, ind) => {
                            return <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-2 font-medium text-gray-700">
                                <input class="peer hidden" type="radio" name={`radio1`} id={`${item}`} />
                                <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for={`${item}`}> </label>
                                <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                                <span class="pointer-events-none z-10">{item}</span>
                            </div>
                        })
                    }
                </div>
            </div>

            <div className='grid grid-cols-2'>
                <div>
                    <label className="font-medium">
                        Job Description
                    </label>
                    <textarea
                        className="w-full resize-none focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                        name="" id="" cols="30" rows="10"></textarea>
                </div>
            </div>


        </div>
    )
}

export default Step2