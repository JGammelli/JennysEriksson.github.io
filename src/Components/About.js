import React from "react";

class About extends React.Component{


    render(){
        
        return(
            <>
            <section id="aboutProfile">
                <div id="nameBox" className="aboutName">
                    <h2>About</h2>
                    <h1>Jenny Eriksson</h1>
                    <p>Composer</p>
                </div>             
              </section>
            <section id="aboutSection">
                <div id="aboutContainer">
                    <h1 className="textReveal aboutItem">Hi, I’m Jenny!</h1>
                    <div id="aboutBox">                      
                                                  
                        <p className="textReveal aboutItem">
                            I discovered music in the gymnasium, when I studied Music Production, 
                            and I’ve kept doing music ever since.    
                            I love the variety of making different kinds of music, 
                            I can make both orchestral and digital musical compositions, pop, rock, ballads and more! 
                            I’m currently studying at the University of Skövde, Game Development- Music, third and last year.
                        </p>                 
                    </div>
                    <div className="educationBox">
                        <p className="textReveal aboutItem">
                            During gymnasium we mostly focused on the recording studio, 
                            us Music Production students got to learn how to set up a recording, 
                            how to prepare for live shows, and a little bit of how to specifically mix in Logic Pro X.
                        </p> 
                    </div>
                    <div className="educationBox2">                          
                        <p className="textReveal aboutItem"> 
                            Later I studied two courses in Umeå, Creative Music (songwriting) and Music Production.
                            During both courses I got more experiences regarding communication with the musician, 
                            while asking several different musicians to play their respective instruments for several of my songs. 
                            We also learned more about mixing, and a little bit about mastering, and had a task to put at least one 
                            song on an online platform like Spotify, Youtube, Soundcloud, and more.
                        </p>
                    </div>
                    <div className="educationBox3">                          
                        <p className="textReveal aboutItem">
                            I also studied a course named Musikproducentlinjen in Löftadalens folkhögskola, 
                            where I learned the most about mixing and mastering, and feel like I found my favorite 
                            type of music to create (my unique tune).
                            That is where the Maze Runner Trailer comes from, 
                            as it was a task to compose music for the chosen trailer. Every other week we were supposed 
                            to show what we had done, and get feedback from the rest of the class, which taught me how to 
                            stay productive in such a creative area for so long, and how to come up with new ideas in a short period of time.
                        </p>
                    </div>
                    <div className="educationBox4">
                        <p className="textReveal aboutItem">
                            And finally, University of Skövde where I currently study Gamedevelopment- Music, was an education I had longed for, 
                            since I wanted a more serious education and more specifically wanted to focus on music for games.
                            Here it has been mostly academic courses, but during the game projects I learned how to communicate with people of other disciplines, 
                            and generally witnessed the process of how games are created.
                        </p>
                    </div>
                </div>
            </section>
            </>
        );
    }
}

export default About;