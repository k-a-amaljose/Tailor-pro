import { Search } from "lucide-react";

function SearchBar({
  value = "",
  onChange = () => {},
  placeholder = "Search tailors, reels, designs...",
}) {
  return (
    <div className="search-bar">
      <Search size={18} />

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;