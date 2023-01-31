import "./SkillList.scss"
const SkillList = ({title ,active , setClass, id}) => { 
    return ( 
        <li className={active? "tab active" : "tab"}
        onClick={()=>setClass(id)}
        >
            {title}
        </li>
     );
}
 
export default SkillList;