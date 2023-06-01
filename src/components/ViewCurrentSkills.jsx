import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSkill } from "../skillservices/skillservices";
import { BACKGROUNDBLACK } from "../Helpers/colors";
import { BLACK } from "../Helpers/colors";

const ViewCurrentSkills = ({confirmDelete}) =>{

    const {skillId} = useParams();

    const [state , setState] = useState({
        skills:{}
    });

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const {data : viewCurrentInfo} = await getSkill(skillId);
                setState({
                    ...state,
                    skills: viewCurrentInfo
                });
            }catch(err){
                console.log(err.message);
                console.log(skillId);
            }
        }
        fetchData();
    },[]);

    const {skills} = state;

    return(
        <div style={{backgroundColor:BACKGROUNDBLACK}}>    
            <div className="container" style={{borderRadius:"1em" , backgroundColor:"#F1F6F9"}}>
                <div className="row w-100">
                    <div className="card p-4 m-4 col-md-6" style={{width:"600px" , boxShadow:"0.3px 0.3px"}} >
                        <img className="card-img-top" src={skills.photo} alt="" style={{ border: `1px solid ${BLACK}`}} />
                        <div className="card-body">
                            <h5>{skills.title}</h5>
                            <p>{skills.about}</p>
                        </div>
                    </div> 
                    <div className="col-md-5 m-4" >
                        <dl>
                            <dt>Stage:</dt>
                            <dd>{skills.stage}</dd>

                            <dt>Skills:</dt>
                            <dd>{skills.skills}</dd>

                            <dt>Experience:</dt>
                            <dd>{skills.experience}</dd>
                        </dl>
                    </div> 
                </div>
                <div>
                <Link to={`/skills/edit/${skillId}`} className="btn float-right my-3 mx-2 p-3" style={{backgroundColor:"#F266AB" }}><i className="fa fa-pencil" style={{fontSize:"1.3rem"}}></i></Link>
                <button onClick={()=>{confirmDelete(skillId)}} className="btn float-right my-3 mx-2 p-3" style={{backgroundColor:"#CD1818" }}><i className="fa fa-trash" style={{fontSize:"1.3rem"}}></i></button>
                </div>
            </div>
        </div>
    )
}

export default ViewCurrentSkills;