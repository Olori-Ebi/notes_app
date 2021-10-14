import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '@fontsource/poppins'

const useStyles = makeStyles({
    sidebarWrapper:{
        flex:'20%',
        height:'100vh',
        width:'100%',
       
    },
    navItems:{
       
       
    },
    navProfile:{
       background:'whitesmoke',
       display:'flex',
       alignItems:'center',
       height:'7vh',
       width:'80%',
       marginTop:'20px',
       marginLeft:'10px',
       padding:'8px 0 8px 10px',
       borderRadius:'10px',
       transition: 'all 0.3s linear',
       '&:hover':{
           background:'#226220',
           color:'white'
       }
    },
    icon:{
        marginRight:'10px'
    },
    expandmore:{
        marginLeft:'10px',
        cursor:'pointer'
    },
       folders:{
       display:'flex',
       justifyContent:'center',
       alignItems:'center',
       height:'5vh',
       width:'80%',
       marginTop:'20px',
       marginLeft:'10px',
       padding:'8px 0 8px 10px',
       borderRadius:'10px',
       transition: 'all 0.3s linear',
       '&:hover':{
        background:'whitesmoke',
        color:'black'
    }
    }
});
const Textstyles ={fontSize:'20px', cursor:'pointer', fontFamily:'poppins', letterSpacing:'1px'}
const navtitle=[
    {name:'Trash'},
    {name:'Collaborators'}
]
const Sidebar = () => {
    const [ folders, setFolders ] = useState([])
    useEffect(()=>{
      const getFolders = async()=>{
         const logs  = await (axios.get('https://notesxd.herokuapp.com/notes/getfolder'))
         let data:[] = logs.data as []

        setFolders(data)
      }
      getFolders()
    },[]) 

    const classes = useStyles();
    const username ="Chiemere"
    return (
        <>
        <div className={classes.sidebarWrapper}>
            <div className={classes.navItems}>
                <div className={classes.navProfile}>
                   <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" className={classes.icon}/>
                   <h3 style={Textstyles}>{username}</h3>
                </div>
                  {folders.length<1? (<h3 style={Textstyles} className={classes.folders}>{folders}</h3>)
                   :(<h3 style={{display:'none'}}>{folders}</h3>)} 
               {navtitle.map((el,index)=>(
                <div className={classes.folders} key={index}>
                    <h3 style={Textstyles}>{el.name}</h3>
                    <ExpandMoreIcon className={classes.expandmore}/>
                  </div>
                 ))}
               
            </div>
        </div>
        </>
    )
}

export default Sidebar 
