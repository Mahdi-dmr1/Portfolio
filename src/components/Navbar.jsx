import { Link, Outlet } from "react-router-dom";
import { BACKGROUNDBLACK } from "../Helpers/colors";




const Navbar = () =>{

    return(
        <nav className="navbar navbar-dark navbar-expand-sm shadow-lg" style={{backgroundColor:"black" , opacity:"100%"}}>
        <div className="container">
            <div className="row w-100">
                <div className="col-md-6">
                    <div className="navbar-brand ">
                        <h3 className="d-flex float-left">portfolio</h3>
                    </div>
                </div>
                <div className="col-md-5 d-flex flex-row-reverse">
                    <Link to="/aboutme"><span style={{ padding:"15px" }} id="about-me">About me<i className="fa fa-chevron-down"></i></span></Link>
                    <Link to="/futureskills"><span style={{ padding:"15px" }}>Goals<i className="fa fa-chevron-down"></i></span></Link>
                    <Link to="/skills"><span style={{  padding:"15px" }}>Home<i className="fa fa-chevron-down"></i></span></Link>
                </div>
                <div className="col-md-1 d-flex justify-content-end" style={{backgroundColor:BACKGROUNDBLACK}}>
                    <Link  to='/skills/add' className="btn btn-default " style={{backgroundColor:"#F266AB" , borderRadius:"50%" , width:"40px" , height:"40px" }}> <i className="fa fa-plus" style={{alignContent:"center"}}></i></Link>
                </div>
            </div>
        </div>
    </nav>
    );
    
}

export default Navbar;