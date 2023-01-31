import "./skill.scss"
import SkillList from "../skillList/SkillList"
import Skills from "../../data/skills"
import Rating from 'material-ui-rating'
import { useState } from "react"
const Skill = () => {
    const [Class , setClass ] = useState(0)
    return ( 
        <div className="skill" id="skill">
            <div className="top"> 
                <ul>

                    {Skills.map((skill,rowId)=>{
                        return(
                            <SkillList key={rowId} title={skill.title} active={skill.id ==  Class} id={skill.id} setClass={setClass}/>
                        ) 
                    })}

                    
                </ul>
                
            </div>
            <div className="body">
                
                {
                        Skills.map(skill=>{
                            return(
                                <div className={skill.id == Class ?"show" : "hide"}>
                                    <div className="skillFeature">

                                    <div className="left">
                                        <div className="level">
                                            <Rating
                                            value={skill.level}
                                            max={5}
                                           />
                                        </div>
                                        <div className="description">{skill.desc}</div>
                                        
                                       { skill.lib &&
                                        <div className="lib">
                                            <hr/>
                                            {skill.lib}
                                        </div>
                                       }
                                    </div>
                                    <div className="right">
                                        <img src={skill.img ? skill.img : "#"} alt="not worked"/>
                                    </div> 

                                    </div>

                                </div>
                            )
                        })
                    }
            </div>
        </div>
     );
}
 
export default Skill;


