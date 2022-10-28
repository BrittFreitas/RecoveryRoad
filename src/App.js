import "./styles/styles.scss";
import firebaseConfig from "./firebase";
import SobrietyTracker from "./SobrietyTracker";
import Form from "./Form";
import Entries from "./Form";
import { useState, sideEffect } from "react";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";

function App() {
  const [newEntry, setNewEntry] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSobrietyTracker, setShowSobrietyTracker] = useState(false);

  const handleGettingStarted = () => {
    setShowIntro(!showIntro);
    setNewEntry(!newEntry);
    setShowSobrietyTracker(!showSobrietyTracker);
    console.log('button was clicked')
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Recovery Road</h1>
      </header>

      {showSobrietyTracker ? <SobrietyTracker /> : null}

      {showIntro ? (
        <section className="introInfo wrapper">
          <p>Are you hoping to reduce or stop your use?</p>
          <div className="options">
            <button onClick={handleGettingStarted}>
              Yes, Let's Get Started
            </button>
            <a href="https://harmreduction.org/all-resources/">
              <button>No, but show me harm reduction resources</button>
            </a>
          </div>
        </section>
      ) : null}

      {newEntry ? <Form /> : null}

      <footer>
        <button>resources</button>
        <p>Disclaimer: This web application was made as a project in partial fulfillment of Juno College’s web development bootcamp. The data collected in this web application has not been tested in compliance with PHIPPA legislation. This web application is not intended for use and should not be used as a substitute for treatment. Please consult your resepctive healthcare provider for access to appropriate resrouces.</p>
      </footer>
    </div>
  );
}

export default App;
