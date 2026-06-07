function NavbarDash() {
  return (
    <div className="w-full h-16 bg-[#fbf9f5] shadow-md flex items-center justify-between px-4">
      <h1 className="text-4xl text-bold cormorant-garamond ml-10 text-[#2f4e4c]">ELibra.</h1>
      <div className="flex items-center space-x-4">
        <button className="px-3 py-1 cormorant-garamond text-bold text-2xl text-zinc-950">Bookshelf</button>
        <button className="px-3 py-1 cormorant-garamond text-bold text-2xl text-zinc-950 border-b-2 border-[#2f4e4c]">Reading Hub</button>
        <button className="px-3 py-1 cormorant-garamond text-bold text-2xl text-zinc-950">Mood Finder</button>
        <button className="px-3 py-1 cormorant-garamond text-bold text-2xl text-zinc-950">Clubs</button>
      </div>
      <div className="flex items-center space-x-4">
        <button className="mr-10 px-6 py-2 bg-[#2f4e4c] text-[#fbf9f5] rounded-full text-sm text-bold be-vietnam-pro-bold">Sign In</button>
      </div>
    </div>
  );
}

export default NavbarDash;