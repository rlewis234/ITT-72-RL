import ChatMessage from "./ChatMessage";
import TypingIndicator from "./TypingIndicator";

function ChatWindow({ messages, typing }) {
  return (
    <div className="chat-window">
      {messages.length === 0 ? (
        <p className="welcome">
          Welcome! Ask me anything.
        </p>
      ) : (
        messages.map((message) => (
          <ChatMessage
            key={message.id}
            message={message}
          />
        ))
      )}

      {typing && <TypingIndicator />}
    </div>
  );
}

export default ChatWindow;
