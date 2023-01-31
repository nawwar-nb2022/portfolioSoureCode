import "./sideBar.scss"
const SideBar = ({handleFun}) => {
   const scroll = true
   
    return ( 
        <div className={ "sideBar"}>
                  <div className="sideBar">
                     <div className="tabs"><a href="#intro"
                     onClick={()=>{handleFun(!scroll)}}>Intro</a></div>
                     <div className="tabs"><a href="#skill"
                     onClick={()=>{handleFun(!scroll)}}>Skill</a></div>
                     <div className="tabs"><a href="#portfolio"
                     onClick={()=>{handleFun(!scroll)}}>Portfolio</a></div>
                     <div className="tabs"><a href="#contact"
                     onClick={()=>{handleFun(!scroll)}}>Contact</a></div>
                  </div> 
        </div>
     );
}
 
export default SideBar;