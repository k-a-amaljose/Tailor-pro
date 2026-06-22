import { Search } from "lucide-react";

function MessagesSearchBar() {
  return (
    <div className="search-bar">
      <Search size={18} />

      <input
        type="text"
        placeholder="Search messages..."
      />
    </div>
  );
}

export default MessagesSearchBar;