import React, {SyntheticEvent, useState} from "react";
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box } from "@mui/material";
import "@fontsource/poppins"
import axios from 'axios'
// import { Link } from "react-router-dom";


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
    marginTop:"17%",
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
    textDecoration:"none"
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

const EmailInput = () => {
  const [email, setemail] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [warningMessage, setWarningMsg] = useState("")
  const [alertMessage, setAlertMsg] = useState("")

async function userEmail(event: SyntheticEvent){
  event.preventDefault();
  if(!email){
      setWarningMsg("Please input your Email")
      setShowWarning(true);
      //submit user details 
    }else{
        const details = { 
          email
      };
      let apiRes = null
      try{
        apiRes = await axios.post("https://notesxd.herokuapp.com/users/recovery-email", details)
        setAlertMsg("A Mail has been sent to you to verify your email")
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
      <h4 style={{paddingTop:"20px", display:"flex", justifyContent:"center", color:"#65c368"}}>{alertMessage}</h4>
        <form className={classes.boxs} onSubmit={userEmail}>
          <TextField label="Email" helperText={`${warningMessage}`} size="small" className={classes.email} onChange={ (e)=> setemail(e.target.value)}/>
          {/* {showWarning && <p style={{margin:"5px 0 5px 0", color:"red"}}>{warningMessage}</p>} */}
          <Button type="submit" className={classes.btn} sx={{ color:"white", mt:3 }} style={{ backgroundColor: '#32A05F' }}>
            SUBMIT
          </Button>
        </form> 
    </Box>
    </div>
    </>
  );
};

export default EmailInput;

