import SobrietyTracker from "./SobrietyTracker";
import Form from "./Form";
import Entries from "./Entries";
import { useState, useEffect } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import firebaseConfig from "./firebase";


const Dashboard = () => {
  const [showSobrietyTracker, setShowSobrietyTracker] = useState(true);
  const [newEntryButton, setNewEntryButton] = useState(true);
  const [entry, setEntry] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleSobrietyTracker = () => {
    setShowSobrietyTracker(!showSobrietyTracker);
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
    //create a variable that will hold on to our databse values.
    const database = getDatabase(firebaseConfig);
    //referencing my database
    const databaseRef = ref(database);
    // grabbing the information from our database
    onValue(databaseRef, (response) => {
      const newState = [];
      //storing the returned data as a variable and looping through it.
      const data = response.val();
      for (let key in data) {
        newState.push({ key: key, data: data[key] });
      }
      setEntry(newState);
    });
  }, []);

  return (
    <> { showSobrietyTracker ?
      <section className="sectionTwo">
       
             <SobrietyTracker />
           
        <button onClick={handleSobrietyTracker}>Disable Feature</button>
           </section>
        : null

        }
       
   
      {/* Here I am rendering the new entery button which features an event handler that will show user the form */}
      {newEntryButton ? (
        <section className="wrapper beginnerSection">
          <h2>Recovery Log</h2>
          <button className="newEntryButton" onClick={handleNewEntryClick}>
            New Entry
          </button>
        </section>
      ) : null}

      
    {/* here I am displaying the form component when state of show form is set to true and attaching the handle form submit function to push my data into firebase */}
    <section className="mainContent">
        {showForm ? (
          <div className="formSection">
            <Form handleFormSubmit={handleFormSubmit} data={entry} />
            <h2> Urge Log </h2>
            <p className="wrapper">
              {" "}
              Use your urge history below to further develop self-awareness of
              patterns in your use.
            </p>
          </div>
        ) : null}


        {/* below code handles: if the form is showing and data has been pushed into the array, map through it and give me the Entries component. Passing data and key props into this */}
        <div className="entriesSection wrapper">
          {showForm && entry && entry.length > 0
            ? entry.map((data) => {
                return <Entries data={data.data} key={data.key} />;
              })
            : null}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
