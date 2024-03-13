import React from 'react'

const Step4 = () => {
    const pricePlans = [
        {
            name: 'Free',
            pricePerMonth: 0,
            features: [
                `View 5 profiles of Business for business connections.`,
                `Connect 5 profiles of Business`,
                `Total 2 Job posting`,
                `Connect total 5 candidates for Job`,
                `Canditate Alert`,
                `Duration: Lifetime`
            ]
        },
        {
            name: 'Silver-3',
            pricePerMonth: 1400,
            features: [
                `7 days free Trial`,
                `View all Business partners and Investors Profile.`,
                `Connect with all the Business Profiles`,
                `Connect with all Candidates for job`,
                `Total 5 job posting in a day`,
                `Rs 4700 billed quaterly`,
                `Duration: 3 Months`
            ]
        }
        ,
        {
            name: 'Gold-6',
            pricePerMonth: 1200,
            features: [
                `7 days free Trial`,
                `View all Business partners and Investors Profile.`,
                `Connect with all the Business Profiles`,
                `Connect with all Candidates for job`,
                `Total 10 job posting in a day 4. Rs 8000 billed semi-annually`,
                `Duration: 6 months`,

            ]
        }
        ,
        {
            name: 'Platinum-12',
            pricePerMonth: 999,
            features: [
                `7 days free Trial`,
                `View all Business partners and Investors Profile.`,
                `Connect with all the Business Profiles`,
                `Connect with all Candidates for job`,
                `Rs 11000 billed annually`,
                `Duration: 12 months`,

            ]
        }
    ]
    return (
        <div className='border-2 min-h-[70vh] w-full '>
            <div class="h-screen">
                <div class="relative mx-auto">
                    <div class="absolute inset-0 bottom-32 bg-gradient-to-t from-blue-900 to-indigo-700 border-b-8 border-indigo-700"></div>
                    <div class="relative mx-auto w-full max-w-screen-xl px-2 pt-20 text-left sm:px-10">
                        <div class="mb-16">
                            <h1 class="text-center text-4xl font-bold text-white sm:text-5xl">Hire Top Talent At Incredibily Low Cost</h1>
                            <p class="mx-auto mt-4 max-w-xl text-center text-white/70">Our plans are designed to fit every all kinds of needs with unlimited access to all features. Start your free trial, no credit-card required.</p>
                            <button class="mx-auto mt-8 flex items-center rounded-lg border border-black bg-indigo-600 px-4 py-2 font-semibold text-white hover:border-white hover:bg-indigo-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                Talk to Sales
                            </button>
                        </div>
                        <div class="mx-auto grid max-w-screen-xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
                            {
                                pricePlans.map(item => {
                                    return <div class="group rounded-md bg-white p-2 text-left text-indigo-900 shadow-xl shadow-black/5 transition-transform hover:-translate-y-1">
                                        <a href="#" target="_blank" rel="noreferrer noopener" class="flex h-full cursor-pointer select-none flex-col items-center rounded-md"
                                        ><div class="w-full p-4">
                                                <h3 class="text-2xl font-black text-indigo-700">
                                                    {item?.name}
                                                </h3>
                                            </div>
                                            <div class="w-full px-4 pb-2">
                                                <p class="text-2xl font-black leading-none"><span class="text-xs">$</span>{item?.pricePerMonth}<span class="text-base font-normal">/month</span></p>
                                            </div>
                                            <div class="w-full flex-1 p-4">
                                                <ul class="list-inside list-disc divide-y text-sm">
                                                    {
                                                        item?.features?.map(fea => {
                                                            return <li class="flex items-start py-2 text-left">
                                                                <p class="w-full">{fea}</p>
                                                            </li>
                                                        })
                                                    }


                                                </ul>
                                            </div>
                                            <div class="w-full px-4 pb-4">
                                                <p class="group flex w-full items-center justify-center rounded py-1 text-center border-2 hover:border-white border-indigo-600 font-bold transition group-hover:bg-indigo-700 group-hover:text-white">
                                                    Free Trial
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                </p></div
                                            ></a>
                                    </div>
                                })
                            }
                            {/* <div class="group rounded-md bg-white p-2 text-left text-indigo-900 shadow-xl shadow-black/5 transition-transform hover:-translate-y-1">
                                <a href="#" target="_blank" rel="noreferrer noopener" class="flex h-full cursor-pointer select-none flex-col items-center rounded-md"
                                ><div class="w-full p-4">
                                        <h3 class="text-2xl font-black text-indigo-700">Team</h3>
                                    </div>
                                    <div class="w-full px-4 pb-2">
                                        <p class="text-2xl font-black leading-none"><span class="text-xs">$</span>29<span class="text-base font-normal">/month</span></p>
                                    </div>
                                    <div class="w-full flex-1 p-4">
                                        <ul class="list-inside list-disc divide-y text-sm">
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">View 5 profiles of Business for business connections.</p>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Connect 5 profiles of Business</p>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Total 2 Job posting</p>
                                                <span class="whitespace-no-wrap inline-flex whitespace-nowrap rounded bg-gray-50 p-1 text-stone-500">add-on</span>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Connect total 5 candidates for Job</p>
                                                <span class="whitespace-no-wrap inline-flex whitespace-nowrap rounded bg-gray-50 p-1 text-stone-500">add-on</span>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Canditate Alert</p>
                                                <span class="whitespace-no-wrap inline-flex whitespace-nowrap rounded bg-gray-50 p-1 text-stone-500">add-on</span>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Duration: Lifetime</p>
                                                <span class="whitespace-no-wrap inline-flex whitespace-nowrap rounded bg-gray-50 p-1 text-stone-500">add-on</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="w-full px-4 pb-4">
                                        <p class="group flex w-full items-center justify-center rounded bg-indigo-700 py-1 text-center font-bold text-white transition">
                                            Free Trial
                                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </p></div
                                    ></a>
                            </div>
                            <div class="group rounded-md bg-white p-2 text-left text-indigo-900 shadow-xl shadow-black/5 transition-transform hover:-translate-y-1">
                                <a href="#" target="_blank" rel="noreferrer noopener" class="flex h-full cursor-pointer select-none flex-col items-center rounded-md"
                                ><div class="w-full p-4">
                                        <h3 class="text-2xl font-black text-indigo-700">Company</h3>
                                    </div>
                                    <div class="w-full px-4 pb-2">
                                        <p class="text-2xl font-black leading-none"><span class="text-xs">$</span>229<span class="text-base font-normal">/month</span></p>
                                    </div>
                                    <div class="w-full flex-1 p-4">
                                        <ul class="list-inside list-disc divide-y text-sm">
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Invite up to 3 clients.</p>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">No contributors.</p>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">White-label.</p>
                                                <span class="whitespace-no-wrap inline-flex whitespace-nowrap rounded bg-gray-50 p-1 text-stone-500">add-on</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="w-full px-4 pb-4">
                                        <p class="group flex w-full items-center justify-center rounded py-1 text-center font-bold transition group-hover:bg-indigo-700 group-hover:text-white">
                                            Free Trial
                                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </p></div
                                    ></a>
                            </div>
                            <div class="group rounded-md bg-white p-2 text-left text-indigo-900 shadow-xl shadow-black/5 transition-transform hover:-translate-y-1">
                                <a href="#" target="_blank" rel="noreferrer noopener" class="flex h-full cursor-pointer select-none flex-col items-center rounded-md"
                                ><div class="w-full p-4">
                                        <h3 class="text-2xl font-black text-indigo-700">Custom</h3>
                                    </div>
                                    <div class="w-full px-4 pb-2">
                                        <p class="text-2xl font-black leading-none">Get a Quote</p>
                                    </div>
                                    <div class="w-full flex-1 p-4">
                                        <ul class="list-inside list-disc divide-y text-sm">
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Invite up to 3 clients.</p>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">No contributors.</p>
                                            </li>
                                            <li class="flex items-start py-2 text-left">
                                                <p class="w-full">Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="w-full px-4 pb-4">
                                        <p class="group flex w-full items-center justify-center rounded py-1 text-center font-bold transition group-hover:bg-indigo-700 group-hover:text-white">
                                            Free Trial
                                            <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </p></div
                                    ></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Step4