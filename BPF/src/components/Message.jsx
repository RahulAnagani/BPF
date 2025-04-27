const Message = ({ onClose }) => {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">
        <div className="relative bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl shadow-lg p-6 w-[90%] max-w-md">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-white text-xl hover:text-red-400"
          >
            ✕
          </button>
          <h2 className="text-white text-xl font-semibold mb-4">Send me a message</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/60 outline-none"
              rows="4"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Message;
  