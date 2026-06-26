import "./ChatList.css";
function ChatItem({ name, lastMessage, time }) {
  return (
    <div className="chat-item">
      <h4>{name}</h4>
      <p>{lastMessage}</p>
      <span>{time}</span>
    </div>
  );
}

export default ChatItem;