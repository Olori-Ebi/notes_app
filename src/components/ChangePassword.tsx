import React, {SyntheticEvent, useState} from "react";
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box } from "@mui/material";
import "@fontsource/poppins"
import axios from "axios";
import {useCookies} from 'react-cookie'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    bodys:{
      backgroundColor:"whitesmoke",
      width:"100%",
      height:"85vh",
    },
    boxWrapper:{
      position:"absolute",
      height:'50vh',
      width:'35%',
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
    password:{
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

const ChangePasswordForm = () => {
  const [oldpassword, setoldpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("")
  const [warningMessage, setWarningMsg] = useState("")
  const [Id, setId] = useCookies(['id'])
  const history = useHistory()

  function checkDetails(){
    if(!(oldpassword && newpassword && confirmpassword)){
      return false
    }else if (newpassword !== confirmpassword){
      return false
    }else {
      return true
    }
  }
  const ChangePassword = async (event: SyntheticEvent) => {
    event.preventDefault();
    
    const checker = checkDetails()
    console.log(checker)
    if(!checker){
      setWarningMsg(" All Password Fields are required")
    }else{
      const details = {
        oldPassword:oldpassword,
        newPassword:newpassword,
        confirmPassword:confirmpassword
      }
      let result = null
      let newId:{token?:string,id?:string} = {...Id}
    let tokens = newId.token
    console.log(tokens)
      try{
        result = await axios({
            method : "POST",
            data : details,
            headers:{
                'x-access-token' : tokens!
            },
            withCredentials : true,
            url : "https://notesxd.herokuapp.com/users/changePassword",
        })
        console.log(Id,result)
            setWarningMsg("Password updated successfully");
            history.push('/homepage')
      }catch(err:any){
        result = err.response
        setWarningMsg("Incorrect Password")
      }finally {
        console.log(result, "sdfgh");
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
            <Box className={classes.boxWrapper}>
             <h4 style={{paddingTop:"20px", display:"flex", justifyContent:"center", color:"#65c368"}}>{warningMessage}</h4>
             <form className={classes.boxs} onSubmit={ChangePassword}>
               <TextField label="Old Password" sx={{ mb:3}} type="password" size="small" className={classes.password} onChange={(e)=> setoldpassword(e.target.value)}/>
               <TextField label="New Password" sx={{ mb:3}} size="small" type="password"  className={classes.password} onChange={(e)=> setnewpassword(e.target.value)}/>
               <TextField label="Re-Enter New Password" size="small" type="password"  className={classes.password} onChange={(e)=>setconfirmpassword(e.target.value)}/>
               <Button type="submit" className={classes.btn} sx={{ color:"white", mt:3 }} style={{ backgroundColor: '#32A05F'}}>
                SUBMIT
               </Button> 
             </form> 
            </Box>
          </div>
        </>
      );
}
export default ChangePasswordForm;