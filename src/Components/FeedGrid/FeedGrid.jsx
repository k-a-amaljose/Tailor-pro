import "./FeedGrid.css";

import FeedCard from "../FeedCard/FeedCard";
import feedData from "../../data/feedData";

function FeedGrid() {
  return (
    <div className="feed-grid">

      {feedData.map((item) => (
        <FeedCard
          key={item.id}
          item={item}
        />
      ))}

    </div>
  );
}

export default FeedGrid;