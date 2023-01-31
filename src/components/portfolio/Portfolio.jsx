import { HubRounded } from "@mui/icons-material";
import { useState } from "react";
import "./portfolio.scss"
import works from  "../../data/works"
const Portfolio = () => {
    const [slide , setSlide] =useState(0);
    const len = works.length - 1
    const LeftClick = ()=>{
        if(slide == 0 ){
            setSlide(len*100)
            
        }else{
            setSlide(slide-100)
        }
        console.log(slide)
    }
    const RightClick = ()=>{
        if(slide == len*100){
            setSlide(0)
        }else{
            setSlide(slide+100)
        }
    }
    return ( 
        <div className="portfolio" id="portfolio">
            <div className="slider" style={{transform:`translateX(-${slide}vw)`}}>
        { works.map( (img,rowId)=>{
            return(
                <div className="container" key={rowId}>
                    <div className="item">
                        <div className="left">
                            <div className="leftController">
                                <div className="title">{img.title}</div>
                                <div className="desc">{img.desc}</div>
                                <div className="link">
                                    <a href={img.link} target="_blank">view site</a>
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <img src={img.url} alt=""/>
                        </div>
                    </div>
                </div>    
                )}
            )}

            </div>
            <div className="circleContainer">
            {works.map((im,rowId)=>{
                return(
                    <div className= {slide == rowId*100?"circle active":"circle"}
                    key={rowId}
                    onClick={()=>setSlide(rowId*100)}
                    ></div>
                )
            })}
            </div>

        <img src="Assets/arrow.png" className="arrow left" onClick={LeftClick} alt=""/>
        <img src="Assets/arrow.png" className="arrow right"onClick={RightClick}  alt=""/>

        </div>
     );
}
 
export default Portfolio;