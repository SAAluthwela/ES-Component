import Searchbar from "./components/searchbar/Searchbar";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Searchbar />
      </div>
    </div>
  );
}

export default App;
