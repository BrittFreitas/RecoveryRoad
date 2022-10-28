import { useState } from "react";


const SobrietyTracker = () => {


    const [daysSober, setDaysSober] = useState(0);
    

    const handleStreak = () => {
        setDaysSober(daysSober + 1)
    }

    return (
        <section>
            <div>
                <h2>Sober Streak</h2>
                <p>Click the button below to track your number of days substance free</p>
                <p>You've been sober for {daysSober} days!</p>
                
                <button onClick={handleStreak}>another day</button>
            </div>
        </section>
    )
}

export default SobrietyTracker;

