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


<<<<<<< HEAD
  return (
    <>
      <nav
        className={`relative z-20 bg-white w-full md:static md:text-sm md:border-none ${
          state ? "shadow-lg rounded-b-xl md:shadow-none" : ""
        }`}
      >
        <div className="items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link to="/">
              <img src={logo} alt="logo" height={39} width={65} />
            </Link>
            <div className="md:hidden">
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? "block" : "hidden"
            }`}
          >
            <ul className="items-center space-y-6 md:flex md:space-x-6 md:space-y-0 justify-end">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="font-bold text-base">
                    {item.isDrapdown ? (
                      <button
                        className="w-full flex items-center justify-between gap-1 text-gray-700 hover:text-indigo-600"
                        onClick={() =>
                          setDrapdownState({
                            idx,
                            isActive: !drapdownState.isActive,
                          })
                        }
                      >
                        {item.title}
                        {drapdownState.idx == idx && drapdownState.isActive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.path}
                        className="block text-gray-700 hover:text-indigo-600"
                      >
                        {item.title}
                      </a>
                    )}
                    {item.isDrapdown &&
                    drapdownState.idx == idx &&
                    drapdownState.isActive ? (
                      <div className="mt-6 bg-white inset-x-0 top-20 w-full md:absolute md:border-y  md:mt-0 z-50">
                        <ul className="max-w-screen-xl mx-auto grid items-start gap-6 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {item?.navs.map((dropdownItem, idx) => (
                            <li key={idx}>
                              <p className="text-indigo-600 text-sm">
                                {dropdownItem.label}
                              </p>
                              <ul className="mt-5 space-y-6">
                                {dropdownItem.navs.map((navItem, idx) => (
                                  <li key={idx} className="group">
                                    <a
                                      href={navItem.path}
                                      className="flex gap-3 items-center"
                                    >
                                      <div className="  rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white md:w-6 md:h-6">
                                        {navItem.icon}
                                      </div>
                                      <div>
                                        <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                          {navItem.title}
                                        </span>
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}

              <div className="hidden lg:block">
                <button
                  type="button"
                  class="rounded-md bg-[#3ACABE] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#27b0a5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  onClick={() => setIsModalOpen(true)}
=======
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
>>>>>>> 8a85e1c3637e32823b97e02b0a30c815e1c43270
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