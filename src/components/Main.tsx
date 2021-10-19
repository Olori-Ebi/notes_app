import React,{useState, useRef, SyntheticEvent} from 'react'
import { makeStyles } from '@mui/styles';
import Sidebar from './Sidebar';
import Tabs from './Tabs'
import Scroll from './Scroll'
import axios from "axios"


const useStyles = makeStyles({
    mainWrapper:{
        display:'flex'
    },
    modalContainer:{
        position:'absolute',
        left:0,
        top:0,
        bottom:0,
        right:0,
        "background-color":'rgba(0,0,0,0.4)',
        "z-index":100
    },
    modalContentContainer:{
        margin:"20rem auto",
        width:"40%",
        minHeight:"20rem",
        backgroundColor:"white",
        borderRadius:"1rem",
        zIndex:101
    },
    modalContentHeader:{
        display: "flex",
        alignItems: "center",
        justifyContent:"space-between",
        padding:"0.5rem 1rem",
        borderBottom:"2px solid rgba(5,5,5,0.8)",
        marginBottom:"1rem"
    },
    modalCloseBtn:{
        cursor: "pointer",
        
    },
    modalInput:{
        width:"60%",
        height: "2rem",
        marginBottom:"1rem",
        borderRadius:"0.5rem"
    },

    submitButton:{
        height: "2.5rem",

    }
});
const Main = () => {
    const classes = useStyles();
    const [displayModal, setDisplayModal] = useState(false);
    return (
        <>
        <div className={classes.mainWrapper}>
            {/* SIDEBAR */}
            <Sidebar toggleModal={setDisplayModal}/>
            {/* TABS */}   
            <Tabs />
            {/* MAIN */} 
            <Scroll />
        </div>
        {displayModal && <Modal toggleModal={setDisplayModal}/> }
        </>
    )
}

const Modal = (props :any)=>{
    let reftype:any = {}
    const classes = useStyles();
    const titleField = useRef(reftype);
    const [errMsg, setErrorMsg] = useState("");
    const [disabled, disableBtn]= useState(false)
    const [displayModal, setDisplayModal] = useState(false);

    const handleSubmit = (e : SyntheticEvent)=>{
        console.log("Button clicked")
        disableBtn(true)
        e.preventDefault();
        if(!titleField.current!.value){
            setErrorMsg("Title Field cannot be empty!")
            disableBtn(false)
            return;
        }
        axios.request({
            url:"https://notesxd.herokuapp.com/notes/createFolder",
            
            data:{
                title:titleField.current!.value
            },
            headers:{
                'authorization':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTZjOTE5ODk5MGEwNmM2MzE3NzgxZWUiLCJpYXQiOjE2MzQ2MDEzOTV9.guh0VbkWefUWfC5irJBK3ofsz5n-F9yXDQi2YB0ZFek"
            },
            method:"post"
        })
        .then((response)=>{
            console.log(response)
            let f1:{message:string, folder:string} = response.data as {message:string, folder:string}
            const msg  =  f1.message; 
            const createdFolder = f1.folder;
            alert(msg);
            disableBtn(false)
        }).catch(err=>{
            console.log(err.response.error)
            setErrorMsg(err.response.error)
            disableBtn(false)
        })

    }
   

    return <div className={classes.modalContainer}  >
            <div className={classes.modalContentContainer}>
                <div className={classes.modalContentHeader}>
                    <h1 style={{display:"inline-block"}}>Create new folder</h1>
                    <span className={classes.modalCloseBtn} onClick={e=> props.toggleModal(false)}>x</span>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="folderName">
                        <input id="folderName" className={classes.modalInput} ref={titleField} required/>
                    </label>
                    </div>
                    <button className={classes.submitButton} disabled={disabled}>Create Folder</button>
                </form>
                {errMsg && <p style={{color:"red"}}>{errMsg}</p>}
            </div>
            {displayModal && <Modal toggleModal={setDisplayModal}/> }
    </div>

}

export default Main;



