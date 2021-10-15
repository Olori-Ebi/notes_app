import React, { SyntheticEvent, useState } from "react";
import { makeStyles } from '@mui/styles'
import { Button, TextField, Box } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom'
import {useCookies} from 'react-cookie'
import "@fontsource/poppins"

const useStyles = makeStyles({
    bodys: {
        backgroundColor: "whitesmoke",
        width: "100%",
        height: "85vh",
    },
    boxWrapper: {
        position: "absolute",
        height: '60vh',
        width: '35%',
        top: "30%",
        left: "32%",
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .2)",
        borderRadius: "10px"
    },
    boxs: {
        marginTop: "9.5%",
        marginLeft: "10%",
        fontFamily: "poppins"
    },
    email: {
        display: "flex",
        width: "400px",
        color: "white",
        borderRadius: "10px",
    },
    btn: {
        width: "400px",
    },
    headerWrapper: {
        background: '#65c368',
        height: '10vh',
        padding: '30px 0 10px 25px'
    },
    headerText: {
        color: 'white',
        fontFamily: 'poppins',
        letterSpacing: '1px',
    },
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
    },
    formText: {
        textAlign: 'center',
        marginRight: '40px',
        marginBottom: '20px',
        fontFamily: 'poppins',
        letterSpacing: '1px'
    },
    formIcons: {
        display: 'flex',
        justifyContent: 'center',
        marginRight: '40px',
    },
    fb: {
        marginRight: '10px'
    },
    signup: {
        color: 'green'
    }
});

const SignInForm = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [warningMessage, setWarningMsg] = useState("")
    const [cookies, setCookies] = useCookies(['token'])
    const [Id, setId] = useCookies(['id'])
    const history = useHistory()

    function checkLoginDetails(){
        if(!email && !password){
            return false
        }else {
            return true
        }
    }

    async function signInUser(event: SyntheticEvent) {
        event.preventDefault();
        const checker = checkLoginDetails()
        if (!checker){
           setWarningMsg("Email and Password is Required");
        }else{
            const details = {
                email,
                password
            };

            let result = null
            let result2 = null
            try{
                
                result = await axios({
                    method : "POST",
                    data : details,
                    withCredentials : true,
                    url : "https://notesxd.herokuapp.com/users/login",
                })
                
                history.push('/homepage')
            } catch (err:any) {
                console.log(err, "wertyuio")
                result = err.response;
                setWarningMsg("Not a valid Email or Password");
            }finally {
                console.log(result.data.token);
                setCookies('token', result.data.token )
            }
            result2 = await axios({
                method : "GET",
                // data : details,
                withCredentials : true,
                headers:{
                    'x-access-token' : result.data.token
                },
                url : "https://notesxd.herokuapp.com/notes/tests",
            }) 
            setId('id', result2.data)
            console.log(result2)         
        }
    }

    const classes = useStyles();
    return (
         <>
            <div className={classes.headerWrapper}>
                    <h1 className={classes.headerText}>SIGN IN</h1>
            </div>
                <div className={classes.bodys}>
                    <Box className={classes.boxWrapper}>
                        <h5 style={{ paddingTop:"10px", display:"flex", justifyContent:"center", color:"red"}}>{warningMessage}</h5>
                        <form className={classes.boxs} onSubmit={signInUser}>

                            <TextField label="Email Address"  sx={{ mb: 3 }} type='email' size="small" className={classes.email} onChange={ (e)=> setemail(e.target.value)}/>
                            <TextField label="Password" sx={{ mb: 3 }} type='password' size="small" className={classes.email} onChange={ (e)=> setpassword(e.target.value)}/>

                            <div className={classes.formStyle}>
                                <Button 
                                type="submit" 
                                className={classes.btn} 
                                sx={{ color: "white", mb: "30px" }} 
                                style={{ backgroundColor: '#32A05F' }}>
                                    SIGN IN
                                </Button>
                                
                                <span style={{ textAlign: 'center', marginRight: '40px', marginBottom: '20px' }}>or</span>
                                <div className={classes.formText}> Sign in with Social Networks</div>
                            </div>

                            <div className={classes.formIcons}>
                            <a href="https://notesxd.herokuapp.com/auth/facebook">
                                <FacebookRoundedIcon 
                                className={classes.fb} 
                                sx={{ width: '30px', height: '30px' }} />
                            </a> 
                            <a href="https://notesxd.herokuapp.com/auth/google/">
                                <GoogleIcon 
                                sx={{ width: '30px', height: '30px' }} />
                            </a>
                            </div>

                            <div className={classes.formText}>
                                <Link to='/email'>
                                    <p style={{ marginBottom: '10px' }}>Forgot Password?</p>
                                </Link>
                                <p>Don't have an account?
                                    <Link to='/signup'>
                                        <span className={classes.signup}> Sign Up</span>
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </Box>
            </div>
        </>
    );
};

export default SignInForm;