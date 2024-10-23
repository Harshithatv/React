import React, { useState } from 'react';
import Title from '../layouts/Title';
import ContactLeft from './ContactLeft';
import "../styles/contact.css";


const Contact = () => {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!username || !phoneNumber || !email || !subject || !message) {
      setErrMsg("Please fill out all fields.");
    } else {
      setSuccessMsg("Message sent successfully!");
      setErrMsg("");
      setUsername("");
      setPhoneNumber("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <section id="contact" className="w-full py-20 bg-black">
      <div className="text-center mb-12">
        <Title title="CONTACT" des="Get In Touch" />
      </div>
      <div className="w-full flex flex-col lgl:flex-row justify-between gap-8 px-6">
        <ContactLeft />
        <div className="w-full lgl:w-[60%] h-auto bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 p-6 lgl:p-8 rounded-lg shadow-lg border border-gray-800">
          <form onSubmit={handleSend} className="w-full flex flex-col gap-6">
            {errMsg && (
              <p className="py-2 bg-red-800 text-red-200 text-center rounded-lg">{errMsg}</p>
            )}
            {successMsg && (
              <p className="py-2 bg-green-800 text-green-200 text-center rounded-lg">{successMsg}</p>
            )}
            <input
              type="text"
              placeholder="Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="contactInput bg-black border border-gray-700 text-gray-300"
            />
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="contactInput bg-black border border-gray-700 text-gray-300"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="contactInput bg-black border border-gray-700 text-gray-300"
            />
           
            <textarea
              rows="7"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="contactTextArea bg-black border border-gray-700 text-gray-300"
            ></textarea>
            <button
              type="submit"
              className="w-full h-12 bg-neon text-black rounded-lg hover:bg-white hover:text-neon transition-colors duration-500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
