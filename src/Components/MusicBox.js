import React from "react";

class MusicBox extends React.Component{
    render(){


            if(this.props.file.includes("wav") === true){
                return(
                    <div className="fade-in slideContainer musicContainer" >
                        <h2 className="slide-in from-right musicItem">{this.props.title}</h2>                        
                        <video className="musicItem" poster={this.props.image} controls>
                            <source src={this.props.file} />
                        </video>                         
                        <p className="slide-in from-left musicItem">{this.props.information}</p>
                    </div>
                );
            }else{
                return(
                    <div className="fade-in slideContainer musicContainer" >
                        <h2 className="slide-in from-right musicItem">{this.props.title}</h2>                        
                        <iframe
                            className="musicItem"
                            poster={this.props.image}
                            src={this.props.file}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    <p className="slide-in from-left musicItem">{this.props.information}</p>

                    </div>
                );
            }
     
    }
}

export default MusicBox;