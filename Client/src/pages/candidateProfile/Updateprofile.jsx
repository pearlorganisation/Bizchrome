import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form';
import { IoMdAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";

const Updateprofile = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        resetField,
        control,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: { experiences: [{ company: "", designation: '' }] },
    });

    const { fields, append, remove } = useFieldArray({
        control,
        name: "experiences",
    });


    const [jobTags, setJobTags] = useState([])
    const [title, setTitle] = useState('')
    return (
        <div className='font-sans'>
            <div className="flex flex-col border-b py-4 sm:flex-row sm:items-start container mx-auto">
                <div className="shrink-0 mr-auto sm:py-3">
                    <p className="font-medium">Profile Details</p>
                    <p className="text-sm text-gray-600">Edit your profile details</p>
                </div>
                <button className="mr-2 hidden rounded-lg border-2 px-4 py-2 font-medium text-gray-500 sm:inline focus:outline-none focus:ring hover:bg-gray-200">
                    Cancel
                </button>
                <button className="hidden rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white sm:inline focus:outline-none focus:ring hover:bg-blue-700">
                    Save
                </button>
            </div>

            <div className='min-h-dvh grid grid-cols-2 gap-3 container mx-auto'>
                <div className="my-4 w-full border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">
                    <p className='font-semibold'>Personal Info.</p>
                    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                        <p className="shrink-0 w-32 font-medium">Name</p>
                        <input
                            placeholder="First Name"
                            className="mb-2 w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 sm:mr-4 sm:mb-0 focus:ring-1"
                        />
                        <input
                            placeholder="Last Name"
                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                        <p className="shrink-0 w-32 font-medium">Username</p>
                        <input
                            placeholder="Username"
                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                        <p className="shrink-0 w-32 font-medium">Mobile Number</p>
                        <input
                            type='number'
                            placeholder="Mobile Number"
                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4 border-b py-4 sm:flex-row">
                        <p className="shrink-0 w-32 font-medium">Email</p>
                        <input
                            placeholder="your.email@domain.com"
                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4 py-4  lg:flex-row">
                        <div className="shrink-0 w-32  sm:py-4">
                            <p className="mb-auto font-medium">Avatar</p>
                            <p className="text-sm text-gray-600">Change your avatar</p>
                        </div>
                        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
                            <img
                                src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                                className="h-16 w-16 rounded-full"
                            />
                            <p className="text-sm text-gray-600">
                                Drop your desired image file here to start the upload
                            </p>
                            <input
                                type="file"
                                className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 py-4  lg:flex-row">
                        <div className="shrink-0 w-32  sm:py-4">
                            <p className="mb-auto font-medium">Upload Resume</p>
                            <p className="text-sm text-gray-600">Change your Resume</p>
                        </div>
                        <div className="flex h-56 w-full flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-gray-300 p-5 text-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135692.png"
                                className="h-16 w-16"
                            />
                            <p className="text-sm text-gray-600">
                                Drop your desired resume file here to start the upload
                            </p>
                            <input
                                type="file"
                                className="max-w-full rounded-lg px-2 font-medium text-blue-600 outline-none ring-blue-600 focus:ring-1"
                            />
                        </div>
                    </div>

                </div>
                <div className="my-4 w-full border px-4 shadow-xl sm:mx-4 sm:rounded-xl sm:px-4 sm:py-4 md:mx-auto">

                    <div className=''>
                        <p className="font-medium mb-1 ">Skills</p>
                        <div className="grid grid-cols-2 w-full">
                            <div className='space-y-2'>
                                {
                                    jobTags.length > 0 && <div className='flex gap-3 pb-1'>
                                        {
                                            jobTags?.map((item, indexToRemove) => {
                                                return <div className='px-4 py-1 rounded-3xl bg-indigo-100 border-2 ring-4 ring-indigo-500/40 border-indigo-500 relative group cursor-pointer'    >{item} <span onClick={() => {
                                                    setJobTags(prev => {
                                                        const temp = jobTags.filter((_, idx) => idx != indexToRemove)
                                                        return temp
                                                    })
                                                }} className='hidden group-hover:block absolute bg-red-400 border-2  border-red-500 rounded-full text-white top-[-0.6rem] right-0'><IoMdClose /></span></div>
                                            })
                                        }
                                    </div>
                                }
                                <div className='flex justify-start  gap-3 '>

                                    <input
                                        type="text"
                                        onChange={(e) => { setTitle(e.target.value) }}
                                        value={title}
                                        placeholder=''
                                        className="w-full focus:ring-4 ring-indigo-500/30 px-3 py-2 text-gray-500 bg-transparent outline-none border-2 focus:border-indigo-500 transition-all shadow-sm rounded-lg"
                                    />
                                    <button type='button' onClick={() => {
                                        title.length != 0 ? setJobTags(prev => {
                                            return [...prev, title]
                                        }) : null
                                        setTitle('')
                                    }} className='px-4 py-2 rounded-lg bg-indigo-500 text-white'><IoMdAdd /></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col gap-4 border-b py-4">
                        <p className="shrink-0 w-32 font-medium">Tag Line</p>
                        <input
                            placeholder="Product & UI/UX Expert | React & Node "
                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                        />
                    </div>
                    <div className="flex flex-col gap-4  py-4">
                        <div className='flex justify-between'>
                            <p className="shrink-0 w-32 font-medium bordb">Experience </p>
                            <button
                                onClick={() => append({ company: "", designation: '' })}
                                className='bg-indigo-500 text-white px-2 rounded active:scale-95 transition-all' type="button"><IoMdAdd /></button>
                        </div>
                        {
                            fields.map((it, idx) => {
                                console.log(it)
                                return <div className='group'>
                                    <div className="flex flex-col gap-4 ">
                                        <div className='flex justify-between '>
                                            <p className="shrink-0 w-32 font-medium">Company Name</p>
                                            {
                                                fields.length > 0 && <button
                                                    onClick={() => remove(idx)}
                                                    className=' text-red-500 group-hover:block hidden px-2 rounded active:scale-95 transition-all' type="button"><MdDelete /></button>
                                            }
                                        </div>
                                        <input
                                            placeholder="Company Name"
                                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-4 border-b py-4">
                                        <p className="shrink-0 w-32 font-medium">Designation</p>
                                        <input
                                            placeholder="Product & UI/UX Designer | Apr 2018 - Present | Pune, India"
                                            className="w-full rounded-md border bg-white px-2 py-2 outline-none ring-blue-600 focus:ring-1"
                                        />
                                    </div>
                                </div>
                            })
                        }

                    </div>


                </div>
            </div>
        </div>

    )
}

export default Updateprofile