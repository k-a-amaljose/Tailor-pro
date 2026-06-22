import "./ChatList.css";
import { chats } from "../../data/messages";

function ChatList({ selectedChat, setSelectedChat }) {
  return (
    <div className="chat-list">
      {chats.map((chat) => (
        <div
          key={chat.id}
          className={`chat-item ${
            selectedChat?.id === chat.id ? "active" : ""
          }`}
          onClick={() => setSelectedChat(chat)}
        >
          <img
            src={chat.avatar}
            alt={chat.name}
            className="chat-avatar"
          />

          <div className="chat-info">
            <h4>{chat.name}</h4>
            <p>{chat.lastMessage}</p>
          </div>

          <div className="chat-meta">
            <span>{chat.time}</span>

            {chat.unread > 0 && (
              <div className="unread-badge">
                {chat.unread}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ChatList;