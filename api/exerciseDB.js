import axios from 'axios'
import { ApiKey } from '../constants'

const baseURL= 'https://api.api-ninjas.com'

const apiCall= async(url, params)=>{
    try{
        const options={
            method:'GET',
            url,
            params,
            headers:{'X-Api-Key': ApiKey}
        };
        const response = await axios.request(options);
        return response.data;
    }
    catch(err){
        console.log('error: ', err.message)
    }
}

export const fetchExercisesByBodypart = async (bodyPart)=>{
    let data = await apiCall(baseURL +`/v1/exercises?muscle=${bodyPart}`);
    return data;
}