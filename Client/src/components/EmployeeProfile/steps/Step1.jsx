import React from 'react'

const Step1 = () => {
    return (
        <div className='min-h-[70vh] w-full space-y-5 '>
            <div className='text-lg font-medium'>
                <span>Job Details</span>
                <p className='text-sm text-gray-400'> we use this information to find the best candidates for the job.</p>
            </div>
            <div>
                <label className="font-medium">
                    Company You're Hiring For
                </label>
                <input
                    type="text"
                    required
                    placeholder=''
                    className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                />
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <label className="font-medium">
                        Job Title / Designation
                    </label>
                    <input
                        type="text"
                        required
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <label className="font-medium">
                        Department
                    </label>
                    <input
                        type="text"
                        required
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                </div>
            </div>
            <div className='grid grid-cols-2'>
                <div className='space-y-2'>
                    <label className="font-medium">
                        Category / Role
                    </label>
                    <input
                        type="text"
                        required
                        placeholder=''
                        className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                    />
                </div>
            </div>



            <div className=''>
                <p class="font-medium mb-1 ">Type of Job</p>
                <div class="flex gap-x-4">
                    <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input class="peer hidden" type="radio" name="radio1" id="fullTime" />
                        <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="fullTime"> </label>
                        <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                        <span class="pointer-events-none z-10">Full Time</span>
                    </div>
                    <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input class="peer hidden" type="radio" name="radio1" id="partTime" />
                        <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200  peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="partTime"> </label>
                        <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                        <span class="pointer-events-none z-10">Part Time</span>
                    </div>
                </div>
            </div>

            <div className=''>
                <p class="font-medium mb-1 ">Location</p>
                <div class="flex gap-x-4">
                    <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input class="peer hidden" type="radio" name="radio2" id="workFromOffice" checked />
                        <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="workFromOffice"> </label>
                        <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                        <span class="pointer-events-none z-10">Work From Office</span>
                    </div>
                    <div class="relative flex w-56 items-center justify-center rounded-xl bg-gray-50 px-4 py-3 font-medium text-gray-700">
                        <input class="peer hidden" type="radio" name="radio2" id="workFromHome" checked />
                        <label class="peer-checked:border-indigo-400 peer-checked:bg-indigo-200 peer-checked:ring-4 ring-indigo-500/30 absolute top-0 h-full w-full cursor-pointer rounded-xl border" for="workFromHome"> </label>
                        <div class="peer-checked:border-transparent peer-checked:bg-indigo-400 peer-checked:ring-2 absolute left-4 h-5 w-5 rounded-full border-2 border-gray-300 bg-gray-200 ring-indigo-400 ring-offset-2"></div>
                        <span class="pointer-events-none z-10">Work From Home</span>
                    </div>
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
                    <div className='flex justify-start items-center gap-3'>
                        <input
                            type="text"
                            required
                            placeholder=''
                            className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                        />
                        <span>To</span>
                        <input
                            type="text"
                            required
                            placeholder=''
                            className="w-full focus:ring-4 ring-indigo-500/30 mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Step1