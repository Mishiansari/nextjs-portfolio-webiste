import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";


export default function Contact() {
  return (
    <div className="pt-16 pb-16  bg-[#050709]">
        <div className="grid grid-cols-1 xl:grid-cols-2 sm:w-[80%] w-[90%] mx-auto items-center mt-10">
            {/* ........contact form....... */}

            <div>
                <ContactForm />
            </div>
            {/* .......contact info.... */}
            <div className="xl:mx-auto">
            <ContactInfo />
            </div>
        </div>
        </div>
  )
}
