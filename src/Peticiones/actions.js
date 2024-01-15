import axios from "axios"

export const GetData  = async (url)=>{
    const resp = await axios.get(url)
    return resp?.data
}