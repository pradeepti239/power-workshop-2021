import axios from 'axios'
const API_BASE_URL = 'https://api.github.com'
axios.defaults.baseURL='https://api.github.com';
// axios.interceptors.request()
const request = async (config)=>{
    return axios(config);
}

export const getAllGithubUsers=async ()=>{
    try{
        const {data} = await request({
            url: '/users'
        })
        return data;
    }catch (e) {
        return [];
    }
}
export const findUser=async (username)=>{
    try{
        const {data} = await request({
            url: `users/${username}`
        })
        return data;
    }catch (e) {
        return null;
    }
}
export const followers=async (payload)=>{
    try{
        const {data} = await request({
            url: `users/${payload.username}/${payload?.follow}`
        })
        return data;
    }catch (e) {
        return [];
    }
}

export const userfollowers=async (user)=>{
    try{
        const {data} = await request({
            url: `users/${user}/followers`
        })
        return data;
    }catch (e) {
        return [];
    }
}


export const userfollowing=async (user)=>{
    try{
        const {data} = await request({
            url: `users/${user}/following`
        })
        return data;
    }catch (e) {
        return [];
    }
}

export const publicrepos=async (user)=>{
    try{
        const {data} = await request({
            url: `users/${user}/repos`
        })
        return data;
    }catch (e) {
        return [];
    }
}


