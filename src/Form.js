import { useState } from "react"



const Form = (props) => {
  const [date, setDate] = useState("");
  const [urgeIntensity, setUrgeIntensity] = useState(0);
  const [triggers, setTriggers] = useState("");
  const [quantity, setQuantity] = useState("");
  const [feelsAfter, setFeelsAfter] = useState("");
  const [strategiesUsed, setStrategiesUsed] = useState("");
  
 

  //creating functions for each state that set the state to the users input, each of these functions will be called on
  const handleDateChange = (e) => setDate(e.target.value);
  const handleUrgeChange = (e) => setUrgeIntensity(e.target.value);
  const handleTriggerChange = (e) => setTriggers(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleFeelsChange = (e) => setFeelsAfter(e.target.value);
  const handleCopingChange = (e) => setStrategiesUsed(e.target.value);


  return (
    <section>
      <div className="reflectionForm">
        <form className="formItems wrapper" action="" onSubmit={(e) => props.handleFormSubmit(e, date, urgeIntensity, triggers, quantity, feelsAfter, strategiesUsed )}>
        <h2>Reflection Form</h2>
        <p>Complete the form below to log details of your urge.</p>
          <label htmlFor="date">Date:</label>
          <textarea id="date" cols="50" rows="1" type="text" onChange={(e) => handleDateChange(e)}/>
 
          <label htmlFor="urgeIntensity">Rate the intensity of your urge from 1-10:</label>
          <textarea id="urgeIntensity" cols="50" rows="1" type="text" onChange={(e) => handleUrgeChange(e)}/>

          <label htmlFor="triggers">
            What internal or external triggers may have prompted the urge?
          </label>
          <textarea id="triggers" cols="50" rows="4"
          onChange={(e) => handleTriggerChange(e)}
            type="text"
          />

          <label htmlFor="quantity" >Describe the quantity of your use:</label>
          <textarea id="quantity" cols="50" rows="3"
          onChange={(e) => handleQuantityChange(e)}
            type="text"
          />

          <label htmlFor="reflection">
            What thoughts and feelings did you have after the urge?
          </label>
          <textarea id="reflection" cols="50" rows="4" type="text" onChange={(e) => handleFeelsChange(e)} />

          <label htmlFor="strats">
            What, if any strategies did you find helpful in supporting yourself
            through this urge?
          </label>
          <textarea id="strats" cols="50"  rows="4" type="text" onChange={(e) => handleCopingChange(e)} />

          <button type="submit">Save</button>

        </form>
      
      </div>
    </section>
  );
};

export default Form;

