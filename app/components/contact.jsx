
"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_9gngq9d",   // e.g. service_xxxxx
        "template_24493xc",  // e.g. template_xxxxx
        formRef.current,
        "KWXSbdV1kVexp8Ryh" 
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  return (
    <div className="bg-[#1e0730] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-[#2a0b44] rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-yellow-400 mb-2">
          Contact Suryan
        </h1>
        <p className="text-gray-300 mb-8">
          Let’s build something meaningful together 🚀
        </p>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >

          <input
            type="text"
            name="name"
            required
            placeholder="Your lovely name"
            className="bg-[#1e0730] text-white px-4 py-3 rounded-md border border-purple-600 focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email address"
            className="bg-[#1e0730] text-white px-4 py-3 rounded-md border border-purple-600 focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            rows="5"
            required
            placeholder="Your message"
            className="bg-[#1e0730] text-white px-4 py-3 rounded-md border border-purple-600 focus:ring-2 focus:ring-yellow-400 resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className={`mt-2 font-semibold py-3 rounded-md transition-all
              ${
                status === "sending"
                  ? "bg-gray-400 text-gray-700 cursor-not-allowed"
                  : "bg-yellow-400 text-[#1e0730] hover:bg-yellow-300"
              }
            `}
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {/* Status Messages */}
          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">
              ✅ Message sent successfully! I’ll get back to you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">
              ❌ Something went wrong. Please try again later.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
