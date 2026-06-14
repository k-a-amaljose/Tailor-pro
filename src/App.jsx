import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import SearchBar from "./Components/Searchbar/Searchbar";

function App() {
return (
        <>
        <div className="dashboard">
  <Sidebar />
  <div className="main-content">
    <SearchBar />
  </div>
</div>
       
        </>

);
}

export default App;