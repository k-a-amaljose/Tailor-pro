import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="search-bar">
      <Search size={18} />

      <input
        type="text"
        placeholder="Search tailors, reels, designs..."
      />
    </div>
  );
}

export default SearchBar;