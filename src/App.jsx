import "./App.css";
import Navbar from "./component/pages/Navbar";
import Background from "./component/special/background";
import Home from "./component/pages/Home";
import Layout from "./component/special/Layout";

function App() {
  return (
    <>
      <div className=" w-screen min-h-screen relative overflow-x-hidden scroll-smooth">
        <Background />
        <Navbar />
        <Layout />
      </div>
    </>
  );
}

export default App;
