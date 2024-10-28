import Image from "next/image"
export default function Footer(){
    return(
        <div className="pt-16 pb-16 bg-[#635072]">
            <div>
                <Image
                src="/Images/logo.png"
                alt="logo"
                width={100}
                height={100}
                className="mx-auto"
                />
            </div>
            <div className="flex items-center flex-wrap justify-center space-x-10
            space-y-4 text-white font-bold mt-4">
                <div>Home</div>
                <div>ABOUT</div>
                <div>My skills</div>
                <div>Contact</div>
            </div>
            <p className="text-white text-opacity-60 mt-4 text-center">&copy; 2024 Rights Reserverd By Porfolio Website</p>
        </div>
    )
}