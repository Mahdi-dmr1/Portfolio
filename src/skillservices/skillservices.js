import axios from "axios";

const   SERVER_URL = "http://localhost:9000";

export const getAllSkills = () => {
    const url = `${SERVER_URL}/skills`;
    return axios.get(url);
}

export const getSkill = (skillId) => {
    const url = `${SERVER_URL}/skills/${skillId}`;
    return axios.get(url);
}

export const getAllFutureSkills = () => {
    const url = `${SERVER_URL}/futureskills`;
    return axios.get(url);
}

export const getFutureSkill = (skillId) => {
    const url = `${SERVER_URL}/futureskills/${skillId}`;
    return axios.get(url);
}

export const getAllAboutMe = () => {
    const url = `${SERVER_URL}/aboutme`;
    return axios.get(url);
}


export const createSkill = (skill) =>{
    const url = `${SERVER_URL}/skills`;
    return axios.post(url , skill);
}

export const updateSkill = (skill , skillId) =>{
    const url = `${SERVER_URL}/skills/${skillId}`;
    return axios.put(url , skill);
}

export const updateFutureSkill = (futureskill , skillId) =>{
    const url = `${SERVER_URL}/futureskills/${skillId}`;
    return axios.put(url , futureskill);
}

export const deleteSkill = (skillId) =>{
    const url = `${SERVER_URL}/skills/${skillId}`;
    return axios.delete(url);
}

