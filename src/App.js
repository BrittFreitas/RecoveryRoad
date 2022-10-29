import "./styles/styles.scss";
import SobrietyTracker from "./SobrietyTracker";
import Form from "./Form";
import Entries from "./Entries";
import { useState, useEffect } from "react";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import firebaseConfig from "./firebase";

function App() {

  const [showForm, setShowForm] = useState(false);
  const [newEntryButton, setNewEntryButton] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSobrietyTracker, setShowSobrietyTracker] = useState(false);
  const [formData, setFormData] = useState({});


  const handleGettingStarted = () => {
    setShowIntro(!showIntro);
    setShowSobrietyTracker(!showSobrietyTracker);
    setNewEntryButton(!newEntryButton);
  };

  const handleNewEntryClick = () => {
    setShowForm(!showForm);
    setNewEntryButton(!newEntryButton);
  };

  const handleFormSubmit = (event, date, urgeIntensity, triggers, quantity, feelsAfter, strategiesUsed) => {
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database);
    //preventing default action of the form
    event.preventDefault();
   //creating an object that stores all my user input changes
    const data = {
      date: date,
      urgeIntensity: urgeIntensity,
      triggers: triggers,
      quantity: quantity,
      reflections: feelsAfter,
      strategiesUsed: strategiesUsed,
    };
    setFormData(data)
    //push the info to firebase
    push(databaseRef, data);

  };

  useEffect(() => {
    //create a variable that will hold on to our databse values
    const database = getDatabase(firebaseConfig);
    //create a variable that makes reference to our database
    const databaseRef = ref(database);
    // grabbing the information from our database
    onValue(databaseRef, (response) => {
      const newState = [];
      //storing the returned data as a variable
      const data = response.val();
      //loop through the returned object
      for (let key in data) {
        // we're coming back to this in a bit
        newState.push({key: key, name: data[key]});
      }
      //updating state with the new array
      console.log(newState);
    });
  }, []);

  //content being rendered on page begins here
  return (
    <div className="App">
      <header className="App-header wrapper">
        <h1>Recovery Road</h1>
      </header>

      {showSobrietyTracker ? <SobrietyTracker /> : null}

      {showIntro ? (
        <section className="introInfo wrapper">
          <div className="aboutApp">
            <p>About the App</p>
          </div>
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

      {newEntryButton ? (
        <div className="wrapper beginnerSection">
          <button className="newEntryButton" onClick={handleNewEntryClick}>New Entry</button>
          </div>
      ) : null}

      {showForm
       ? <Form handleFormSubmit={handleFormSubmit} formData={formData} /> 
       : null}



      <footer>
        <p className="wrapper">
          Disclaimer: This web application was made as a project in partial
          fulfillment of Juno College’s web development bootcamp. The data
          collected in this web application has not been tested in compliance
          with PHIPPA legislation. This web application is not intended for use
          and should not be used as a substitute for treatment. Please consult
          your resepctive healthcare provider for access to appropriate
          resrouces.
        </p>
      </footer>
    </div>
  );
}

export default App;
