import React from 'react'

const Step3 = () => {
    return (
        <div className=' min-h-[70vh] w-full space-y-5 '>
            <div className='text-lg font-medium'>
                <span>Interview</span>
                <p className='text-sm text-gray-400'> we use this information to find the best candidates for the job.</p>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Type of Interview</p>
                <div class="flex gap-x-4">

                    {
                        [`In-Person-Interview`, `Telephonic/Online`]?.map((item, ind) => {
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

            <div>
                <label className="font-medium">
                    Interview Address
                </label>
                <input
                    type="text"
                    required
                    placeholder=''
                    className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                />
            </div>
        </div>
    )
}

export default Step3