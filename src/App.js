import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const token = "BOT_TOKEN"; //your bot token
    const chatId = "CHAT_ID"; //your bot chat id

    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    try {
      await axios.post(url, {
        chat_id: chatId,
        text: message,
        parse_mode: "HTML",
      });
      setMessage("");
      alert("Message sent");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="App">
      <div className="bg-blue-200 min-h-screen flex items-center justify-center">
        <div className="w-full">
          <h1 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">
            Type something
          </h1>
          <form
            className="max-w-2xl mx-auto"
            action=""
            method="POST"
            onSubmit={sendMessage} // Add the onSubmit handler
          >
            <div className="mb-5">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                value={message}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your message..."
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <button
                type="submit"
                className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
