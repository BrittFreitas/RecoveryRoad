import { useState } from "react";
//setting states to track showing entry description.
const Entries = (props) => {
  const [showAccordian, setShowAccordian] = useState(false);
  const [flipIcon, setFlipIcon] = useState(false);

  //creating a function that wil handle state changes, passing these on click of the date div
  const handleAccordian = () => {
    setShowAccordian(!showAccordian);
    setFlipIcon(!flipIcon);
  };

  return (
    <div className="entry wrapper">
      <div className="logTitle" onClick={handleAccordian}>
        <h3>{props.data.date}</h3>
        {flipIcon ? (
          <i className="fa-solid fa-angle-up"></i>
        ) : (
          <i className="fa-solid fa-angle-down"></i>
        )}
      </div>

      {showAccordian ? (
        <ul>
          <li>
            <p>Urge Intensity: {props.data.urgeIntensity}</p>
          </li>

          <li>
            <p>Triggers: {props.data.triggers}</p>
          </li>

          <li>
            <p>Use: {props.data.quantity}</p>
          </li>

          <li>
            <p>Thoughts and Feelings Post Urge: {props.data.reflections}</p>
          </li>

          <li>
            <p>Strategy and it's impact: {props.data.strategiesUsed}</p>
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default Entries;
