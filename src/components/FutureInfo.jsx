import { Link } from "react-router-dom";
import { BACKGROUNDBLACK, BLACK } from "../Helpers/colors";




const FutureInfo = ({futureSkills}) =>{


    return(
            <div style={{backgroundColor:BACKGROUNDBLACK}}>
                <div className="container">
                    <div className="row w-100" >
                        <div className="col-lg-12 d-flex justify-content-center mt-4 mb-4" >
                            <div className="card" style={{width:"1000px" , border:"none"}}>
                                <img src={futureSkills.photo} 
                                alt=""
                                className="card-img-top" />
                                    <div className="card-body">
                                        <h5>{futureSkills.title}</h5>
                                        <p className="card-text">{futureSkills.description}</p>
                                        <Link to={`/futureskills/${futureSkills.id}`}  className="btn btn-default" style={{backgroundColor:"#F266AB" , color:"white"}} >More info</Link>
                                    </div>
                            </div>
                        </div>               
                    </div>
                </div>
            </div>       
    )
}

export default FutureInfo;