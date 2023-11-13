import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido" />
    </div>
  );
}

export default App;
