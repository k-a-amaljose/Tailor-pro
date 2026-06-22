import { useState } from "react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TopProfile from "../../Components/TopProfile/TopProfile";
import ChatList from "../../Components/ChatList/ChatList";
import MessagesSearchBar from "../../Components/MessagesSearchBar/MessagesSearchBar";

import "./Messages.css";

function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="messages-page">
      <Sidebar />

      <div className="messages-content">
        <div className="top-bar">
          <SearchBar />
          <TopProfile />
        </div>

        <div className="messages-container">
          {/* Left Chat List */}
          <div className="chat-sidebar">
            <h1>Messages</h1>
            <p>Connect and chat with your tailors.</p>

            <MessagesSearchBar />

            <ChatList
              selectedChat={selectedChat}
              setSelectedChat={setSelectedChat}
            />
          </div>

          {/* Right Chat Area */}
          <div className="chat-window">
            {selectedChat ? (
              <div className="chat-content">
                <div className="chat-header">
                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="chat-header-avatar"
                  />

                  <div>
                    <h3>{selectedChat.name}</h3>
                    <p>{selectedChat.status}</p>
                  </div>
                </div>

                <div className="chat-messages">
                  {selectedChat.messages.map((message) => (
                    <div
                      key={message.id}
                      className={`message ${message.type}`}
                    >
                      <p>{message.text}</p>

                      <span className="message-time">
                        {message.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="chat-input">
                  <input
                    type="text"
                    placeholder="Type your message..."
                  />

                  <button>Send</button>
                </div>
              </div>
            ) : (
              <h2>Select a conversation</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Messages;