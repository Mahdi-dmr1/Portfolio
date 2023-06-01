import { useState , useEffect } from "react";


import { AboutMe, CurrentSkills} from "./index";
import { BACKGROUNDBLACK } from "../Helpers/colors";
import { Link } from "react-router-dom";

const BasicInfo = ({skills , confirmDelete}) =>{

    return(
<>

        {skills.map((s)=> <CurrentSkills key={s.id} skills={s} />)}


        


        <section style={{backgroundColor:BACKGROUNDBLACK , display:"inline-flex"}} className="d-flex justify-content-center">
            <div>
                <Link to='https://instagram.com/mahdi_dmr' className="btn mx-2 my-4" style={{backgroundColor:"#d62976"}}>
                    <i className="fa fa-instagram" style={{fontSize:"2.2rem",padding:"2px"}}></i>
                </Link>
            </div>
            <div>
                <Link to='https://t.me/mahdi_dmr' className="btn mx-2 my-4" style={{backgroundColor:"#0088cc"}}>
                    <i className="fa fa-telegram" style={{fontSize:"2.2rem",padding:"2px"}}></i>
                </Link>
            </div>
            <div>
                <Link to='https://linkedin.com/in/mahdi-damirchi-580124162' className="btn mx-2 my-4" style={{backgroundColor:"#0072b1"}}>
                    <i className="fa fa-linkedin" style={{fontSize:"2.2rem",padding:"2px"}}></i>
                </Link>
            </div>
            <div>
                <Link to='https://wa.me/989122713600' className="btn mx-2 my-4" style={{backgroundColor:"#25D366"}}>
                    <i className="fa fa-whatsapp" style={{fontSize:"2.2rem",padding:"2px"}}></i>
                </Link>
            </div>
        </section>
       
    
</>
    )
}

export default BasicInfo;