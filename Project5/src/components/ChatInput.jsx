import { useState } from "react";

function ChatInput({ onSend }) {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (input.trim() === "") {
      setError("Message cannot be empty.");
      return;
    }

    setError("");
    onSend(input);
    setInput("");
  }

  return (
    <form
      className="chat-input"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button disabled={!input.trim()}>
        Send
      </button>

      {error && (
        <p className="error">{error}</p>
      )}
    </form>
  );
}

export default ChatInput;
