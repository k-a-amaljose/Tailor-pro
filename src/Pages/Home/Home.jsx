import "./Home.css";

import Sidebar from "../../Components/Sidebar/Sidebar";
import Searchbar from "../../Components/Searchbar/Searchbar";
import TopProfile from "../../Components/TopProfile/TopProfile";

function Home() {
  return (
    <div className="home-page">
      <Sidebar />

      <div className="home-content">

        <div className="top-bar">
          <Searchbar />
          <TopProfile />
        </div>

      </div>
    </div>
  );
}

export default Home;