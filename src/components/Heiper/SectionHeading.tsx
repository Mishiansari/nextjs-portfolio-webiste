import { Children, ReactNode } from "react"

///define props type
type props={
    children:ReactNode
}

export default function SectionHeading ({children}:props)  {
  return (
    <h1 className="bg-blue-800 w-fit text-center px-4 py-3 mx-auto text-whitetext-2xl sm:text-3xl md:text-4xl uppercase -rotate-6">
        {children}
        </h1>
    
  )
}
