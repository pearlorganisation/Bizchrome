import React from 'react'

const ContactUs = () => {
    return (
        <div className='grid place-items-center min-h-[90vh]'>
            <div class="mx-auto flex justify-center
         flex-col md:flex-row md:pr-10 w-full">
                <div class="max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
                    <p class="mb-20 font-bold tracking-wider">CORINE</p>
                    <p class="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
                        Start your <br />
                        journey with us
                    </p>
                    <p class="mb-28 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi voluptas a officia. Omnis.</p>
                    <div class="bg-blue-600/80 rounded-2xl px-4 py-8">
                        <p class="mb-3 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea voluptates sapiente!</p>
                        <div class="">
                            <div class="flex items-center">
                                <img class="h-10 w-10 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
                                <p class="ml-4 w-56">
                                    <strong class="block font-medium">Simon Lewis</strong>
                                    <span class="text-xs text-gray-200"> Published 12 Bestsellers </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" sm:w-[40%] mt-12 px-10 ">
                    <h2 class="mb-8 text-3xl font-bold ">Contact Us</h2>


                    <div className='flex justify-between gap-4'>
                        <div className='w-full'>
                            <p class="mb-1 font-medium text-gray-500">First Name</p>
                            <div class="mb-4 flex flex-col">
                                <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                    <input type="text" id="firstname" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your firstname" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full'>
                            <p class="mb-1 font-medium text-gray-500">Last Name</p>
                            <div class="mb-4 flex flex-col">
                                <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                                    <input type="text" id="lastname" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your lastname" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <p class="mb-1 font-medium text-gray-500">Email</p>
                    <div class="mb-4 flex flex-col">
                        <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                            <input type="email" id="signup-email" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your email" />
                        </div>
                    </div>
                    <p class="mb-1 font-medium text-gray-500">Phone Number</p>
                    <div class="mb-4 flex flex-col">
                        <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                            <input type="text" id="phonenumber" class="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your phonenumber" />
                        </div>
                    </div>
                    <p class="mb-1 font-medium text-gray-500">Message</p>
                    <div class="mb-4 flex flex-col">
                        <div class="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                            <textarea rows="5" type="text" id="message" class="resize-none w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your phonenumber" ></textarea>
                        </div>
                    </div>

                    <button class="w-full mt-6 hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-8 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">Submit</button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs