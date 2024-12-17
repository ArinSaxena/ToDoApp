import View from "components/view";
import "./App.css";
import Input from "components/Input/Input";
import Footer from "components/Footer/Footer";
import { useState } from "react";


function App() {
  // const [filter, setFilter] = useState("All");
  return (
    <div className="App">
      <h1>Todos</h1>
      <Input />
      <View />
      <Footer/>
    </div>
  );
}

export default App;
