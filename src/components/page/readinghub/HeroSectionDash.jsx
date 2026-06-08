function HeroSectionDash() {
    return (
        <div className="border-2 grid grid-cols-2f p-4 w-full h-[1200px] bg-gradient-to-br from-[#f6f5ef] to-[#f2efe8] rounded-lg">
            <div className="flex flex-col items-start gap-1 border-[#456462] w-[70%] h-[50%] rounded-lg ml-30 mt-12 px-6 py-2">
                <div className="w-full flex items-center justify-start px-3 py-1">
                    <span className="tracking-wider text-xs be-vietnam-pro-semibold text-[#7a473d] bg-[#fee0dcbc] rounded-full pl-4 pr-5 py-2 mb-1">
                        Welcome back, Bibliophile
                    </span>
                </div>
                <span className="text-[42px] leading-none eb-garamond-500 text-[#456462] p-3">
                    Your quiet corner in the digital noise.
                </span>
                <span className="mb-4 text-200 font-bold be-vietnam-pro-medium tracking-wide text-[#456462] pt-3 pl-3 pr-17 text-justify">
                    Discover stories that resonate with your current state of mind. Settle in, the pages are waiting.
                </span>
                <div className="flex items-center space-x-4 mt-4">
                    <button className="ml-2 px-5 py-2 bg-[#456462] text-[#fbf9f5] rounded-full text-sm be-vietnam-pro-semibold hover:bg-[#324a49] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">Resume Reading</button>
                </div>
            </div>

            <div className="relative flex flex-row items-center bg-[#fbf9f5] w-[85%] h-[50%] rounded-3xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out mt-13 p-8 gap-6 group/card cursor-pointer">
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-[#7a5c53] rounded-full shadow-lg flex items-center justify-center z-10">
                    <span className="eb-garamond text-white text-xl font-bold transform -rotate-12 group-hover/card:rotate-[-18deg] group-hover/card:scale-110 transition-all duration-300">Daily</span>
                </div>
                
                <div className="w-[42%] h-full flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop" 
                        alt="Book Cover" 
                        className="w-full h-[95%] object-cover rounded-2xl shadow-xl transform -rotate-3 group-hover/card:rotate-0 group-hover/card:scale-[1.02] transition-all duration-500 ease-out"
                    />
                </div>

                <div className="w-[58%] flex flex-col items-start justify-center pr-2">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="tracking-wider text-[10px] be-vietnam-pro-medium text-[#7a473d] bg-[#fee0dcbc] rounded-full px-3 py-1">
                            Magical Realism
                        </span>
                        <span className="tracking-wider text-[10px] be-vietnam-pro-medium text-[#7a473d] bg-[#fee0dcbc] rounded-full px-3 py-1">
                            Cozy
                        </span>
                    </div>

                    <span className="text-4xl font-bold eb-garamond-500 text-black leading-tight mb-1 group-hover/card:text-[#7a473d] transition-colors duration-300">
                        The Night Circus
                    </span>

                    <span className="text-sm italic be-vietnam-pro-medium-italic text-[#456462] mb-4">
                        by Erin Morgenstern
                    </span>

                    <span className="text-left text-[14px] leading-relaxed be-vietnam-pro-medium text-gray-600 mb-5">
                        The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black...
                    </span>
                    
                    <button className="flex items-center gap-2 text-[#456462] font-bold text-sm be-vietnam-pro-semibold group/btn">
                        <span>Start Chapter 1</span>
                        <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
                    </button>
                </div>
            </div>

            <div className="col-span-2 border-2 p-6 rounded-md flex flex-col items-center justify-center">
                <span className="text-4xl eb-garamond-400 text-black">MoodFinder</span>
                <span className="text-lg be-vietnam-pro-medium text-zinc-500 mx-125">Select your current state of mind or desired atmosphere, and let the archive suggest your next journey.</span>

            </div>
        </div>
    )
}

export default HeroSectionDash;