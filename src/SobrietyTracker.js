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
                <h2>You've been on the path to sobriety for {daysSober} days!</h2>
                <button onClick={handleStreak}>Add Day</button>
                <button onClick={resetStreak}>Reset Streak</button>
            </div>
            </div>
            
        </section>
    )
}

export default SobrietyTracker;

