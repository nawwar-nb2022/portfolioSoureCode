import "./Navbar.scss"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
const Navbar = ({menuBar , setMenuBar}) => {

   const handleBar = ()=>{
      setMenuBar(!menuBar)
   }
    return ( 
        <div className={menuBar?"navbar active" :"navbar"}>
           <div className="wrapper">
               <div className="left">
                  {/* <div className="logo">
                     N
                  </div> */}
                  <div className="itemContainer">
                     <MailOutlineIcon className="icon"/>
                     <span> nawwarnabhan@gmail.com</span>
                  </div>
                  <div className="itemContainer">
                     <PhoneIcon className="icon"/>
                     <span> +963 0947954844</span>
                  </div>
               </div>
              
              <div className= "right">
                 <div className="container">
                     <div className="menuBAr"
                     onClick={handleBar}>
                     <span></span>
                     <span></span>
                     <span></span>
                     </div>
                 </div>
              </div>
              
           </div>
        </div>
     );
}
 
export default Navbar;