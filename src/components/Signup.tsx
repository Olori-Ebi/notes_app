import React, { SyntheticEvent, useState } from "react";
import axios from 'axios'
import { Button, TextField, Box } from "@mui/material";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom'
//import useStyles from './theme'
import { makeStyles } from '@mui/styles'
import "@fontsource/poppins"
import dotenv from 'dotenv'
dotenv.config();


const SignUpForm = () => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [repeatPassword, setrepeatPassword] = useState("");
    const [showWarning, setShowWarning] = useState(false);
    const [warningMessage, setWarningMsg] = useState("")

    const useStyles = makeStyles({
    bodys: {
        backgroundColor: "whitesmoke",
        width: "100%",
        height: "85vh",
    },
    boxWrapper: {
        position: "absolute",
        height: '75vh',
        width: '35%',
        top: "20%",
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


    function validatePassword() {
        if (password.length > 1 && repeatPassword !== password) {
            return false;
        } else {
            return true
        }
    }

    async function signUpUser(event: SyntheticEvent) {
        event.preventDefault();
        //check that the password and repeat password is a match
        const passwordMatch = validatePassword()
        if (!passwordMatch) {
            setWarningMsg("Password do not match please check your password entry and try again!")
            setShowWarning(true)
        } else {
            setShowWarning(false);
            //submit user details
            const details = {
                firstName: firstname,
                lastName: lastname,
                email,
                password,
                confirm_password: repeatPassword,
            };
            
              await axios.post(process.env.REACT_APP_signup_url as string, details)
                .then((response) => {
                    alert("success!")
                    console.log(response)
                }).catch(err => {
                    console.log(err.response.data);
                    setWarningMsg(err.response.data);
                    setShowWarning(true)
                    // alert(`Error occurred: ${err.response.data}`)
            })
        }
    }

    const classes = useStyles();
    return (
        <>
            <div className={classes.headerWrapper}>
                <h1 className={classes.headerText}>SIGN UP</h1>
            </div>
            <div className={classes.bodys}>
                <Box className={classes.boxWrapper}>
                    <form className={classes.boxs} onSubmit={signUpUser}>

                        <TextField 
                        label='First Name' 
                        placeholder='First Name' 
                        className={classes.email} 
                        sx={{ mb: '20px' }} 
                        size="small" 
                        onChange={(e) => setfirstname(e.target.value)} required />

                        <TextField 
                        label='Last Name' 
                        placeholder='Last Name' 
                        className={classes.email} 
                        sx={{ mb: '20px' }} 
                        size="small" 
                        onChange={(e) => setlastname(e.target.value)} required />

                        <TextField 
                        label='Email Address' 
                        placeholder='Email Address' 
                        type='email' sx={{ mb: '20px' }} 
                        size="small" className={classes.email} 
                        onChange={(e) => setemail(e.target.value)} required />

                        <TextField 
                        label='Password' 
                        placeholder='Enter password' 
                        type='password' sx={{ mb: '20px' }} 
                        size="small" className={classes.email} 
                        onChange={(e) => setpassword(e.target.value)} required />

                        <TextField 
                        label='Repeat Password' 
                        placeholder='Repeat Password' 
                        type='password' 
                        sx={{ mb: '20px' }} 
                        size="small" 
                        className={classes.email} 
                        onChange={(e) => setrepeatPassword(e.target.value)} required />

                        {showWarning && <p style={{ margin: "5px 0 5px 0", color: "red" }}> {warningMessage} </p>}
                        <div className={classes.formStyle}>
                            <Button 
                            type="submit" 
                            className={classes.btn} 
                            sx={{ color: "white", mb: "30px" }} 
                            style={{ backgroundColor: '#32A05F' }}>
                                SIGN UP
                            </Button>

                            <span style={{ textAlign: 'center', marginRight: '40px', marginBottom: '20px' }}>or</span>
                            <div className={classes.formText}> Sign up with Social Networks</div>
                        </div>

                        <div className={classes.formIcons}>
                            <FacebookRoundedIcon 
                            className={classes.fb} 
                            sx={{ width: '30px', height: '30px' }} />
                            <GoogleIcon 
                            sx={{ width: '30px', height: '30px' }} />
                        </div>
                        <div className={classes.formText}>
                            <p>Already have an account?
                                <Link to='/login'>
                                    <span className={classes.signup}> Log In</span>
                                </Link>
                            </p>
                        </div>
                    </form>
                </Box>
            </div>
        </>
    );
};

export default SignUpForm;
