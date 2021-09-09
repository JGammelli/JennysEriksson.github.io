import React from "react";
import Music from "./Music";

class Portfolio extends React.Component{
  componentDidMount(){
      const faders = document.querySelectorAll(".fade-in");
      const sliders = document.querySelectorAll(".slide-in");
      const appearOptions = {
        threshold: 0,
        rootMargin: "0px 0px -250px 0px"
      }
  
      const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                return;
            }else{
                entry.target.classList.add("appear");
            }
        });
      },appearOptions);
  
      faders.forEach(fader => {
        appearOnScroll.observe(fader);
      });
  
      sliders.forEach(slider => {
        appearOnScroll.observe(slider);
      });
    }
    

    render(){
    return(
        <>
          <section id="profileSection">
            <div className="portfolieName" >
                <h2>Portfolio</h2>
                <h1>Jenny Eriksson</h1>
                <p>Composer</p>
            </div>             
          </section>
          <section id="portfolieSection">
              <Music/>
          </section>
        </>
    );}
}

export default Portfolio;