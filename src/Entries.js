const Entries = (props) => {

 
  // triggers: triggers,
  // quantity: quantity,
  // reflections: feelsAfter,
  // strategiesUsed: strategiesUsed,
  
  //not working
 // console.log(props.newState)
  
  return (
    <div className="entry"> 
    <h3>{props.data.date}</h3>
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
    </div>
  );
};

export default Entries;
