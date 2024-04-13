import { useState, useRef, useEffect } from "react"
import { Link } from "react-router-dom"
import logo from "../../../assets/Images/Biz-chrome-logo.png";
import { useDispatch, useSelector } from "react-redux";
import { userLogout } from "../../../features/actions/Auth/authActions";

// Profile Dropdown
const ProfileDropDown = (props) => {
    const dispatch = useDispatch()
    const [state, setState] = useState(false)
    const profileRef = useRef()

    const navigation = [
        { title: "Dashboard", path: "javascript:void(0)" },
        { title: "Profile", path: "/candidateProfile" },

    ]


    useEffect(() => {
        const handleDropDown = (e) => {
            if (!profileRef.current.contains(e.target)) setState(false)
        }
        document.addEventListener('click', handleDropDown)
    }, [])

    return (
        <div className={`relative ${props.class} z-50`}>
            <div className="flex items-center space-x-4">
                <button ref={profileRef} className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 lg:focus:ring-indigo-600"
                    onClick={() => setState(!state)}
                >
                    <img
                        src="https://randomuser.me/api/portraits/men/46.jpg"
                        className="w-full h-full rounded-full"
                    />
                </button>
                <div className="lg:hidden">
                    <span className="block">Micheal John</span>
                    <span className="block text-sm text-gray-500">john@gmail.com</span>
                </div>
            </div>
            <ul className={`bg-white top-12 right-0 mt-5 space-y-5 lg:absolute lg:border lg:rounded-md lg:text-sm lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${state ? '' : 'lg:hidden'}`}>
                {
                    navigation.map((item, idx) => (
                        <li>
                            <Link key={idx} className="block text-gray-600 lg:hover:bg-gray-50 lg:p-2.5" to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
                <li>
                    <button
                        onClick={() => {
                            dispatch(userLogout())
                        }}
                        className="block text-gray-600 w-full text-left lg:hover:bg-gray-50 lg:p-2.5">
                        Log out
                    </button>
                </li>
            </ul>
        </div>
    )
}

const TempHeader = () => {

    const [menuState, setMenuState] = useState(false)
    const { isUserLoggedIn, userMetaData } = useSelector((store) => store.auth);
    const dispatch = useDispatch()

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "JOBS", path: "#" },
        { title: "BLOGS", path: "#" },
        { title: "SERVICES", path: "#" },
        { title: "HOW WE WORKS", path: "#" },
        { title: "CONTACT", path: "contact" },
    ]
    return (
        <nav className="bg-white border-b">
            <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <Link to="/">
                        <img src={logo} alt="logo" height={39} width={65} />
                    </Link>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 font-semibold font-sans space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-gray-600 hover:text-gray-900">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                        <ProfileDropDown
                            class="mt-5 pt-5 border-t lg:hidden"
                        />
                    </div>

                    <div className="w-full">
                        {
                            !isUserLoggedIn ? <div className='flex-1 w-full items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                                <span>
                                    <Link to="/signIn" className="block py-3 text-center text-gray-700 hover:text-indigo-600 border rounded-lg md:border-none">
                                        Log In
                                    </Link>
                                </span>
                                <span>
                                    <Link to="/signUp" className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                                        Sign Up
                                    </Link>
                                </span>
                            </div> : <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">

                                <ProfileDropDown
                                    class="hidden lg:block"
                                />
                                <button
                                    className="outline-none text-gray-400 block lg:hidden"
                                    onClick={() => setMenuState(!menuState)}
                                >
                                    {
                                        menuState ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                            </svg>
                                        )
                                    }
                                </button>
                            </div>
                        }
                    </div>


                </div>
            </div>
        </nav>
    )
}
export default TempHeader