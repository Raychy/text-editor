import "./App.css";
import RightSideComponent from "./components/RightSide";
import LeftSideComponent from "./components/LeftSide";


const App = () => {

  return (
    <div className="container">

      <LeftSideComponent />

      <RightSideComponent />

    </div>
  );
};

export default App;