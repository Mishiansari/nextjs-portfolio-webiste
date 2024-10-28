export default function ContactForm  ()  {
  return (
    <div className="bg-[#635072] rounded-lg p-4 sm:p-10">
    <h1 className="text-[#7b88a8] text-2xl md:text-3xl lg:text-[2.5rem] font-bolds">
        Get In Touch!
    </h1>
    <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate eveniet temporibus odio aperiam, doloremque inventore illo 
        excepturi! Perferendis sed libero facilis optio repellat expedita quos ex sit qui quam!
        </p>
        {/* ......Input Fields.... */}
        <form className="mt-8 block w-full overflow-hidden">
            <div className="flex flex-col md:flex-row items-center justify-between
            gap-4">
                <input 
                type="text"
                 placeholder="first Name" 
                 className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                 rounded:md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>
                  <input 
                type="text"
                 placeholder="LasT Name" 
                 className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                 rounded:md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>
            </div>
            <div className="flex  mt-5 flex-col md:flex-row items-center justify-between
            gap-4">
                <input 
                type="text"
                 placeholder="Email Address" 
                 className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                 rounded:md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>
                  <input 
                type="text"
                 placeholder="Phone Number" 
                 className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 
                 rounded:md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"/>
            </div>
            <div>
                <select className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 
                rounded-md border-[5px] border-gray-200 border-opacity-15 outline-none">
                    <option value="" disabled selected >
                        Selecte An Option
                    </option>
                    <option value="frontend">
                          Frontent Development

                    </option>
                    <option value="Backent">
                          Backend Development

                    </option>
                    <option value="Fullstack">
                          Fullstack Development
                    </option>
                </select>
            </div>
            
            <textarea 
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 
                rounded-md border-[5px] border-gray-200 border-opacity-15 outline-none"
             rows={7}
              placeholder="Message">
              </textarea>
              <div className="mt-4 ">
                <button className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all
                 duration-150 rounded-full">Send Message</button>
              </div>


        </form>

        </div>
  )
}
