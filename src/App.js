import Header from "./Component/Header";
import Itemlist from "./Component/Itemlist";
import "./App.css";
import Carousal from "./Component/Carousal";
import DisplayCard from "./Component/DisplayCard";

function App() {
  return (
    <div className="app">
      <Header />
      <Itemlist />
      <Carousal />
      <DisplayCard heading={"men's clothing"} category={"men's clothing"} />
      <DisplayCard heading={"jewelery"} category={"jewelery"} />
      <DisplayCard heading={"electronics"} category={"electronics"} />
      <DisplayCard heading={"women's clothing"} category={"women's clothing"} />
    </div>
  );
}

export default App;
