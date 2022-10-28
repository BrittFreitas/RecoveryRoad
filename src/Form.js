import { useState } from "react";
import SobrietyTracker from "./SobrietyTracker";

const Entries = () => {

    const [date, setDate] = useState("");
    const [urgeIntensity, setUrgeIntensity] = useState(0);
    const [triggers, setTriggers] = useState("");
    const [quantity, setQuantity] = useState("");
    const [feelsAfter, setFeelsAfter] = useState("");
    const [strategiesUsed, setStrategiesUsed] = useState("");

    const handleDateChange = (e) => {
        setDate(e.target.value);
    }

    const handleUrgeChange = (e) => {
        setUrgeIntensity(e.target.value);
    }

    const handleTriggerChange = (e) => {
        setTriggers(e.target.value);
    }

    const handleQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const handleFeelsChange = (e) => {
        setFeelsAfter(e.target.value);
    }

    const handleCopingChange = (e) => {
        setStrategiesUsed(e.target.value);
    }

    
    return (
        <section>
            <div>
                <form className='formItems' action="">

                    <label htmlFor="">Enter today's date.</label>
                    <input type="text" />

                    <label htmlFor="">Rate the intensity of your urge from 1-10.</label>
                    <input type="text" />

                    <label htmlFor="">What internal or external triggers may have prompted the urge?</label>
                    <input type="text" placeholder="describe any thoughts, feelings, situations, or sensations that happended before the urge" />

                    <label htmlFor="">Describe the quantity of your use?</label>
                    <input type="text" placeholder="If you refrained from using, please type none" />

                    <label htmlFor="">What thoughts and feelings did you have after the urge?</label>
                    <input type="text" />

                    <label htmlFor="">What, if any strategies did you find helpful in supporting yourself through this urge?</label>
                    <input type="text" />
                   
                    <button>Save</button>

                </form>

            </div>
        </section>
    )
}

export default Entries;

// const [date, setDate] = useState(null);
//         const [firstName, setFirstName] = useState("");
//         const [lastName, setlastName] = useState("");

//         const handleDateChange = () => setDate(e.target.value);
//         const handleFirstNameChange = () => setFirstName(e.target.value);
//         const handleLastNameChange = () => setLastName(e.target.value);

//         const handleSubmit = () => {
//           const data = {
//             date: date,
//             firstName: firstName,
//             lastName: lastName,
//           };
//           // Push data to Firebase
//           push(databaseRef, data);
//         }

//         <form action="">
//           <input
//             name="date "
//             type="date"
//             onClick={(e) => handleDateChange(e)}
//           />
//           <input
//             name="firstName"
//             type="text"
//             onClick={(e) => handleFirstNameChange(e)}
//           />
//           <input
//             name="lastName"
//             type="text"
//             onClick={(e) => handleLastNameChange(e)}
//           />
//         </form>