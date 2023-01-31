import { HubRounded } from "@mui/icons-material";
import { useState } from "react";
import "./portfolio.scss"

const Portfolio = () => {
    const image =[
        {
            url:"Assets/slider.jpg",
            title:"slider",
            desc:"basic html js slider ",
            link:"https://slider-n.netlify.app"
        },
        {
            url:"Assets/Quiz.jpg",
            title:"Quiz app",
            desc:"js",
            link:"https://quiz123n.netlify.app"
        },
        {
            url:"Assets/dragNdrop.jpg",
            title:"drag and drop",
            desc:"using canvas element in html with js",
            link:"https://dragdrop123n.netlify.app"
        },
        {
            url:"Assets/vege.jpg",
            title:"vegetarian",
            desc:"react app using reactHooks and work",
            link:"https://vegtest.netlify.app"
        }
    ]
    const [slide , setSlide] =useState(0);
    const len = image.length - 1
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
        { image.map( (img,rowId)=>{
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
            {image.map((im,rowId)=>{
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