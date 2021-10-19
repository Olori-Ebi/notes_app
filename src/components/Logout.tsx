import React from 'react'
import { useHistory } from "react-router-dom";
import axios from "axios";

const Logout = () => {
        const history = useHistory()
        let apiRes = null
        try{
           apiRes = async()=>{ 
                return await axios.get("https://notesxd.herokuapp.com/users/logout")
             }
             apiRes()
           history.push('/')
        } catch (err:any) {
           apiRes = err.response;
        } finally {
           console.log(apiRes);
        }
    return (
        <div>
            
        </div>
    )
}

export default Logout
