const Entries = (props) => {

  console.log(props.data)
  return (
    <section>
      <ul>
        <div>
          <h3>Date of urge</h3>
          <p>{props.data.date}</p>
        </div>

        <div>
          <h3>Urge Intensity</h3>
          <p>{props.data.urgeIntensity}</p>
        </div>

        <div>
            <h3>Triggers</h3>
            <p>{props.data.triggers}</p> 
        </div>

        <div>
            <h3>Use</h3>
            <p>{props.data.quantity}</p> 
        </div>
         
        <div>
            <h3>Thoughts and Feelings Post Urge</h3>
            <p>{props.data.reflections}</p>  
        </div>
        
        <div>
            <h3>Strategy and it's impact</h3>
            <p>{props.data.strategiesUsed}</p>
        </div> 
      </ul>
    </section>
  );
};

export default Entries;
