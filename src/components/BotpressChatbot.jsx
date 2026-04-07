import { Webchat } from '@botpress/webchat'
import { useState } from 'react'
import { FaComments, FaTimes } from 'react-icons/fa'

const CLIENT_ID = "cbb56257-ec00-4544-b483-a77772f0f2fb";

export default function BotpressChatbot() {
  const [isWebchatOpen, setIsWebchatOpen] = useState(false);

  const toggleWebchat = () => setIsWebchatOpen((prev) => !prev);

  return (
    <>
      {/* Botpress Webchat */}
      <div
        className={`fixed bottom-24 right-5 z-50 bg-white rounded-lg shadow-2xl transition-all duration-300 ${
          isWebchatOpen ? "block" : "hidden"
        }`}
        style={{ width: 300, height: 400, maxWidth: "95vw", maxHeight: "80vh" }}
      >
        <Webchat clientId={CLIENT_ID} />
      </div>

      {/* Floating Action Button with Circular Text */}
      <div 
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center animate-bounce"
        style={{ width: '80px', height: '80px' }}
      >
        {/* SVG Circular Text */}
        <svg width="80" height="80" className="absolute pointer-events-none select-none left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <defs>
            <path
              id="circlePath"
              d="M 40,40 m -32,0 a 32,32 0 1,1 64,0 a 32,32 0 1,1 -64,0"
            />
          </defs>
            {/* --- UPDATED: Changed fontWeight to 900 (Extra Bold) and added slight tracking --- */}
            <text fill="#facc15" fontSize="15" fontWeight="900" style={{ letterSpacing: '0.5px' }}>
              <textPath xlinkHref="#circlePath" startOffset="0%">
                👋Chat with me!
              </textPath>
            </text>
        </svg>
        
        {/* Chatbot Button */}
        <button
          onClick={toggleWebchat}
          className="relative bg-yellow-400 hover:bg-yellow-300 text-black rounded-full w-14 h-14 shadow-lg flex items-center justify-center transition-transform hover:scale-110"
          aria-label="Toggle Chatbot"
        >
          {isWebchatOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaComments className="w-5 h-5" />
          )}
        </button>
      </div>
    </>
  );
}