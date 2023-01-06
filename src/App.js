import "./styles/styles.scss";
import Footer from "./Footer";
import LandingPage from "./LandingPage";
import Entries from "./Entries";
import Nav from "./Nav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";


function App() {

  return (
    <div className="App">
      <Nav/>
      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Dashboard" element={<Dashboard/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
