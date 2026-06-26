// SavedBoardsSection.jsx

import "./SavedBoards.css";

function SavedBoardsSection({
  boards,
}) {
  return (
    <section className="saved-boards">

      <div className="saved-boards-header">

        <h2>Saved Boards</h2>

        <button className="create-board-btn">
          Create Board
        </button>

      </div>

      <div className="boards-grid">

        {boards.length > 0 ? (
          boards.map((board) => (
            <div
              key={board.id}
              className="board-card"
            >
              <img
                src={board.coverImage}
                alt={board.name}
                className="board-image"
              />

              <div className="board-content">

                <h3>{board.name}</h3>

                <p>
                  {board.itemCount} saved items
                </p>

              </div>
            </div>
          ))
        ) : (
          <div className="empty-board-state">

            <h3>No Boards Yet</h3>

            <p>
              Create your first board to save
              favourite designs and boutiques.
            </p>

          </div>
        )}

      </div>

    </section>
  );
}

export default SavedBoardsSection;