import { Link } from "react-router-dom";
import { BLACK , BACKGROUNDBLACK } from "../Helpers/colors"

const CurrentSkills = ({skills}) =>{


    

    return(
        <div style={{backgroundColor:BACKGROUNDBLACK}}>    
            <div className="container " >
                <div className="row w-100">
                    <div className="col-lg-12 d-flex justify-content-center mt-4 mb-4">
                        <div className="card " style={{width:"1000px" , border:"none"}}>
                            <img class="card-img-top" src={skills.photo} alt="Card image cap" />
                            <div className="card-body">
                            <h3 className="card-title">
                                {skills.title}
                            </h3>
                            <p>
                                {skills.description}
                            </p>
                            <Link to={`/skills/${skills.id}`} className="btn btn-default" style={{backgroundColor:"#F266AB" , color:"white"}} >More info</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CurrentSkills;