import React, {SyntheticEvent, useState} from "react";
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import {useCookies} from 'react-cookie'
import "@fontsource/poppins"
import axios from "axios";
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    bodys:{
      backgroundColor:"whitesmoke",
      width:"100%",
      height:"85vh",
      position:'relative',
    },
    emailText:{
      display: "flex",
      width: "400px",
      color:"white",
      borderRadius:"10px",
    },
    boxWrapper:{
      position:"absolute",
      width:'35%',
      height:'80vh',
      top:"10%",
      left:"32%",
      boxShadow:"0 3px 5px 2px rgba(0, 0, 0, .2)",
      borderRadius:"10px"
   },
    boxs:{ 
      marginTop:"9.5%",
      marginLeft:"10%",
      fontFamily:"poppins"
   },
    email:{
      display: "flex",
      width: "400px",
      color:"white",
      borderRadius:"10px",   
    },
    btn:{
      width: "400px",
    },
    headerWrapper:{
      background:'#65c368',
      height:'10vh',
      padding:'30px 0 10px 25px'
    },
    headerText:{
        color:'white',
        fontFamily:'poppins',
        letterSpacing:'1px'
    },
    icon:{
      position:'absolute',
      left:'35%',
      marginBottom:'20px',
  },
});
  
const ProfileForm = () => {
  const [firstName, setfirstname] = useState("");
  const [lastName, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [location, setlocation] = useState("")
  const [about, setabout] = useState("");
  const [warningMessage, setWarningMsg] = useState("")
  const [Id, setId] = useCookies(['id'])
  const [cookies, setCookies] = useCookies(['token'])
  const history = useHistory()


const EditProfile = async (event: SyntheticEvent) => {
    event.preventDefault()
    const details = {
      firstName,
      lastName,
      email,
      location,
      about
    }
    let result = null
    console.log(Id.id)
    let newId:{token?:string,id?:string} = {...Id}
    let tokens = newId.token
    try{
      result = await axios({
        method : "PUT",
        data : details,
        headers:{
            'x-access-token' : tokens!
        },
        withCredentials : true,
        url : `https://notesxd.herokuapp.com/users/${Id.id}`,
    })
        setWarningMsg("Profile updated successfully");
        history.push('/homepage')
    }catch(err:any){
      result = err.message
      setWarningMsg(err.response.data.message);
    } finally {
      console.log(result, "sdfgh");
    }
  }
    const classes = useStyles();
     return (
       <>
        <div className={classes.headerWrapper}>
            <h1 className={classes.headerText}>PROFILE</h1>
        </div>
      <div className={classes.bodys}>
      <Box className={classes.boxWrapper}>
      <h4 style={{paddingTop:"20px", display:"flex", justifyContent:"center", color:"#65c368"}}>{warningMessage}</h4>
        <form className={classes.boxs} onSubmit={EditProfile}>
          <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" className={classes.icon}  sx={{ width: 76, height: 76 }}/>
          <TextField label="firstName" sx={{ mb:3}} size="small" className={classes.email} onChange={(e)=>setfirstname(e.target.value)}/>
          <TextField label="lastName" sx={{ mb:3}} size="small" className={classes.email} onChange={(e)=>setlastname(e.target.value)}/>
          <TextField label="Email" size="small" sx={{ mb:3}} className={classes.email} onChange={(e)=>setemail(e.target.value)}/>
          <TextField label="Location" size="small" sx={{ mb:3}} className={classes.email} onChange={(e)=>setlocation(e.target.value)}/>
          <TextField label="About" size="medium" className={classes.emailText} onChange={(e)=>setabout(e.target.value)}/>
          <Button
          type="submit"
          className={classes.btn} 
          sx={{ color:"white", mt:3 }} 
          style={{ backgroundColor: '#32A05F'}}>
          UPDATE
          </Button> 
        </form> 
    </Box>
    </div>   
    </>
  );
};
export default ProfileForm;