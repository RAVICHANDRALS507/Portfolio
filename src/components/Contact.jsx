import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/gmail.png'
import location from '../assets/location.png'
import call_icon from '../assets/call.png'
import twitter from '../assets/twitter.png'
import snapchat from '../assets/snapchat.png'
import facebook from '../assets/facebook.png'
import Insta from '../assets/Insta.png'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import gmail from '../assets/gmail.png'

const Contact = () => {
  // email
  const onSubmit = async (event) => {
    event.preventDefault();
    // setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "223b03c7-6bbc-4943-a63f-d3ced0872e7c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      alert(data.message);
      event.target.reset();
    } else {
      alert(data.message);
    }
  };

  return (
    <section id='contact' className='py-5 bg-[#18181b] text-white'>
      <div className="max-w-5xl mx-auto px-4">
        <div className="relative flex justify-start mb-10 items-center pl-1">
          <span className="absolute left-12 top-1/3 -translate-y-1/3 z-0 pointer-events-none">
            <img
              src={theme_pattern}
              alt="Theme Pattern"
              className="w-36 h-11 md:w-44 md:h-16 opacity-40"
              style={{ objectFit: "contain" }}
            />
          </span>
          <h1 className="text-3xl font-bold relative z-10 px-4 bg-transparent">Get in Touch</h1>
        </div>
        {/* Social Media Marquee Section */}
        <div className="mt-20 mb-20 space-y-4">
          {/* Row 1: Right to Left */}
          <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee-left">
               <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={github} alt="Github" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-blue-500">Github</span>
                </div>
              </a>
              {/* Twitter */}
              <a href="https://x.com/Ravichandra_LS" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={twitter} alt="Twitter" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-blue-400">Twitter</span>
                </div>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={facebook} alt="Facebook" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-blue-700">Facebook</span>
                </div>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com/__.ravivinay.__" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={Insta} alt="Instagram" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-pink-500">Instagram</span>
                </div>
              </a>
              {/* Mail */}
              <a href="mailto:ravichandralsprofessional@gmail.com" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={mail_icon} alt="Mail" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-red-500">Mail</span>
                </div>
              </a>
              {/* Repeat for seamless scrolling */}
              <a href="https://snapchat.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={snapchat} alt="Snapchat" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-blue-400">Snapchat</span>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ravichandrals" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={linkedin} alt="Linkedin" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-blue-700">Linkedin</span>
                </div>
              </a>
              {/* <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={Insta} alt="Instagram" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-pink-500">Instagram</span>
                </div>
              </a>
              <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer" className="mx-8 inline-block">
                <div className="flex flex-col items-center">
                  <img src={mail_icon} alt="Mail" className="h-12 w-12 mb-1" />
                  <span className="text-base font-semibold text-red-500">Mail</span>
                </div>
              </a> */}
            </div>
          </div>
          
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Let's talk</h2>
            <p className="mb-6 text-gray-300 text-justify">
              I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
            </p>
            <div className="space-y-4 hidden sm:block">
              <div className="flex items-center gap-3">
                <img src={mail_icon} alt="" className="w-8 h-6" />
                <span>ravichandralsprofessional@gmil.com</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={call_icon} alt="" className="w-6 h-6" />
                <span>+91 7892968904</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={location} alt="" className="w-6 h-8" />
                <span>Bangalore, Karnataka</span>
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className='flex-1 bg-[#232526] rounded-xl p-8 shadow-lg space-y-4'>
            <div>
              <label className="block mb-1 font-semibold">Your Name</label>
              <input type="text" placeholder='Enter your Name' name='name' className="w-full px-4 py-2 rounded bg-[#18181b] text-white border border-gray-700 focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Your Email</label>
              <input type="email" placeholder='Enter Your Email' name='email' className="w-full px-4 py-2 rounded bg-[#18181b] text-white border border-gray-700 focus:outline-none focus:border-yellow-400" />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Your Message</label>
              <textarea name="message" rows="5" placeholder='Describe your message' className="w-full px-4 py-2 rounded bg-[#18181b] text-white border border-gray-700 focus:outline-none focus:border-yellow-400"></textarea>
            </div>
            <button className="w-full py-3 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500 text-white font-semibold shadow-lg hover:scale-105 transition" type='submit'>
              Send Mail
            </button>
          </form>
        </div>

        
      </div>
    </section>
  );
}

export default Contact;

