import './App.css';
import CreateDrink from "./components/createDrink/createDrink.js";
import getAllDrinks from "./components/getAllDrinks/getAllDrinks.js";

//<button onClick={<CreateDrink />}>Click</button>
//<CreateDrink />
function App() {


  return (
    // <div className="App">
      
    //   <h1>PourDecisions</h1>

    //   <CreateDrink />
    // </div>

    getAllDrinks()
    
  );
}

export default App;
