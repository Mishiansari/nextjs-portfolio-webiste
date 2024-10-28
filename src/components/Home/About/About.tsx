
import { aboutInfo } from "@/Data/data";
import { FaCheck } from "react-icons/fa";

export default function About  () {
  return (
    <div className="pt-16 pb-16 bg-[#050709]">
        {/* .......SEctionHeading..... */}
                      <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-whitetext-2xl sm:text-3xl md:text-4xl uppercase -rotate-6"> About Me</h1>    
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mt-20">
            {/* ....Text content.... */}
            <div>
                <h1 className="text-[26px] sm:text-3xl md:text-4xl lg:text-5xl text-[#7b88a8] font-bold">
                    {aboutInfo.title}
                    </h1>
                    <p className="mt-6 text-base text-gray-200">
                        {aboutInfo.description}
                        </p>
 
                  <div className="mt-3">
                    <div className="flex items-center space-x-2 mb-4 ">
                        <div className="w-7 h-7 bg-blue-800 flex flex-col items-center justify-center">
                            <FaCheck className="text-white" />
                        </div>
                        <p className="text-sm sm:text-base md:text-lg  font-bold  text-gray-300">
                          Frontend Development
                          </p>

                    </div>
                  </div>
                  </div>
              

                  </div>
                
                    </div>
                
            
           
  
  )
}
