//import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
// import Main from './components/Main';
// import Template from './components/Template';
import hexadev from './hexadev.png'
// import LandingPage from './components/landingPage'
import Landing2 from './components/landing2'
// import Services from './components/Services'

function App() {
  const [width, setWidth] = useState("notchanged")
  const [hide, setHide] = useState("hide")
  const [text, setText] = useState("Read More")
  const toggleWidth = ()=>{
    setWidth(!width)
    setHide(!hide)
    setText(!text)
  }


  

  return (
    <>
    {/* <Main/> */}
    {/* <Template/> */}
    {/* <LandingPage/> */}
    <Landing2/>
    {/* <Services/> */}
    < div className={`blank  ${width ? "notchanged" : "changed"}`}>
      <div>
        <p  className={`${hide ? "hide" : "unhide"}`} >This Website has been developed by Team HexaDev. Team Members are Parth Gera, Kshitij, Raghav Dua, Kavyam Sachdeva, Ranveer Singh and Anand Chauhan. This is a project made for hackathon managed by Sandbox.</p>
      </div>
      <img className={` pic `} src={hexadev} alt="logo"/>
      <div className='buttonClass' onClick={()=>{toggleWidth()}}>
        <p style={{margin : "10px",cursor : 'pointer',color:'hsl(300, 43%, 22%)'}}>{text ? "More Info" : "Less Info"}</p>
      </div>
    </div>
    </>
  );
}

export default App;
