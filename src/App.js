import './App.css';
import Card from "./components/Card"
import data from "./data"
import Header from "./components/Header"

function App() {
  // console.log(data)
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        {data.map(item => <Card {...item} />)}
      </div>
    </div>
  );
}

export default App;
