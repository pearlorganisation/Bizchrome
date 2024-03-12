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

            <div className='space-y-2'>
                <label className="font-medium">
                    Type of Job
                </label>
                <div className='flex justify-start items-center gap-3 '>
                    {
                        [`Full Time`, `Part Time`].map(item => {
                            return <div className='rounded-3xl border-2 cursor-pointer px-4 py-2 border-indigo-500'>{item}</div>
                        })
                    }
                </div>
            </div>

            <div className='grid grid-cols-2'>
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
            </div>

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