import "./App.css";
import Bargraph from "./components/Bargraph";
import Linegraph from "./components/Linegraph";
import Navbar from "./components/Navbar.jsx";
import Piechart from "./components/Piechart.jsx";

function App() {
  return (
    <div className="App">
      <h1 className="text-center bg-primary text-white p-2 font-weight-bold">Energy Consumption Tracking and Analysis Platform</h1>
      <Navbar />
    </div>
  );
}

export default App;
