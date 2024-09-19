import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="flex w-1000 rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 h-8 border-r-0 border-gray-700 dark:border-gray-700 items-center p-2">
      <IoSearch className="bg-transparent outline-none h-5 w-6"/>
      <input className=" font-normal p-2 rounded-lg bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 w-800 h-8 border-r-0 border-gray-700   dark:border-gray-700" type="text" placeholder="Search here.." />
    </div>
  )
}

export default SearchBar
