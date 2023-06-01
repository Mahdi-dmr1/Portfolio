import { useState , useEffect } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import { getFutureSkill , updateFutureSkill } from "../skillservices/skillservices";
import { BACKGROUNDBLACK, BLACK } from "../Helpers/colors";

const CurrentSkillsEdit = ({futureSkills , setFutureSkills}) =>{

    const {skillId} = useParams();
    const navigate = useNavigate();

    const [skill , setSkill] = useState({});

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const {data : ViewFutureInfo} = await getFutureSkill(skillId);
                setSkill(ViewFutureInfo);
            }catch(err){
                console.log(err.message);
            }
        }
        fetchData();
    },[]);

    const onSkillChange = (event) =>{
        setSkill({
            ...skill,
            [event.target.name]: event.target.value
        })
    }

    const submitForm = async(event) =>{
        event.preventDefault();
        try{
            const {data , status} = await updateFutureSkill(skill , skillId);

            if(status === 200){
                const allSkills = [...futureSkills];
                const skillIndex = allSkills.findIndex((s) => s.id === parseInt(skillId));
                allSkills[skillIndex] = {...data};
                setFutureSkills(allSkills);

                navigate(`/futureskills/${skillId}`);
            }
        }catch(err){
            console.log(err.message);
        }
    }



    return(
        <section style={{backgroundColor:BACKGROUNDBLACK}}>
            <div className="conainer">
                <div className="row w-100 ">
                    <div className="col text-center">
                        <p className="h4 fw-bold" style={{color:"white"}}>
                            Edit Future Skills
                        </p>
                    </div>
                </div>
                <center className="my-4"><hr  style={{ color:"#F266AB" , width:"50%"}} /></center>
                <div
                className="row p-2 w-75 mx-auto align-items-center"
                style={{ backgroundColor: "#44475a", borderRadius: "1em"}}
              >
                <div className="col-sm-8">
                    <form onSubmit={submitForm}>
                        <div className="mb-2">
                            <input 
                                type="text"
                                name="title"
                                className="form-control"
                                value={skill.title} 
                                onChange={onSkillChange}
                                required={true}
                                placeholder="skill name"/>
                        </div>
                        <div className="mb-2">
                            <input 
                                type="text"
                                name="photo"
                                className="form-control"
                                value={skill.photo} 
                                onChange={onSkillChange}
                                required={true}
                                placeholder="img url"/>
                        </div>
                        <div className="mb-2">
                            <textarea 
                                type="text"
                                name="goal"
                                className="form-control"
                                value={skill.goal} 
                                onChange={onSkillChange}
                                required={true}
                                placeholder="Goal"/>
                        </div>
                        <div className="mb-2">
                            <input type="submit"
                                className="btn"
                                style={{backgroundColor:"#F266AB" , color:"white"}} />

                            <Link to={`/skills/${skillId}`}
                                className="btn mx-2"
                                style={{backgroundColor:BLACK , color:"white"}} >
                                Quit
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/image-photo-editor-software-2763638-2302832.png" 
                        alt=""
                        />
                </div>
              </div>
            </div>
        </section>
    )
}

export default CurrentSkillsEdit;