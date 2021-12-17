import React from "react";
import MusicBox from "./MusicBox";

const data = [
    {
        title: "The Maze Runner",
        file: "https://www.youtube.com/embed/gbYDbltegEo",
        information: "This was an assignment during the course “Musikproducentlinjen, Löftadalens Folkhögskola”, to make music for the Maze Runner-Trailer. I later added sound (with a little help from zapsplat.com), but had to include some lines from the actual trailer."
    },
    {
        title: "Breath of the Wild Sequel Trailer",
        file: "https://www.youtube.com/embed/78Dz7Gd5JgA",
        // file: require("../music/BreathoftheWildSequelTrailer.mov").default,
        information: "This was a project during my spare time, I’ve been a Zelda-fan my entire life, and I am really excited about this game. For fun, I made music for this specific trailer, and asked my friend to make the sounds for it, called Ellis Börjesson."
    },
    {
        title: "Black Mesa trailer",
        file: "https://www.youtube.com/embed/SWD1k9Wo1zc",
        information: "This was another project made during my spare time. I wanted to try and make more digital music, instead of orchestral, and chose this trailer. I have made synth-like-music before, and I find it very experimental, like it’s a bit of an unknown territory to explore, which I absolutely love. I have not played this game, I simply picked this for it’s Sci-fi content."
    },
    {
        title: "Valheim trailer",
        file: "https://www.youtube.com/embed/TlqOQBB4VBY",
        information: "Another project made during my spare time, this time I wanted to focus more on the sounds, to create more life within the trailer. Only a few sounds come from zapsplat.com, but the absolute majority comes from my own recordings."
    },
    {
        title: "Returnal trailer",
        file: "https://www.youtube.com/embed/dXNJW0d3bT4",
        information: "With my interest in Sci-fi sounds, I chose to make music and sound for this trailer. I love the sound of futuristic guns and lasers, and especially monsters, no matter which genre. I haven’t played the game, it’s trailer was chosen for the content of Sci-fi and laser guns."
    },
    
    // {
    //     title: "Wonder",
    //     file: "https://www.youtube.com/watch?v=TnMWBPVONlM",
    //     //file: require("../music/Wonder.mov").default,
    //     information: "This was a project I got invited to, to make the music. My description was to make it sound japanese, and it was supposed to be serious. The sound effect was not made by me."
    // },
    // {
    //     title: "Triquetra",
    //     file: require("../music/Triquetra.mov").default,
    //     information: "This movie is about a girl finding an amulett, and later realizing the power it bestows, alongside the danger that comes with it. I volunteered to make music for this movie, and the description I got was about making it sound Celtic. Sounds were made by Simon Johansson, Miriam Lewi and Rickard Söderholm. The highlights of the music from this movie are at 10.28 and 20.24."
    // },
    {
        title: "Horizon Forbidden West Trailer",
        file: "https://www.youtube.com/embed/Aqnb8hqeaU0",
        information: "This is a game whose predecessor I’ve wanted to play, only I don’t own any Playstation consoles. I don’t know how the music generally sounds in this game, I just went with what I thought fit this trailer. Credits for the sound goes to Anna Granath, together with a few sounds from “freetousesounds”."
    },
    {
        title: "Scarlett Nexus Trailer",
        file: "https://www.youtube.com/embed/mV2HU1E_CVs",
        information: "This is another project made during my spare time. This time I even made most of the sounds, with a little help from zapsplat.com. Like Black Mesa trailer, I wanted to explore synths and more digital works of art, plus I’ve always had a soft spot for anime."
    },
    {
        title: "Array’s theme",
        file: require("../music/Arraystheme.wav").default,
        information: "This track was made for the game “Vimmel”, which was our second Game Project at the University of Skövde. Our description was to make the music happy and fun, like “Kirby-music” with synths. Artwork was drawn by Mio Jernström.",
        image: require("../music/Myllermadness.png").default
    },
    {
        title: "Get that Cow!",
        file: require("../music/GetthatCow.wav").default,
        information: "This track was made for the game “Vimmel”, which was our second Game Project at the University of Skövde. Our description was to make the music happy and fun, like “Kirby-music” with synths. Artwork was drawn by Mio Jernström.",
        image: require("../music/Myllermadness.png").default
    },
    // {
    //     title: "Muddle’s theme",
    //     file: require("../music/Muddlestheme.wav").default,
    //     information: "This track was made for the game “Vimmel”, which was our second Game Project at the University of Skövde. Our description was to make the music happy and fun, like “Kirby-music” with synths. Artwork was drawn by Mio Jernström.",
    //     image: require("../music/Myllermadness.png").default
    // },
    // {
    //     title: "Hold your flappy parts",
    //     file: require("../music/Holdyourflappyparts.wav").default,
    //     information: "This track was made for the game “Vimmel”, which was our second Game Project at the University of Skövde. Our description was to make the music happy and fun, like “Kirby-music” with synths. Artwork was drawn by Mio Jernström.",
    //     image: require("../music/Myllermadness.png").default
    // },
    // {
    //     title: "Myller madness",
    //     file: require("../music/Myllermadness.wav").default,
    //     information: "This track was made for the game “Vimmel”, which was our second Game Project at the University of Skövde. Our description was to make the music happy and fun, like “Kirby-music” with synths. This track was made together with David Åkebrand. Artwork was drawn by Mio Jernström.",
    //     image: require("../music/Myllermadness.png").default
    // },
    {
        title: "Introscene",
        file: require("../music/Introscene.wav").default,
        information: "This track was made for the game “Vimmel”, which was our second Game Project at the University of Skövde. This specific track was made together with a powerpoint-like-movie, with a painting and text under, telling the story of the Aliens journey, which lead them to Vimmelriket. Sounds were made by Ellis Börjesson, and the music was made by me. Artwork was drawn by Mio Jernström.",
        image: require("../music/Myllermadness.png").default
    },
    {
        title: "Nothing for glory",
        file: require("../music/Nothingforglory.wav").default,
        information: "This song is sung by the sweet Victoria Ryan, and it is meant to be a very typical anime-intro-like song. At first I had no character or anime in mind, but as I continued writing the lyrics, I felt like it became about Jonathan Joestar from “Jojo’s bizarre adventure”. Artwork was drawn by Mio Jernström.",
        image: require("../music/Nothingforglory.png").default
    },
    {
        title: "Fire Temple",
        file: require("../music/Firetemple.wav").default,
        information: "This track was inspired by the Earth Temple from Skyward Sword, which looks more like a lava dungeon in my eyes, so I went for it more as a fire dungeon.",
        image: require("../music/Earthtemple.png").default
    },
    {
        title: "Magical Area",
        file: require("../music/MagicalArea.wav").default,
        information: "This is supposed to take place in a very cold environment, I found a picture online that “fit enough” for this idea. It’s supposed to be a very beautiful and special place, I had no actual place in a game or a movie in mind.",
        image: require("../music/Snow+magicalarea.jpeg").default
    },
    {
        title: "Chinese Forest",
        file: require("../music/ChineseForest.wav").default,
        information: "As the name suggests, this track would take place in a chinese forest, where I explored how to use chinese instruments. This was a project made during my own spare time.",
        image: require("../music/Chineseforest.jpeg").default
    }
    
]
class Music extends React.Component{
    render(){
        return (
        data.map((music, index) =><MusicBox key={index} title={music.title} information={music.information} file={music.file} image={music.image}/>)
        );
    }
}

export default Music;