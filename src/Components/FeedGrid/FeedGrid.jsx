import "./FeedGrid.css";

import FeedCard from "../FeedCard/FeedCard";
import feedData from "../../data/feedData";

function FeedGrid({ searchTerm = "" }) {

  const filteredPosts =
    feedData.filter((item) => {

      const search =
        searchTerm.toLowerCase();

      return (
        item.tailorName
          ?.toLowerCase()
          .includes(search) ||

        item.caption
          ?.toLowerCase()
          .includes(search)
      );
    });

  return (
    <div className="feed-grid">

      {filteredPosts.length > 0 ? (

        filteredPosts.map((item) => (

          <FeedCard
            key={item.id}
            item={item}
          />

        ))

      ) : (

        <div
          style={{
            gridColumn: "1 / -1",
            textAlign: "center",
            padding: "40px",
            color: "#666",
            fontSize: "16px",
          }}
        >
          No posts found
        </div>

      )}

    </div>
  );
}

export default FeedGrid;