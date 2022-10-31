import "./styles/styles.scss";
import SobrietyTracker from "./SobrietyTracker";
import Form from "./Form";
import Entries from "./Entries";
import { useState, useEffect } from "react";
import { getDatabase, ref, push, onValue, remove } from "firebase/database";
import firebaseConfig from "./firebase";
import headerPhoto from "./assets/headerPhoto.jpg";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [newEntryButton, setNewEntryButton] = useState(false);
  const [showIntro, setShowIntro] = useState(true);
  const [showSobrietyTracker, setShowSobrietyTracker] = useState(false);
  const [entry, setEntry] = useState([]);
  const [displayNewEntry, setDisplayNewEntry] = useState(false);

  const handleEntryDisplay = () => {
    setDisplayNewEntry(!displayNewEntry);
  };

  const handleSobrietyTracker = () => {
    setShowSobrietyTracker(!showSobrietyTracker);
  }

  const handleGettingStarted = () => {
    setShowIntro(!showIntro);
    setShowSobrietyTracker(!showSobrietyTracker);
    setNewEntryButton(!newEntryButton);
  };

  const handleNewEntryClick = () => {
    setShowForm(!showForm);
    setNewEntryButton(!newEntryButton);
  };

  const handleFormSubmit = (
    event,
    date,
    urgeIntensity,
    triggers,
    quantity,
    feelsAfter,
    strategiesUsed
  ) => {
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
        newState.push({ key: key, data: data[key] });
      }
      //updating state with the new array
      console.log(newState);
      setEntry(newState);
      // const dataArray = Object.values(newState);
      // console.log(dataArray);
    });
  }, []);

  //content being rendered on page begins here
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="wrapper">RecoveryRoad</h2>
      </header>

      {showSobrietyTracker
       ?<section className="sectionTwo">
        <SobrietyTracker /> 
        <button onClick={handleSobrietyTracker}>Disable Feature</button>
        </section>
       : null}

      {showIntro ? (
        <>
          <section className="headerContent">
            <h1>Recovery Road: A substance use recovery tool to track your unique journey.</h1>
            <img
              className="headerPhoto"
              src={headerPhoto}
              alt="vector image of person holding a kit walking off a path in the mountains"
            />
          </section>
          <section className="introInfo wrapper">
            <div className="howTo wrapper">
              <div>
                <i class="fa-solid fa-arrow-up-right-dots"></i>
                <h3>Motivation</h3>
                <p>
                  Our app features a Sober Streak feature where you can track
                  your number of consecutive days in recovery. Not interested in
                  the number? Easily disable this feature within the app.{" "}
                </p>
              </div>
              <div>
                <i class="fa-solid fa-lightbulb"></i>
                <h3>Understanding</h3>
                <p>
                  Use our app to store details of you urge; such as when it
                  happened and how you got through it. You can use this info to
                  gain a better understanding of your triggers and build out
                  your support systems accordingly.{" "}
                </p>
              </div>
              <div>
              <i class="fa-solid fa-brain"></i>
                <h3>Functional Analysis</h3>
                <p>
                  Look back on your urge history to reflect on any patterns in
                  the purpose of your use. Explore these with a therapist or
                  healtcare provider to continue working towards your recovery
                  goals and access the right resources!
                </p>
              </div>
            </div>
            <div className="enterApp">
              <p>Are you interested in either reducing or stopping your use?</p>
              <div className="options">
                <button onClick={handleGettingStarted}>
                  Yes, Let's Get Started
                </button>
                <a href="https://harmreduction.org/all-resources/">
                  <button>No, but show me harm reduction resources</button>
                </a>
              </div>
            </div>
          </section>
        </>
      ) : null}

      {newEntryButton ? (
        <div className="wrapper beginnerSection">
          <h2>Recovery Log</h2>
          <button className="newEntryButton" onClick={handleNewEntryClick}>
            New Entry
          </button>
        </div>
      ) : null}
      <section className="mainContent">
      {showForm ? (
        
        <Form handleFormSubmit={handleFormSubmit} data={entry} />
      ) : null}

      {displayNewEntry ? <Entries display={handleEntryDisplay} /> : null}
        <div className="entriesSection">
      {showForm && entry && entry.length > 0
        ? entry.map((data) => {
            return <Entries data={data.data} />;
          })
        : null}
       </div>
      </section>

      <footer>
        <p className="wrapper">
          Disclaimer: This web application was made as a project in partial
          fulfillment of Juno College’s web development bootcamp. The data
          collected in this web application has not been tested in compliance
          with PHIPPA legislation. This web application is not intended for use
          and should not be used as a substitute for treatment. Please consult
          your respective healthcare provider for access to appropriate
          resrouces.
        </p>
      </footer>
    </div>
  );
}

export default App;
