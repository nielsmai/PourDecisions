import './App.css';
import CreateDrink from "./components/createDrink/createDrink.js";
//<button onClick={<CreateDrink />}>Click</button>
//<CreateDrink />
function App() {


  return (
    <div className="wrapper">
      <h1>PourDecisions</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/logInAccount">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
