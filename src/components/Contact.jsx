import React from 'react'
import theme_pattern from '../assets/theme_pattern.svg'
import mail_icon from '../assets/mail_icon.svg'
import location_icon from '../assets/location_icon.svg'
import call_icon from '../assets/call_icon.svg'

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
    <section id='contact' className='py-20 bg-[#18181b] text-white'>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <h1 className="text-3xl font-bold">Get in Touch</h1>
          <img src={theme_pattern} alt="" className="h-8" />
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-4">Let's talk</h2>
            <p className="mb-6 text-gray-300">
              I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img src={mail_icon} alt="" className="w-6 h-6" />
                <span>cravi7715@gmil.com</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={call_icon} alt="" className="w-6 h-6" />
                <span>+91 7892968904</span>
              </div>
              <div className="flex items-center gap-3">
                <img src={location_icon} alt="" className="w-6 h-6" />
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
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

