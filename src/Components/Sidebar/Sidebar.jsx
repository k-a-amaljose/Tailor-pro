import { useState } from "react";
import {
  Home,
  Store,
  Users,
  ShoppingCart,
  Bookmark,
  MessageCircle,
  Bell,
  User,
  Settings,
} from "lucide-react";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", icon: Home },
    { name: "Boutiques", icon: Store },
    { name: "Following", icon: Users },
    { name: "Cart", icon: ShoppingCart },
    { name: "Saved", icon: Bookmark },
    { name: "Messages", icon: MessageCircle },
    { name: "Notifications", icon: Bell },
    { name: "Profile", icon: User },
    { name: "Settings", icon: Settings },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        Tailor<span>Pro</span>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.name}
              className={`menu-item ${
                activeItem === item.name ? "active" : ""
              }`}
              onClick={() => setActiveItem(item.name)}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;