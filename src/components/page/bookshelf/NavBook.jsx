import { NavLink } from "react-router-dom";

function NavMood() {
  return (
    <div className="sticky top-0 z-50 bg-[#fbf9f5]/70 backdrop-blur-md border-b border-[#2f4e4c]/10 transition-all duration-500 w-full h-18 shadow-sm flex items-center justify-between px-4">

      <h1 className="text-4xl font-bold eb-garamond-400 ml-10 text-[#456462] cursor-pointer hover:scale-[1.02] hover:opacity-80 transition-all duration-300">
        ELibra.
      </h1>

      <div className="flex pl-21 items-center space-x-4">
        <NavLink to="/bookshelf" className={({isActive}) => `relative px-3 py-1 eb-garamond-600 text-[22px] ${isActive? 'text-[#456462]': 'text-zinc-500'} transition-transform duration-300 ease-out hover:scale-105 active:scale-95 group`}> 
         Bookshelf
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#865046]"></span>
        </NavLink>

        <NavLink to="/" className={({isActive}) => `relative px-3 py-1 eb-garamond-500 text-[22px] ${isActive? 'text-[#456462]': 'text-zinc-500'} transition-colors duration-300 group`}>
        Reading Hub
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#865046] scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </NavLink>

        <NavLink to="/moodfinder" className={({isActive}) => `relative px-3 py-1 eb-garamond-500 text-[22px] ${isActive? 'text-[#456462]': 'text-zinc-500'} transition-colors duration-300 group`}>
          Mood Finder
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#865046] scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </NavLink>

        <NavLink to="/clubs" className={({isActive}) => `relative px-3 py-1 eb-garamond-500 text-[22px] ${isActive? 'text-[#456462]': 'text-zinc-500'} transition-colors duration-300 group`}>
          Clubs
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-[#865046] scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
        </NavLink>
      </div>

      <div className="flex items-center space-x-4 mr-55">
        <NavLink className="mr-10 px-6 py-1.5 bg-[#456462] text-[#fbf9f5] rounded-full text-sm be-vietnam-pro-semibold hover:bg-[#324a49] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">
          Sign In
        </NavLink>
      </div>

    </div>
  );
}

export default NavMood;