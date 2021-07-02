import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dictionary from "./Dictionary.js";

function App() {
  return (
    <div className="App">
      
      <div className="container">
      <main>
        <Dictionary />
      </main>
      <footer className="AppFooter">Open source coded by Isabella Otto</footer>
      </div>
    </div>
  );
}

export default App;
