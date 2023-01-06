import "./styles/styles.scss";
import headerPhoto from "./assets/headerPhoto.jpg";
import { Link } from "react-router-dom";


const LandingPage = () => {
 
//   const [showIntro, setShowIntro] = useState(true);
 

    return (
    <>
    
        <>
          <section className="headerContent">
            <h1 className="wrapper">
              Recovery Road: A substance use recovery tool to track your unique
              journey.
            </h1>
            <img
              className="headerPhoto"
              src={headerPhoto}
              alt="person walking into clouds"
            />
          </section>
          <section className="introInfo wrapper">
            <i className="fa-solid fa-angles-down"></i>
            <div className="howTo wrapper">
              <div>
                <i className="fa-solid fa-arrow-up-right-dots"></i>
                <h3>Motivation</h3>
                <p>
                  Our app features a Sober Streak feature where you can track
                  your number of consecutive days in recovery. Not interested in
                  the number? Easily disable this feature within the app.{" "}
                </p>
              </div>
              <div>
                <i className="fa-solid fa-lightbulb"></i>
                <h3>Understanding</h3>
                <p>
                  Use our app to store details of your urge; such as when it
                  happened and how you got through it. You can use this info to
                  gain a better understanding of your triggers and build out
                  your support systems accordingly.{" "}
                </p>
              </div>
              <div>
                <i className="fa-solid fa-brain"></i>
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
                <Link to="/Dashboard"> 
                <button className="getStarted">
                  Yes, Let's Get Started
                </button>
                </Link>
               
                <a href="https://harmreduction.org/all-resources/">
                  <button>No, show me harm reduction resources</button>
                </a>
              </div>
            </div>
          </section>
        </>
      



    </>
     
    
    )

}

export default LandingPage;