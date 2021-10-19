import React, {SyntheticEvent, useState} from "react";
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box, Select, MenuItem, InputLabel, FormControl, CssBaseline, FormControlLabel, Checkbox, Link, Typography, Container    } from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import "@fontsource/poppins"
import axios from "axios";
import { useHistory } from 'react-router-dom'

function Copyright(props: any) {
  return (
    <Typography variant="body2" align="center" {...props} style={{backgroundColor:'whitesmoke'}}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        NotesXD
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles({
  headerWrapper:{
    background: '#65c368',
    height: '15vh',
    padding: '30px 0 10px 25px',
    position:'relative',
},
headerText:{
color: 'white',
fontFamily: 'poppins',
letterSpacing: '1px',
position:'absolute',
left:'1%',
top:'3%'
},
wrapper:{
    backgroundColor: "whitesmoke",
    height:'950px'
},
boxForm:{
    background:'white'
},
email:{
      display: "flex",
      width: "400px",
      color:"white",
      borderRadius:"10px",   
    }
});

const theme = createTheme();
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
    console.log(result, "one")
    console.log(detail, "two")
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
      <div  className={classes.wrapper}>
        <div className={classes.headerWrapper}>
            <h1 className={classes.headerText}>PROFILE</h1>
        </div>
        <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ marginTop: 7, display: 'flex', flexDirection: 'column', alignItems: 'center', padding:'20px'}} className={classes.boxForm}>
            {/* warning message to be refrenced from here */}
        <h5 style={{ paddingTop:"10px", display:"flex", justifyContent:"center", color:"red", fontSize:'14px'}}>{warningMessage}</h5>
        <Avatar sx={{bgcolor: 'secondary.main',width: 80, height: 80}} alt="Remy Sharp" src="/static/images/avatar/1.jpg"></Avatar>
      <Box component="form" onSubmit={EditProfile} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" size="small" fullWidth id="first name" label="First Name" name="First Name" autoFocus defaultValue={Det.firstName} onChange={(e)=>setfirstname(e.target.value)}/>
          <TextField margin="normal" size="small" fullWidth id="last name" label="Last Name" name="Last Name" autoFocus defaultValue={Det.lastName} onChange={(e)=>setlastname(e.target.value)}/>
          <TextField margin="normal" size="small" fullWidth id="email" disabled label="Email Address" name="Email" autoComplete="email" autoFocus defaultValue={Det.email} onChange={(e)=>setemail(e.target.value)}/>
          <FormControl margin="normal" fullWidth sx={{ mt:3}} size="small" className={classes.email}>
          <InputLabel id="demo-simple-select-label" >Gender</InputLabel>
            <Select labelId="demo-simple-select-label" defaultValue={genderselect} id="demo-simple-select" label="Gender" onChange={(e)=>setGenderselect(e.target.value)}>
              <MenuItem value="male" style={{ backgroundColor: '#32A05F'}}>Male</MenuItem>
              <MenuItem value="female" style={{ backgroundColor: '#32A05F'}}>Female</MenuItem>
            </Select>
          </FormControl>
          <TextField margin="normal" size="small" fullWidth id="location" label="Location" name="location" autoComplete="location" autoFocus defaultValue={Det.location} onChange={(e)=>setlocation(e.target.value)}/>
          <TextField margin="normal" size="small" fullWidth id="about" label="About" name="about" autoComplete="about" autoFocus defaultValue={Det.about} onChange={(e)=>setabout(e.target.value)}/>
          <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Remember me"/>
          <Button type="submit" fullWidth variant="contained" style={{ backgroundColor: '#32A05F' }} sx={{ mt: 3, mb: 2 }}>
          UPDATE
          </Button> 
        </Box>
    </Box>
      <Copyright sx={{ mt: 6, mb: 2 }} />
    </Container>
    </ThemeProvider>
    </div>
  );
};
export default ProfileForm;