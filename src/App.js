
import './App.css';
import {  getAllAboutMe, getAllFutureSkills, getAllSkills , deleteSkill } from './skillservices/skillservices';
import { useState , useEffect } from 'react';
import {Navbar , BasicInfo, FutureInfo, AboutMe, ViewCurrentSkills , CurrentSkillsEdit , FutureSkillsEdit , ViewFutureInfo} from "../src/components/index";
import { Route , Routes , Navigate , useNavigate , useParams} from 'react-router-dom';
import AddSkill from './components/AddSkill';
import { confirmAlert } from 'react-confirm-alert';
import { BACKGROUNDBLACK, BLACK } from './Helpers/colors';


function App() {

    const navigate = useNavigate();

  const [skills , setSkills] = useState([]);
  const [futureSkills , setFutureSkills] = useState([]);
  const [aboutMe , setAboutMe] = useState([]);
    
  useEffect(()=>{
      const fetchData = async ()=>{
          try{
              const {data : basicData} = await getAllSkills();
              setSkills(basicData);
              console.log(basicData);
          }catch(err){
              console.log(err.message);
          }
      }
      fetchData();
  },[]);


  useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const {data : basicData} = await getAllFutureSkills();
            setFutureSkills(basicData);
            console.log(basicData);
        }catch(err){
            console.log(err.message);
        }
    }
    fetchData();
},[]);


useEffect(()=>{
    const fetchData = async ()=>{
        try{
            const {data : basicData} = await getAllAboutMe();
            setAboutMe(basicData);
            console.log(basicData);
        }catch(err){
            console.log(err.message);
        }
    }
    fetchData();
},[]);


const confirmDelete = (skillId ) =>{
    confirmAlert({
        customUI: ({onClose}) =>{
            return(
                
                    <div style={{backgroundColor:BLACK, border:"1px solid" , borderRadius:"1em"}} className='p-4'>
                    <h1 style={{color:'white'}}>Delete skill</h1>
                    <p style={{color:'white'}}>Are you sure you want to delete selected skill?</p>
                    <button onClick={()=>{
                        removeSkill(skillId);
                        onClose();
                    }} className='btn mx-2'
                    style={{backgroundColor:"#F266AB" , color:'white'}}
                    >Yes</button>
                    <button onClick={()=>{
                        onClose();
                    }}className='btn mx-2'
                    style={{backgroundColor:BACKGROUNDBLACK , color:'white'}}
                    >No</button>
                    </div>

                
               
            )
        }
    })
}

const removeSkill = async(skillId) =>{
    try{
        const allSkills = [...skills];
        const updatedSkills = skills.filter((s) => s.id !== skillId);
        setSkills(updatedSkills);


        const {status} = await deleteSkill(skillId);
        navigate('/skills');

        if(status !== 200){
            setSkills(allSkills);
        }
    }catch(err){
        console.log(err.message)
    }

}





  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path='/' element={<Navigate to={'/skills'} />} />  
          <Route path='/skills' element={< BasicInfo skills={skills}/>} />
          <Route path='/futureskills' element={futureSkills.map((s) => <FutureInfo key={s.id} futureSkills={s}  />)} />
          <Route path='/aboutme' element={aboutMe.map((a) => <AboutMe key={a.id} aboutMe={a} />)} />

          <Route path='/skills/:skillId' element={<ViewCurrentSkills confirmDelete={confirmDelete} />}/>
          <Route path='/futureskills/:skillId' element={<ViewFutureInfo confirmDelete={confirmDelete}/>}/>

          <Route path='/skills/edit/:skillId' element= {<CurrentSkillsEdit skills={skills} setSkills={setSkills}/>} />
          <Route path='/futureskills/edit/:skillId' element={<FutureSkillsEdit futureSkills={futureSkills} setFutureSkills={setFutureSkills} />} />

          <Route path='/skills/add' element={<AddSkill skills={skills} setSkills={setSkills}/>} />
          
      </Routes>
        
    </div>
  );
}

export default App;
