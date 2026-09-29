"use client";

import { useState } from "react";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-[#CBACF9]/60 focus:ring-1 focus:ring-[#CBACF9]/30 transition-colors duration-150";

const FormElement = ({ contactForm, setContactForm, setLoading, loading }) => {
  const handleChange = ({ target: { value, name } }) =>
    setContactForm((prev) => ({ ...prev, [name]: value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const { default: emailJs } = await import("@emailjs/browser");
      await emailJs.send(
        "service_mnehd7q",
        "template_rywk01a",
        {
          from_name: contactForm.name,
          to_name: "kharchi merouane",
          message: contactForm.message,
          email: contactForm.email,
          company_name: contactForm.companyName,
        },
        "AXN0NM8BSmKr1TVYt",
      );
      alert("Message sent");
      setContactForm({ email: "", name: "", message: "", companyName: "" });
    } catch {
      alert("Unable to send the message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <input
          value={contactForm.name}
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Your name"
          required
          className={inputCls}
        />
        <input
          value={contactForm.companyName}
          type="text"
          name="companyName"
          onChange={handleChange}
          placeholder="Company (optional)"
          className={inputCls}
        />
      </div>
      <input
        value={contactForm.email}
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Your email"
        required
        className={inputCls}
      />
      <textarea
        value={contactForm.message}
        name="message"
        onChange={handleChange}
        placeholder="Your message"
        required
        rows={5}
        className={`${inputCls} resize-none`}
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-1 w-full rounded-xl bg-[#CBACF9] py-3 text-sm font-semibold text-gray-900 transition-opacity duration-150 hover:opacity-90 disabled:opacity-50"
      >
        {loading ? "Sending…" : "Send message"}
      </button>
    </form>
  );
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [contactForm, setContactForm] = useState({
    email: "",
    name: "",
    message: "",
    companyName: "",
  });

  return (
    <div className="w-full min-h-screen mx-auto px-6 -mt-32 pb-24 flex flex-col items-start justify-center gap-10 max-w-4xl">
      {/* Heading block */}
      <div className="flex text-center flex-col items-center w-full gap-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-white  leading-tight">
          Ready to take{" "}
          <span className="text-[#CBACF9]">your</span>{" "}
          digital presence <br/> to the next level?
        </h2>
        <p className="mt-2 text-sm text-white/50 leading-relaxed">
          Have a project in mind or just want to say hi? Fill in the form and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      {/* Form */}
      <FormElement
        contactForm={contactForm}
        loading={loading}
        setLoading={setLoading}
        setContactForm={setContactForm}
      />
    </div>
  );
};

export default Contact;
