import Routes from "./Routes";
import "./App.css";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Routes location={location} />
    </div>
  );
}
export default App;
