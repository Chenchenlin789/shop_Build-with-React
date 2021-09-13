import "./App.css";
import Info from "./components/Info";
import Section from "./components/Section";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Section></Section>
      <Info></Info>
      <Footer></Footer>

      <header className="App-header"></header>
    </div>
  );
}

export default App;
