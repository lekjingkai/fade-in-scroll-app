import logo from "./logo.svg";
import "./App.css";
import colors from "./components/Css-colors";
import FadeInSection from "./components/FadeInSection";

function App() {
  return (
    <div className="App">
      <h1>All the CSS colors!</h1>

      {colors.map((color) => (
        <FadeInSection key={color}>
          <div className="box" style={{ backgroundColor: color }}>
            <span>{color}</span>
          </div>
        </FadeInSection>
      ))}
    </div>
  );
}

export default App;
