import { BaseInfo } from "@/Data/data"
import { FaDownload } from "react-icons/fa"
import Image from "next/image"


export default function Hero() {
    return(
        <div className="w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#635072] overflow-hidden relative">
        <div className="flex justify-center flex-col w-4/5 h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
            {/* ...... text content...... */}
            <div >
                {/* ....sub heading.... */}
                <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4 text-gray-300 font-semibold">
                I am {BaseInfo.name}
                </h1>
                {/* ........Title...... */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-7xl font-bold
                md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-[#8596c0]">
                    {BaseInfo.position}
                    </h1>
                    {/* .....Despcription..... */}
                <p className="mt-6 text-sm md:text-base text-white  text-opacity-60">
                    {BaseInfo.description}
                    </p>
                    {/* .......Button...... */}
                    <button className="md:px-8 md:py-2.5 px-6 py-1.5 text-white font-semibold text-sm md:text-lg 
                    transition-all duration-200 rounded-lg mt-3 bg-purple-950 hover:bg-purple-300 flex items-center space-x-2">
                        <span>Download Cv</span>
                        <FaDownload />
                    </button>
            </div>
            {/*.....Image content...... */}
            <div className="mx-auto hidden lg:block rounded-[3rem] border-[3.5px] border-blue-200 overflow-hidden">
                <Image 
                src={BaseInfo.profilePic}
                alt={BaseInfo.name}
                width={500}
                height={500}
                />
            </div>
        </div>
        </div>
        </div>
    )
}
        
        
  

