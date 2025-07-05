"use client"
import { useState } from "react"

import emailJs from "@emailjs/browser"
import { isValidEmail, getDomainPart, getLocalPart } from "email-js"


const FormElement = ({
  contactForm, setContactForm, setLoading, loading
}) => {
  const handleChange = (e) => {
    const { value, name } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailJs.send("service_mnehd7q", "template_rywk01a",
      {
        from_name: contactForm.name,
        to_name: "kharchi merouane",
        message: contactForm.message,
        email: contactForm.email,
        company_name: contactForm.companyName,
      }, "AXN0NM8BSmKr1TVYt").then((data) => {
        setLoading(false)
        alert("message sent")
        setContactForm({
          email: "",
          name: "",
          message: "",
          companyName: "",
        })
      })



  }
  return (
    <form onSubmit={handleSubmit} className="sm:w-2/3 w-full gap-4 h-full sm:h-full flex flex-col items-center  justify-center" >
      <h1 className="font-semibold text-xl  bg-background rounded-lg px-2 py-2 sm:py-4 sm:-translate-y-3">Let's get in touch</h1>
      <input value={contactForm.name} type="text" className="p-4 text-sm sm:text-lg border rounded-lg w-2/3" name="name" onChange={handleChange} placeholder="Enter your name" />
      <input value={contactForm.companyName} type="text" className="p-4 text-sm sm:text-lg border rounded-lg w-2/3" name="companyName" onChange={handleChange} placeholder="Enter your company's name" />
      <input value={contactForm.email} type="email" className="p-4 text-sm sm:text-lg border rounded-lg w-2/3" name="email" onChange={handleChange} placeholder="Enter your email" />
      <textarea value={contactForm.message} placeholder="your message" className="pb-8 p-4 text-sm sm:text-lg border rounded-lg w-2/3" name="message" onChange={handleChange} />
      <button className="w-2/3 px-4 py-2 row bg-[#CBACF9] text-background rounded-lg border " disabled={loading} type="Submit">{loading ? "submitting..." : "Submit"}</button>

    </form>)
}
const Contact = () => {
  const [loading, setLoading] = useState(false);

  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    message: "",
    companyName: "",
  })
  return (
    <div className="sm:w-[80%] gap-10 sm:gap-0 my-20 w-full h-full min-h-screen mx-auto p-4 sm:p-0 flex flex-col sm:flex-row justify-start sm:justify-center items-center">
      <h2 className="text-2xl  sm:text-4xl w-[90%] sm:w-1/2 font-bold">Ready to take <span className='text-[#CBACF9]'>your</span> digital presence to the next level?</h2>
      <FormElement contactForm={contactForm} loading={loading} setLoading={setLoading} setContactForm={setContactForm} />

    </div>
  )
}

export default Contact
