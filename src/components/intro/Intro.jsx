import { useEffect, useRef } from "react";
import { init } from 'ityped'
import "./intro.scss"
const Intro = () => {
    const textRef =useRef()
    useEffect(
        ()=>{
            init(textRef.current, { 
                showCursor: true,
                 strings: ['Front end developer' , 'react js '] })
        }
        ,[])
    return ( 
        <div className="intro" id="intro">
            <div className="left">
                <div className="wrapper">

                <div className="imageController">
                    <img src="Assets/me.jpg" alt=""/>
                </div>

                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                <h2>
                   Hi I'm
               </h2>
               <h1>
                   Nawwar Nabahan
               </h1>
               <h3>
                   <span ref={textRef}></span>
               </h3>    
                </div>
               
            </div>
        </div>
     );
}
 
export default Intro;