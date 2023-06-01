import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getFutureSkill, getSkill } from "../skillservices/skillservices";
import { BACKGROUNDBLACK } from "../Helpers/colors";
import { BLACK } from "../Helpers/colors";

const ViewFutureInfo = () =>{

    const {skillId} = useParams();

    const [state , setState] = useState({
        futureSkills:{}
    });

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const {data : ViewFutureSkills} = await getFutureSkill(skillId);
                setState({
                    ...state,
                    futureSkills: ViewFutureSkills
                });
            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    },[]);

    

    const {futureSkills} = state;

    return(
        <div style={{backgroundColor:BACKGROUNDBLACK}}>    
            <div className="container" style={{borderRadius:"1em" , backgroundColor:"#F1F6F9"}}>
                <div className="row w-100">
                    <div className="card p-4 m-4 col-md-6" style={{width:"600px" , boxShadow:"0.3px 0.3px"}} >
                        <img className="card-img-top" src={futureSkills.photo} alt="" style={{ border: `1px solid ${BLACK}`}} />
                        <div className="card-body">
                            <h5>{futureSkills.title}</h5>
                            <p>{futureSkills.about}</p>
                        </div>
                    </div> 
                    <div className="col-md-5 m-4" >
                        <dl>
                            <dt>Goal:</dt>
                            <dd>{futureSkills.goal}</dd>

                            
                        </dl>
                    </div> 
                </div>
                <div>
                <Link to={`/futureskills/edit/${skillId}`} className="btn float-right my-3 mx-2 p-3" style={{backgroundColor:"#F266AB" }}><i className="fa fa-pencil" style={{fontSize:"1.3rem"}}></i></Link>
                </div>
            </div>
        </div>
    )
}

export default ViewFutureInfo;