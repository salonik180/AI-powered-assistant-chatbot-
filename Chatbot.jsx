import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "./Chatbot.css";

const Chatbot = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" }
  ]);
  const chatEndRef = useRef(null);

  const sendMessage = async (e) => {
    e.preventDefault();
    const trimmedInput = input.trim();
    if (!trimmedInput) return;

    // Add user's message
    const userMsg = { sender: "user", text: trimmedInput };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Show "Bot is typing..." temporarily
    const typingMsg = { sender: "bot", text: "Typing..." };
    setMessages((prev) => [...prev, typingMsg]);

    try {
      // Send message to backend
      const response = await axios.post("http://localhost:5000/chat", { message: trimmedInput });
      const botReply = { sender: "bot", text: response.data.reply || "Sorry, I didn't understand." };

      // Replace "Typing..." with actual bot reply
      setMessages((prev) => [
        ...prev.slice(0, -1),
        botReply
      ]);

    } catch (error) {
      console.error("Error connecting to backend:", error);
      const errorMsg = { sender: "bot", text: "⚠️ Error connecting to server." };
      setMessages((prev) => [
        ...prev.slice(0, -1),
        errorMsg
      ]);
    }
  };

  // Auto-scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="chat-container">
      <h2> AI Chatbot</h2>
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
          >
            <p>{msg.text}</p>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      <form className="chat-input" onSubmit={sendMessage}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
