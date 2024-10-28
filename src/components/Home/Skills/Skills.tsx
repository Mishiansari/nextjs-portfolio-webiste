import SectionHeading from "@/components/Heiper/SectionHeading";
import { skillsData } from "@/Data/data";
import SkillCard from "./SkillCard";

export default function Skills  ()  {
  return (
    <div className="pt-16 pb:16 bg-[#635072]">
        <SectionHeading>My Skills</SectionHeading>
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
