import "./App.css";
import Info from "./components/Info";
import ItemList from "./components/ItemList";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <ItemList></ItemList>
      </div>
      {/* <div className="flex">
        <Section></Section>
        <Section></Section>
      </div> */}
      <Info></Info>
      <Footer></Footer>
    </div>
  );
}

export default App;
