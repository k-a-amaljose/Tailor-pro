import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Send,
  MoreVertical,
  Phone,
  Video,
  CheckCheck,
  Smile,
  Plus,
  Mic
} from "lucide-react";

import Sidebar from "../../Components/Sidebar/Sidebar";
import ChatList from "../../Components/ChatList/ChatList";
import MessagesSearchBar from "../../Components/MessagesSearchBar/MessagesSearchBar";

import "./Messages.css";
import { chats } from "../../data/messages";

function Messages() {
  const [chatList, setChatList] = useState(chats);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const navigate = useNavigate();

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (selectedChat) {
      setMessages(selectedChat.messages);
    }
  }, [selectedChat]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    if (!newMessage.trim() || !selectedChat) return;

    const message = {
      id: Date.now(),
      text: newMessage,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "sent",
    };

    const updatedChats = chatList.map((chat) => {
      if (chat.id === selectedChat.id) {
        return {
          ...chat,
          lastMessage: message.text,
          time: message.time,
          messages: [...chat.messages, message],
        };
      }
      return chat;
    });

    setChatList(updatedChats);

    const updatedSelectedChat = updatedChats.find(
      (chat) => chat.id === selectedChat.id
    );

    setSelectedChat(updatedSelectedChat);
    setMessages(updatedSelectedChat.messages);
    setNewMessage("");
  };

  return (
    <div className="messages-page">
      <Sidebar />

      <div className="messages-content">
        <div className="messages-container">

          {/* Left Chat List Sidebar */}
          <div className="chat-sidebar">
            <div className="chat-sidebar-header">
              <div className="header-top">
                <h1>Messages</h1>

                <button className="icon-btn-ghost">
                  <MoreVertical size={20} />
                </button>
              </div>

              <div className="search-wrapper">
                <MessagesSearchBar />
              </div>
            </div>

            <div className="chat-list-wrapper">
              <ChatList
                chats={chatList}
                selectedChat={selectedChat}
                setSelectedChat={setSelectedChat}
              />
            </div>
          </div>

          {/* Right Chat Window */}
          <div className="chat-window">
            {selectedChat ? (
              <div className="chat-content">

                {/* Header */}
                <div className="chat-header">
                  <div className="user-info">
                    <img
                      src={selectedChat.avatar}
                      alt={selectedChat.name}
                      className="chat-header-avatar"
                    />

                    <div className="user-details">
                      <h3>{selectedChat.name}</h3>
                      <p className="online-status">Online</p>
                    </div>
                  </div>

                  <div className="header-actions">
                    <button
                      className="icon-btn"
                      onClick={() => navigate("/video-call")}
                    >
                      <Video size={20} />
                    </button>

                    <button className="icon-btn">
                      <Phone size={20} />
                    </button>

                    <div className="divider"></div>

                    <button className="icon-btn">
                      <MoreVertical size={20} />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="chat-messages">
                  <div className="messages-scroll-area">

                    <div className="date-divider">
                      <div className="date-text">TODAY</div>
                    </div>

                    {messages.map((message, index) => (
                      <div
                        key={message.id || index}
                        className={`message-wrapper ${message.type}`}
                      >
                        <div className="message-bubble">
                          <p>{message.text}</p>

                          <div className="message-meta">
                            <span className="time">
                              {message.time}
                            </span>

                            {message.type === "sent" && (
                              <CheckCheck
                                size={14}
                                className="status-icon"
                              />
                            )}
                          </div>

                          <div className="bubble-tail"></div>
                        </div>
                      </div>
                    ))}

                    <div ref={messagesEndRef}></div>
                  </div>
                </div>

                {/* Input */}
                <div className="chat-input-area">
                  <div className="input-container">

                    <button className="input-action-btn">
                      <Smile size={22} />
                    </button>

                    <button className="input-action-btn">
                      <Plus size={22} />
                    </button>

                    <form
                      className="message-form"
                      onSubmit={handleSendMessage}
                    >
                      <input
                        type="text"
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) =>
                          setNewMessage(e.target.value)
                        }
                      />

                      {newMessage.trim() ? (
                        <button
                          type="submit"
                          className="send-circle-btn active"
                        >
                          <Send size={20} />
                        </button>
                      ) : (
                        <button
                          type="button"
                          className="send-circle-btn"
                        >
                          <Mic size={20} />
                        </button>
                      )}
                    </form>

                  </div>
                </div>

              </div>
            ) : (
              <div className="no-chat-selected">
                <div className="empty-state">
                  <div className="brand-logo">
                    <span className="brand-black">Tailor</span>
                    <span className="brand-pink">Pro</span>
                  </div>

                  
                  
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Messages;