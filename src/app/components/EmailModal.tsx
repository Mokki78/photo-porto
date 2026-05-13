"use client"

import { useState } from "react";

export default function ContactModal() {
    const [ open, setOpen ] = useState(false);

    return (
        <>
        <button
        onClick={() => setOpen(true)}
        className="group"
        aria-label="Open contact form"
        
        >
        <svg xmlns="http://www.w3.org/2000/svg"
        width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail h-6 w-6 text-white group-hover:text-orange-400 transition-colors"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg>
        <span className="text-white group-hover:text-color-orange-400">Email me</span>

        </button>
     

        {open && (
            <div
            className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="relative bg-white p-9 w-full max-w-md shadow-xl bg-black scale-100 animate-in fade-in zoom-in-50">
            <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
                <div className="cross"> x </div>
            
            </button>
            <h2 className="mb-4 formHeader">
            Contact me
            </h2>
            <form className="flex flex-col gap-3 formText">
            <input
            type="text"
            placeholder="Your name"
            className="border p-2 text-black bg-white formText"
            required
            />
            <input
            type="email"
            placeholder="Your email"
            className="border p-2 text-black bg-white formText"
            required
            />
            <textarea
            placeholder="Your message"
            className="border  text-black bg-white p-2 formText"
            rows={4}
            required
            />
            <button
            type="submit"
            className="border  text-black bg-white p-2 hover:bg-orange-700"
             >
                 Submit
            </button>
            </form>
            </div>
            </div>
         )}
        </>
    )
 
}