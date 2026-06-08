import compassSvg from '../../../assets/compass.svg';

function HeroSectionDash() {
    return (
        <div className="grid grid-cols-2 p-8 w-full h-fit bg-gradient-to-br from-[#fdfbf7] via-[#faf6ed] to-[#edf4f3] rounded-2xl gap-8 shadow-[0_8px_30px_rgb(0,0,0,0.02)] border border-[#e8e2d5]/40">
            {/* kiri */}
            <div className="flex flex-col items-start justify-center gap-1 w-full rounded-lg px-6 py-4 ml-35 mt-10">
                <div className="w-full flex items-center justify-start px-3 py-0">
                    <span className="tracking-widest text-[11px] uppercase be-vietnam-pro-semibold text-[#69342b] bg-[#f3e8e0] border border-[#e3d1c4]/40 rounded-full pl-4 pr-5 py-2 mb-1">
                        Welcome back, Bibliophile
                    </span>
                </div>
                <span className="text-[42px] leading-tight eb-garamond-500 text-[#2c4240] p-3 max-w-lg">
                    Your quiet corner in the digital noise.
                </span>

                <span className="mb-4 text-base font-medium be-vietnam-pro-medium tracking-wide text-[#536e6c] pt-3 pl-3 pr-6 text-justify max-w-md">
                    Discover stories that resonate with your current state of mind. Settle in, the pages are waiting.
                </span>
                <div className="flex items-center space-x-4 mt-4 pl-3">
                    <button className="px-6 py-2.5 bg-[#354f4d] text-[#fbf9f5] rounded-full text-sm be-vietnam-pro-semibold hover:bg-[#223332] hover:shadow-[0_4px_20px_rgba(53,79,77,0.25)] hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">Resume Reading</button>
                </div>
            </div>
            {/* kanan */}
            <div className="relative flex flex-row mt-10 items-center bg-[#fdfcf9] w-[80%] rounded-3xl shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-[#eae4d8]/50 hover:shadow-[0_25px_60px_rgba(45,64,62,0.12)] hover:-translate-y-2 transition-all duration-500 ease-out p-8 gap-6 group/card cursor-pointer">
                <div className="absolute -top-5 -left-5 w-20 h-20 bg-gradient-to-br from-[#563f38] to-[#3e2c27] rounded-full shadow-lg flex items-center justify-center z-10 border border-[#fdfbf7]/20">
                    <span className="eb-garamond text-[#f5efe4] text-xl font-bold transform -rotate-12 group-hover/card:rotate-[-18deg] group-hover/card:scale-110 transition-all duration-300">Daily</span>
                </div>
                
                <div className="w-[42%] h-full flex items-center justify-center">
                    <img 
                        src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600&auto=format&fit=crop" 
                        alt="Book Cover" 
                        className="w-full h-full object-cover rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.15)] transform -rotate-3 group-hover/card:rotate-0 group-hover/card:scale-[1.03] transition-all duration-500 ease-out"
                    />
                </div>

                <div className="w-[58%] flex flex-col items-start justify-center pr-2">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="tracking-wider text-[10px] be-vietnam-pro-medium text-[#69342b] bg-[#f3e8e0] rounded-full px-3 py-1">
                            Magical Realism
                        </span>
                        <span className="tracking-wider text-[10px] be-vietnam-pro-medium text-[#69342b] bg-[#f3e8e0] rounded-full px-3 py-1">
                            Cozy
                        </span>
                    </div>

                    <span className="text-4xl font-bold eb-garamond-500 text-[#1a1a1a] leading-tight mb-1 group-hover/card:text-[#69342b] transition-colors duration-300">
                        The Night Circus
                    </span>

                    <span className="text-sm italic be-vietnam-pro-medium-italic text-[#536e6c] mb-4">
                        by Erin Morgenstern
                    </span>

                    <span className="text-left text-[14px] leading-relaxed be-vietnam-pro-medium text-stone-500 mb-5">
                        The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not. Within the black...
                    </span>
                    
                    <button className="flex items-center gap-2 text-[#354f4d] font-bold text-sm be-vietnam-pro-semibold group/btn">
                        <span>Start Chapter 1</span>
                        <span className="transform group-hover/btn:translate-x-2 transition-transform duration-300">&rarr;</span>
                    </button>
                </div>
            </div>
            {/* bawah */}
            <div className="col-span-2 pt-25 px-8 rounded-xl flex flex-col items-center justify-center text-center">
                <img src={compassSvg} alt="Ikon Kompas" className="w-15 h-15 opacity-80" />
                <span className="text-[42px] eb-garamond-400 text-[#1a1a1a] mb-2">MoodFinder</span>
                <span className="text-base tracking-wide be-vietnam-pro-medium text-stone-500 max-w-lg">
                    Select your current state of mind or desired atmosphere, and let the archive suggest your next journey.
                </span>
                <div className="flex items-center space-x-4 mt-10">
                    <button className="mt-6 px-7 py-2.5 text-[#354f4d] bg-[#fdfbf7] border border-[#e8e2d5] rounded-full text-[21px] eb-garamond-500 hover:bg-[#45646215] hover:border-[#354f4d]/30 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">
                        Cozy & Rainy
                    </button>
                    <button className="mt-6 px-7 py-2.5 text-[#354f4d] bg-[#fdfbf7] border border-[#e8e2d5] rounded-full text-[21px] eb-garamond-500 hover:bg-[#45646215] hover:border-[#354f4d]/30 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">
                        Existential Crisis
                    </button>
                    <button className="mt-6 px-7 py-2.5 text-[#354f4d] bg-[#fdfbf7] border border-[#e8e2d5] rounded-full text-[21px] eb-garamond-500 hover:bg-[#45646215] hover:border-[#354f4d]/30 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">
                        Escapist Fantasy
                    </button>
                </div>
                <div className="flex items-center space-x-4 mt-3 mb-10">
                    <button className="mt-6 px-7 py-2.5 text-[#354f4d] bg-[#fdfbf7] border border-[#e8e2d5] rounded-full text-[21px] eb-garamond-500 hover:bg-[#45646215] hover:border-[#354f4d]/30 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">
                        Coffee Shop Chatter
                    </button>
                    <button className="mt-6 px-7 py-2.5 text-[#354f4d] bg-[#fdfbf7] border border-[#e8e2d5] rounded-full text-[21px] eb-garamond-500 hover:bg-[#45646215] hover:border-[#354f4d]/30 hover:shadow-sm hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300">
                        Hopeless Romantic
                    </button>
                </div>
            </div>
        </div>
    )
}

export default HeroSectionDash;