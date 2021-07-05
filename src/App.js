import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary />
        </main>

        <footer className="AppFooter">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/12Isabella/dictionary-project-sugar"
          >
            Open source{" "}
          </a>
          coded by Isabella Otto
        </footer>
      </div>
    </div>
  );
}

export default App;
