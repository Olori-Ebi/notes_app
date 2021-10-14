import React, {SyntheticEvent, useState} from "react";
import axios from 'axios'
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box } from "@mui/material";
import "@fontsource/poppins"
import { useParams } from "react-router-dom";


const useStyles = makeStyles({
  bodys:{
    backgroundColor:"whitesmoke",
    width:"100%",
    height:"85vh",
  },
  boxWrapper:{
    position:"absolute",
    top:"30%",
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
  }
});
 
const PasswordInput =() => {
    const [password, setpassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMsg] = useState("")
    const [alertMessage, setAlertMsg] = useState("")
    let params:{token:string} = useParams()
    function validatePassword() {
        if( repeatPassword !== password ){
            return false;
        }else{
            return true
        }
    }
  async function userPassword(event: SyntheticEvent){
    event.preventDefault();
    const passwordMatch = validatePassword()
    if(!passwordMatch){
      setAlertMsg("Password do not match please check your password entry and try again!")
      setShowWarning(true)
    }else{
      const details = { 
        password,
        confirmPassword:repeatPassword,
        token : params.token
      };
      let apiRes = null
      try{
        apiRes = await axios.post("https://notesxd.herokuapp.com/users/reset", details)
      } catch (err:any) {
        apiRes = err.response;
        setWarningMsg(err.response.data.message);
        setShowWarning(true)
      } finally {
          console.log(apiRes);
      }
    }  
  }

    const classes = useStyles();
    return (
      <>
      <div className={classes.headerWrapper}>
          <h1 className={classes.headerText}>FORGOT PASSWORD</h1>
      </div>
      <div className={classes.bodys}>
    <Box className={classes.boxWrapper} sx={{ width: 500, height:300}}>
      <h5 style={{paddingTop:"10px",display:"flex", justifyContent:"center", color:"red"}}>{alertMessage}</h5>
      <form className={classes.boxs} onSubmit={userPassword}>
        <TextField label="New Password" helperText={`${warningMessage}`} sx={{ mb:3}} size="small" className={classes.email} onChange={ (e)=> setpassword(e.target.value)}/>
        <TextField label="Re-Enter New Password" helperText={`${warningMessage}`} size="small" className={classes.email} onChange={ (e)=> setrepeatPassword(e.target.value)} />
        <Button type="submit" className={classes.btn} sx={{ color:"white", mt:3 }} style={{ backgroundColor: '#32A05F'}}>
          SUBMIT
        </Button> 
      </form> 
    </Box>
    </div>
    </>
  );
};

export default PasswordInput;

