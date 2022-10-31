import { useState } from "react";


const SobrietyTracker = () => {


    const [daysSober, setDaysSober] = useState(0);
    

    const handleStreak = () => {
        setDaysSober(daysSober + 1)
    }
    const resetStreak = () => {
        setDaysSober(0);
    }

    return (
        <section className="wrapper">
            <div className="sobrietyContent">
                <div>
                <h2>Sober Streak</h2>
                <p>Click the button below to track your number of days substance free</p>
                <p>You've been sober for {daysSober} days!</p>
               
                <button onClick={handleStreak}>Add Day</button>
                <button onClick={resetStreak}>Reset Streak</button>
                
                
                
            </div>
            </div>
            
        </section>
    )
}

export default SobrietyTracker;

