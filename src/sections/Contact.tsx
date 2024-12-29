'use client'

import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import { FaRegAddressCard } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


export const ContactSection = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [massage, setMassage] = useState('');



  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = 'service_4y3qrni';
    const templateId = 'template_s712ihg';
    const publicKey = 'zbgT8cxgbsLZIuova';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Muhammad Jowel',
      message: massage,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
     .then(() => {
       toast.success('Message sent successfully!')
       setName('');
       setEmail('');
       setMassage('');
     })
     .catch((error) => {
      console.error("Error sending email:", error);
       toast.error('Failed to send message. Please try again.')
     });

  };


  return (
    <div className="py-16 lg:py-20 pt-12" id="contact">
      <div className="container">
        <div className="bg-gradient-to-t from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grainImage.src})`,
            }}
          ></div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
            {/* Left Column - Contact Information */}
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="font-serif text-2xl lg:text-3xl">
                Let’s create something amazing together!
              </h2>
              <p className="text-sm lg:text-base mt-2">
                Ready to bring your next project to life? Let’s connect and
                discuss how I can help you achieve your goals.
              </p>

              <div className="mt-6">
                <h1 className="font-serif text-xl">Contact Information</h1>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2">
                    <FaRegAddressCard className="text-xl" />
                    <p>Al Riyadh, Saudi Arabia</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FiMail className="text-xl" />
                    <p>softdev.jowel@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaPhoneAlt className="text-xl" />
                    <p>+966-53-449-6202</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                    type="text"
                    placeholder="Full Name"
                    className="text-white w-full px-6 py-3 rounded-xl bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                </div>
                <div>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    type="email"
                    placeholder="Your Email"
                    className="text-white w-full px-6 py-3 rounded-xl bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                </div>
                <div>
                  <textarea
                    onChange={(e) => setMassage(e.target.value)}
                    value={massage}
                    required
                    placeholder="Your Message"
                    rows={4}
                    className="text-white w-full px-6 py-3 rounded-xl bg-gray-900/70 focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  ></textarea>
                </div>

                <div className="text-center md:text-left">
                  <button type="submit" className=" border-white bg-white inline-flex justify-center items-center px-6 h-12 rounded-xl gap-2 w-full md:w-max border  hover:border-white/70 hover:bg-transparent duration-700">
                    <span className="font-semibold">Send Message</span>
                    <ArrowUpRightIcon className="size-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
