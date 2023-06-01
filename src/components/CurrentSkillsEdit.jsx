import { useState , useEffect } from "react";
import { Link, useParams , useNavigate } from "react-router-dom";
import { getSkill , updateSkill } from "../skillservices/skillservices";
import { BACKGROUNDBLACK, BLACK } from "../Helpers/colors";

const CurrentSkillsEdit = ({skills , setSkills}) =>{

    const {skillId} = useParams();
    const navigate = useNavigate();

    const [skill , setSkill] = useState({});

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const {data : viewCurrentInfo} = await getSkill(skillId);
                setSkill(viewCurrentInfo);
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
            const {data , status} = await updateSkill(skill , skillId);

            if(status === 200){
                const allSkills = [...skills];
                const skillIndex = allSkills.findIndex((s) => s.id === parseInt(skillId));
                allSkills[skillIndex] = {...data};
                setSkills(allSkills);

                navigate(`/skills/${skillId}`);
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
                            Edit Current Skills
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
                            <input 
                                type="text"
                                name="experience"
                                className="form-control"
                                value={skill.experience} 
                                onChange={onSkillChange}
                                required={true}
                                placeholder="experience"/>
                        </div>
                        <div className="mb-2">
                            <input 
                                type="text"
                                name="stage"
                                className="form-control"
                                value={skill.stage} 
                                onChange={onSkillChange}
                                required={true}
                                placeholder="stage"/>
                        </div>
                        <div className="mb-2">
                            <textarea 
                                type="text"
                                name="skills"
                                className="form-control"
                                value={skill.skills} 
                                onChange={onSkillChange}
                                required={true}
                                placeholder="skill description"/>
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
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/girl-editing-layout-for-mobile-application-2763642-2302836.png" 
                        alt=""
                        />
                </div>
              </div>
            </div>
        </section>
    )
}

export default CurrentSkillsEdit;