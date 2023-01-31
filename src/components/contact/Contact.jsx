import { useState } from "react"
import "./contact.scss"

const Contact = () => {
   const submit = e=>{
       e.preventDefault()
       const  config = {
           Username : "nawwaralinahan@gmail.com",
           Password : "A6BEA943DA3EACD26D1FCD3D6E32EED63804",
           Host : "smtp.elasticemail.com",
           Port : 2525,
        //    or use SecureToken:"dade29b8-eb45-4f03-9dd8-b883a9b628f4"
            To : 'nawwaralinabhan@gmail.com',
            From : "you@isp.com",
            Subject : "This is the subject",
       }
       window.Email.send(config)
       setData ({email:"",sub:""})
   }

   const [data , setData] = useState({
       email :"",
       sub: ""
   })

   const hundelInput = (e, )=>{
        setData( prev=>({...prev ,[e.target.name] : e.target.value}))
    }
    return ( 
        <div className="contact" id="contact">
            <h1>Contact Me</h1>
            <div className="ff">

            <form onSubmit={submit} >
               <div className="inputGroup">
                   <label htmlFor="email">email :</label>
                   <input type="email" id="email"
                    name="email"
                    required
                    value={data.email}
                    onChange={hundelInput} />
               </div>
               <div className="inputGroup">
                   <label htmlFor="Message">Message :</label>
                   <textarea name="Message"
                    id="Message"
                    value={data.sub}
                    name="sub"
                    onChange={hundelInput} ></textarea>
               </div>

               <input type="submit" value="send" className="submit"/>
            </form>
            
            </div>
        </div>
     );
}
 
export default Contact;