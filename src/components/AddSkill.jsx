import { useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import { createSkill } from "../skillservices/skillservices";
import { BACKGROUNDBLACK, BLACK } from "../Helpers/colors";




const AddSkill = ({skills , setSkills}) =>{

    const navigate = useNavigate();

    const [skill , setSkill] = useState({});

    

    const onSkillChange = (event) =>{
      setSkill({
          ...skill,
          [event.target.name]: event.target.value,
      })
      console.log(skill)
  }

  const createNewSkill = async(event) =>{
    event.preventDefault();
    try{
        const {data , status} = await createSkill(skill);

        if(status === 201){
            const allSkills = [...skills , data];

            setSkill({});
            setSkills(allSkills);

            navigate('/skills');
            console.log("everything went down perfectly")
        }
    }catch(err){
        console.log(err.message);
    }
}

    return(
        <>
          <section className="p-3" style={{backgroundColor:BACKGROUNDBLACK}}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <p
                    className="h4 fw-bold text-center"
                    style={{ color: "white" }}
                  >
                    Create new skill
                  </p>
                </div>
              </div>
              <center className="my-4"><hr  style={{ color:"#F266AB" , width:"50%"}} /></center>
              <div className="row p-2 w-75 mx-auto align-items-center"
                style={{ backgroundColor: "#44475a", borderRadius: "1em"}}>
                <div className="col-md-8">
                  <form onSubmit={createNewSkill}>
                    <div className="mb-2">
                      <input
                        name="title"
                        type="text"
                        value={skill.title}
                        onChange={onSkillChange}
                        className="form-control"
                        placeholder="Title"
                        required={true}
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="photo"
                        type="text"
                        value={skill.photo}
                        onChange={onSkillChange}
                        className="form-control"
                        required={true}
                        placeholder="Img url"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="description"
                        type="text"
                        value={skill.description}
                        onChange={onSkillChange}
                        className="form-control"
                        required={true}
                        placeholder="Description"
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        name="stage"
                        type="text"
                        value={skill.stage}
                        onChange={onSkillChange}
                        className="form-control"
                        required={true}
                        placeholder="Stage "
                      />
                    </div>
                    <div className="mb-2">
                      <input
                        type="text"
                        name="experience"
                        value={skill.experience}
                        onChange={onSkillChange}
                        className="form-control"
                        required={true}
                        placeholder="Experience"
                      />
                    </div>
                    <div className="mb-2">
                      <textarea
                        type="text"
                        name="about"
                        value={skill.about}
                        onChange={onSkillChange}
                        className="form-control"
                        required={true}
                        placeholder="About"
                      />
                    </div>
                    <div className="mb-2">
                      <textarea
                        type="text"
                        name="skills"
                        value={skill.skills}
                        onChange={onSkillChange}
                        className="form-control"
                        required={true}
                        placeholder="Skills"
                      />
                    </div>
                    <div className="mx-2">
                      <input
                        type="submit"
                        className="btn"
                        style={{ backgroundColor: "#F266AB" , color:"white" }}
                        value="Submit"
                      />
                      <Link
                        to={"/skills"}
                        className="btn mx-2"
                        style={{ backgroundColor: BLACK , color: "white"}}
                      >
                        Quit
                      </Link>
                    </div>
                  </form>
                </div>
                <div className="col-md-4">
                        <img src="https://cdni.iconscout.com/illustration/premium/thumb/hand-holding-phone-with-filters-5757863-4817090.png" 
                        alt=""
                        />
                </div>
              </div>
            </div>
          </section>
        </>
    )
}

export default AddSkill;