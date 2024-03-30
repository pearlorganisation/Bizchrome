import React from 'react'

const LogoutAlert = ({ setLogoutAlert, logout }) => {
    return (
        <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center">
            <div className="relative bg-white rounded-lg shadow-xl p-6 w-full h-full md:h-auto md:w-[20rem] mx-auto grid md:block place-items-center">
                <div>
                    <div className="flex justify-end">
                        <button
                            onClick={() => {
                                setLogoutAlert(false)
                            }}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            aria-label="Close"
                        >
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
                                className="w-5 h-5"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full">
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
                                className="w-6 h-6 text-red-600"
                            >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                            </svg>
                        </div>
                        <h3 className="mt-5 mb-2 text-xl font-medium text-gray-900">
                            Are you sure?
                        </h3>
                        <p className="text-sm text-gray-500 text-center">
                            You want to logout this account.
                        </p>
                        <div className="mt-6 flex space-x-3">
                            <button
                                onClick={() => { setLogoutAlert(false) }}
                                type='button' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input hover:text-accent-foreground h-10 px-4 py-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                                No, Cancel
                            </button>
                            <button
                                onClick={() => { logout() }}
                                type='button' className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-red-100 text-red-700 hover:bg-red-200">
                                Yes, Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LogoutAlert