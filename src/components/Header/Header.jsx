import { FaMoon, FaGlobe  } from "react-icons/fa";
import { HiOutlineMenuAlt2, HiOutlineMailOpen, HiMailOpen} from "react-icons/hi";
import { MdOutlineLightMode, MdSpaceDashboard } from "react-icons/md";
import { IoMdNotificationsOutline, IoIosNotifications } from "react-icons/io";
import SearchBar from "./SearchBar";
import { IoCardOutline, } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

const Header = ({darkMode, toggleDarkMode, toggleSidebar}) => {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200  dark:bg-gray-800  dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
            <div className="flex items-center justify-start  rtl:justify-end">
                <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleSidebar} > 
                    <HiOutlineMenuAlt2 className="text-2xl"/>
                </button>
                <a href="#" className="flex ms-2 md:me-24">
                    <MdSpaceDashboard className="h-8 me-3 text-xl text-violet-500" /> 
                    <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Hired Valley</span>
                </a>
            </div>

            <div className="col-sm-7 flex align-items-center pl-4">
              <SearchBar/>
            </div>



            <div className="flex gap-2 align-items-center pl-4"> 
              <button className=" hover:bg-gray-400 dark:bg-slate-50 dark:text-slate-700 p-3 rounded-full" onClick={toggleDarkMode}>{darkMode ? <IoMdNotificationsOutline className="h-5 w-5"/>:<IoIosNotifications className="h-5 w-5"/>} </button>
              <button className=" hover:bg-gray-400 dark:bg-slate-50 dark:text-slate-700 p-3 rounded-full" onClick={toggleDarkMode}>{darkMode ? <CiGlobe className="h-5 w-5"/>:<FaGlobe/>}</button>
              <button className="hover:bg-gray-400 dark:bg-slate-50 dark:text-slate-700 p-3 rounded-full" onClick={toggleDarkMode}> {darkMode ? <HiOutlineMailOpen className="h-5 w-5"/>:<HiMailOpen className="h-5 w-5"/>} </button>
              <button className=" hover:bg-gray-400 dark:bg-slate-50 dark:text-slate-700  rounded-full p-3" onClick={toggleDarkMode}> {darkMode ? <MdOutlineLightMode className="h-5 w-5"/>:<FaMoon className="h-5 w-5"/>}</button>
             
 
            </div>
            
         </div>
      </div>
    </nav>
  )
}

export default Header
