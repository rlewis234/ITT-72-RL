import { useState } from "react";
import ChatHeader from "./components/ChatHeader";
import ChatWindow from "./components/ChatWindow";
import ChatInput from "./components/ChatInput";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);

  function toggleTheme() {
    setDarkMode((current) => !current);
  }

  function getBotResponse(input) {
    const text = input.toLowerCase();

    if (text.includes("react")) {
      return "React is a JavaScript library used to build user interfaces.";
    }

    if (text.includes("props")) {
      return "Props allow data to be passed from one component to another.";
    }

    if (text.includes("state")) {
      return "State stores data that can change over time.";
    }

    if (text.includes("hello")) {
      return "Hello! How can I help you today?";
    }

    if (text.includes("javascript") || text.includes("js")) {
      return "JavaScript is the programming language that powers interactive websites.";
    }

    if (text.includes("html")) {
      return "HTML provides the structure of a webpage.";
    }

    if (text.includes("css")) {
      return "CSS is used to style and design web pages.";
    }

    if (text.includes("hook") || text.includes("hooks")) {
      return "React Hooks let you use state and other React features inside functional components.";
    }

    if (text.includes("useState")) {
      return "useState is a Hook that lets you add state to functional components.";
    }

    if (text.includes("useeffect") || text.includes("useEffect")) {
      return "useEffect lets you perform side effects like fetching data or updating the document title.";
    }

    return "That's interesting! Tell me more.";
  
  }

  function sendMessage(text) {
    const userMessage = {
      id: Date.now(),
      sender: "User",
      text,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTyping(true);

    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        sender: "Bot",
        text: getBotResponse(text),
        timestamp: new Date().toISOString(),
      };

      setMessages((prev) => [...prev, botMessage]);
      setTyping(false);
    }, 1000);
  }

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Header
        toggleTheme={toggleTheme}
        darkMode={darkMode}
      />

      <div className="chat-container">
        <ChatHeader />

        <ChatWindow
          messages={messages}
          typing={typing}
        />

        <ChatInput onSend={sendMessage} />
      </div>

      <Footer />
    </div>
  );
}

export default App;