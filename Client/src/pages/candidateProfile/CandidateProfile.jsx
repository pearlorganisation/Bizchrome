import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const CandidateProfile = () => {

    const { userMetaData, isLoading } = useSelector(state => state.auth)
    return (
        <>

            <div className="bg-white p-8 rounded-lg shadow-md container mx-auto min-h-dvh">

                <div className="grid md:grid-cols-3 gap-8 mt-6">
                    <div className="col-span-1 space-y-6">
                        <div className="space-y-4">
                            <div className="shrink-0">
                                <a
                                    href="#"
                                    className="relative flex h-16 w-16 items-center justify-center rounded-full text-white"
                                >
                                    <img
                                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
                                        alt="user name"
                                        title="user name"

                                        className="max-w-full rounded-full"
                                    />

                                </a>

                            </div>
                            <div>
                                <h2 className="text-2xl font-semibold">{userMetaData?.firstName} {userMetaData?.lastName}</h2>
                                <p className="text-sm text-gray-500">UI/UX Designer</p>
                            </div>
                            <p className="text-sm">

                                {userMetaData?.profileDescription}
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold">Skills</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {
                                    userMetaData?.skillTags?.map((skill) => {
                                        return <div className="inline-flex border-2 border-indigo-500 text-indigo-500 items-center rounded-full whitespace-nowrap  px-4 py-2 w-fit text-sm font-medium transition-colors  hover:bg-indigo-600/10 cursor-pointer">
                                            {skill}
                                        </div>
                                    })
                                }



                            </div>
                        </div>
                        <div className="space-y-2">

                            <Link to='/updateProfile' className="inline-flex bg-indigo-500 text-white items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-indigo-500/90 h-10 px-4 py-2 w-full">
                                Manage Profile
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-2 space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold">Basic Information</h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-gray-500">AGE</p>
                                    <p>28 years</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">YEARS OF EXPERIENCE</p>
                                    <p>6 years</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">CTC</p>
                                    <p>12.5 Lac</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">LOCATION</p>
                                    <p> {userMetaData?.location?.cityName} , {userMetaData?.location?.countryName}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">PHONE</p>
                                    <p>{userMetaData?.mobile}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">EMAIL</p>
                                    <p>{userMetaData?.email}</p>
                                </div>
                            </div>
                            <div className="flex space-x-4">
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1">
                                    Download Resume
                                </button>
                                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 flex-1">
                                    Sent Email
                                </button>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Experience</h3>
                            {
                                userMetaData?.experiences?.map(item => {
                                    return <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width={24}
                                                height={24}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6 text-blue-600"
                                            >
                                                <rect width={20} height={14} x={2} y={7} rx={2} ry={2} />
                                                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                                            </svg>
                                            <div>
                                                <h4 className="font-semibold">{item?.companyName}</h4>
                                                <p className="text-sm text-gray-500">
                                                    {item?.designation}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                })
                            }

                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Education</h3>
                            <p className="text-sm text-gray-500">Details about education</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Accomplishments</h3>
                            <p className="text-sm text-gray-500">Details about accomplishments</p>
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-lg font-semibold">Certification</h3>
                            <p className="text-sm text-gray-500">Details about certifications</p>
                        </div>
                    </div>
                </div>
            </div>
        </>


    )
}

export default CandidateProfile