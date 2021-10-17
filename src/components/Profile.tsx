import React, {SyntheticEvent, useState} from "react";
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box, Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import Avatar from '@mui/material/Avatar';
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

interface userdet {
  firstName : string
  lastName: string
  email: string
  about : string
  location : string
  id: string
  gender: string
  avatar : string
}
  
const ProfileForm = () => {

  let userDetails = window.localStorage.getItem('user')!
  let Det:userdet = JSON.parse(userDetails).user
console.log(Det, "werty")


  const [firstName, setfirstname] = useState(Det.firstName);
  const [lastName, setlastname] = useState(Det.lastName);
  const [email, setemail] = useState(Det.email);
  const [location, setlocation] = useState(Det.location)
  const [about, setabout] = useState(Det.about);
  const [warningMessage, setWarningMsg] = useState("")
  const [genderselect, setGenderselect] = useState(Det.gender)
  const history = useHistory()

const EditProfile = async (event: SyntheticEvent) => {
    event.preventDefault()
    console.log(genderselect)
    const detail = {
      firstName,
      lastName,
      location,
      email,
      gender:genderselect,
      about
    }
    let result = null
    try{
      result = await axios({
        method : "PUT",
        data : detail,
        headers:{
            'authorization' : JSON.parse(userDetails).token
        },
        withCredentials : true,
        url : "https://notesxd.herokuapp.com/users/update",
    })
    console.log(result)
        setWarningMsg("Profile updated successfully");
        const newDetails = {
          token: JSON.parse(userDetails).token,
          user:{
            ...detail,
            email
          }
        }
        
        window.localStorage.setItem('user', JSON.stringify(newDetails))
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
          <TextField label="Firstname" sx={{ mb:3}} defaultValue={Det.firstName} size="small" className={classes.email} onChange={(e)=>setfirstname(e.target.value)}/>
          <TextField label="Lastname" sx={{ mb:3}} size="small" defaultValue={Det.lastName} className={classes.email} onChange={(e)=>setlastname(e.target.value)}/>
          <TextField label="Email" disabled size="small" sx={{ mb:3}} defaultValue={Det.email} className={classes.email} onChange={(e)=>setemail(e.target.value)}/>
          <FormControl sx={{ mb:3}} size="small" className={classes.email}>
          <InputLabel id="demo-simple-select-label" >Gender</InputLabel>
            <Select labelId="demo-simple-select-label" defaultValue={genderselect} id="demo-simple-select" label="Gender" onChange={(e)=>setGenderselect(e.target.value)}>
              <MenuItem value="male" style={{ backgroundColor: '#32A05F'}}>Male</MenuItem>
              <MenuItem value="female" style={{ backgroundColor: '#32A05F'}}>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Location" size="small" sx={{ mb:3}} defaultValue={Det.location} className={classes.email} onChange={(e)=>setlocation(e.target.value)}/>
          <TextField label="About" size="medium" className={classes.emailText} defaultValue={Det.about} onChange={(e)=>setabout(e.target.value)}/>
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