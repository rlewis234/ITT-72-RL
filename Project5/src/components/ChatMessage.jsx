function ChatMessage({ message }) {
  const date = new Date(message.timestamp);

  const formattedDate = date.toLocaleDateString();

  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div
      className={`message ${
        message.sender === "User" ? "user" : "bot"
      }`}
    >
      <div className="message-header">
        <strong>{message.sender}</strong>
        <span className="timestamp"> {formattedDate} {formattedTime}</span>
      </div>

      <p>{message.text}</p>
    </div>
  );
}

export default ChatMessage;