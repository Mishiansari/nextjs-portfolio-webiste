
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

export default function Skills  ()  {
  return (
    <div className="pt-16 pb:16 bg-[#635072]">
      <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-whitetext-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">Skills</h1>
        <br></br><br></br><br></br>
        <div className="mt:20 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        lg:grid-4 xl:grid-cols-5 gap-4 items-center">
            {skillsData.map((skill)=>{
                return(
                    <div key={skill.id}>
                        <SkillCard skill={skill}/>
                        </div>
                )
                    
            
            })}
        </div>
    
    </div>
  )
}
