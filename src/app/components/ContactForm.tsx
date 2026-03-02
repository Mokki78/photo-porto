"use client";

import { useState, useTransition } from "react";
import { sendEmail } from "../actions";

export default function ContactForm() {
  const [success, setSuccess] = useState(false);
  const [pending, startTransition] = useTransition();

  return (
    <>
      <form
        action={(formData) =>
          startTransition(async () => {
            await sendEmail(formData);
            setSuccess(true);
          })
        }
        className="max-w-lg mx-auto bg-white p-8  shadow-xl space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800">Contact Me</h2>

        <input
          name="name"
          placeholder="Your Name"
          required
          className="w-full border  px-4 py-3 focus:ring-2 focus:ring-black"
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full border  px-4 py-3 focus:ring-2 focus:ring-black"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          required
          className="w-full border  px-4 py-3 focus:ring-2 focus:ring-black"
        />

        {/* 🛡 Honeypot field (hidden from users) */}
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />

        <button
          disabled={pending}
          className="w-full bg-black text-white py-3 hover:bg-gray-800 transition"
        >
          {pending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {success && <SuccessModal onClose={() => setSuccess(false)} />}
    </>
  );
}

function SuccessModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-sm text-center space-y-4 animate-fadeIn">
        <h3 className="text-2xl font-semibold text-green-600">
          Message Sent!
        </h3>
        <p className="text-gray-600">
          Thanks for reaching out. I’ll reply soon.
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-black text-white px-6 py-2  hover:bg-gray-800"
        >
          Close
        </button>
      </div>
    </div>
  );
}
