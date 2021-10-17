import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@mui/styles';
import '@fontsource/poppins';
import '@fontsource/source-sans-pro'
import Avatar from '@mui/material/Avatar';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

const useStyles = makeStyles({
    sidebarWrapper:{
        flex:'15%',
        height:'100vh',
        width:'100%',
        backgroundColor:'#F4F4F4',
       position:'relative'
    },
    profile:{
      display:'flex',
      alignItems:'center',
      margin:'15px 20px 15px 30px'
    },
    profileText:{
    },
    username:{
      marginRight:'25px',
      fontSize:'14px',
      fontFamily:'poppins',
      letterSpacing:'1px',
    },
    menu:{
     display:'inline',
     transition: 'all 0.3s linear',
    },
    menu_text:{
        backgroundColor:'#F8F8F8',
      fontSize:'12px',
    },
    hide_menu_text:{
      display:'none',
      transition: 'all 0.3s linear',
    },
    menuicon:{
      display:'flex',
      alignItems:'center',
      marginLeft:'30px'
    },
    text:{
       fontSize:'14px',
       fontFamily:'poppins',
        marginLeft:'5px',
       letterSpacing:'1px'
    },
    notes:{
      backgroundColor:'#EAEAEA',
      display:'flex',
      alignItems:'center',
       padding:'15px 0px',
       marginLeft:'30px',
       borderRadius:'30px 0 0 30px'
    },
    note:{
      },
    menu_items:{
      marginLeft:'10px',
      fontSize:'14px',
      fontFamily:'source-sans-pro'
    },
    menu_subitems:{
        padding:'10px 0',
        marginLeft:'10px',
        fontSize:'14px',
        fontFamily:'source-sans-pro'
    },
    menu_item:{
      fontSize:'16px',
      fontFamily:'source-sans-pro',
      textTransform:'uppercase'
      },
    play:{
        marginLeft:'15px'
    },
    addNew:{
     display:'flex',
     alignItems:'center',
     justifyContent:'center',
     borderTop:'0.5px solid black',
     position:'sticky',
     top:'93%',
    },
    newFolder:{
        fontSize:'14px',
        fontFamily:'source-sans-pro',
        marginLeft:'4px'
    }, 
});
const Textstyles ={fontSize:'20px', cursor:'pointer', fontFamily:'poppins', letterSpacing:'1px'}
const navtitle=[
    {name:'NOTES'},
    {name:'TASKS'},
    {name:'FOLDER 1'},
    {name:'FOLDER 2'}
]
const Sidebar = () => {
    const [menu, setMenu ] = useState(false)
    const [submenu, setSubmenu ] = useState(false)
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
    const trashCount ='4'
    const collaboratorCount ='8'
    return (
        <>
        <div className={classes.sidebarWrapper}>
            <div className={classes.profile}>
               <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" sx={{width:'35px', height:'35px'}} style={{marginRight:'10px'}}/>
                  <p className={classes.username}><strong>{username}</strong></p>
                <ExpandMoreIcon onClick={()=> setMenu(!menu)} style={{cursor:'pointer'}} sx={{width:"30px",height:'30px' }}/>
            </div>
            <div className={ menu ? classes.menu : classes.hide_menu_text}>
                   <div className={classes.menu_text}>
                       <div className={classes.menuicon}>
                          <AccountCircleIcon />
                          <h2 className={classes.text}>Profile</h2>
                       </div>
                       <div className={classes.menuicon}>
                          <SettingsIcon />
                          <h2 className={classes.text}>Password</h2>
                       </div>
                       <div className={classes.menuicon}>
                          <LogoutIcon />
                          <h2 className={classes.text}>Log Out</h2>
                       </div>
                   </div>
            </div>
            {navtitle.map((el,index)=>(
            <div>
                <div className={classes.notes} key={index}>
                <PlayArrowIcon className={classes.play} sx={{width:"15px",height:'15px'}}  style={{cursor:'pointer'}}  onClick={()=> setSubmenu(!submenu)} />
                <div className={classes.menu_items}>{el.name}</div>
             </div>
             <div className={ submenu ? classes.menu_items : classes.hide_menu_text}>{el.name}</div>
             </div>
            ))}
            <div className={classes.note}>
                <p className={classes.menu_item}>Trash ({trashCount})</p>
            </div>
            <div className={classes.note}>
            <p className={classes.menu_item}>Collaborators ({collaboratorCount})</p>  
            </div>          
            <div className={classes.addNew}>
               <AddIcon />
              <h3 className={classes.newFolder}> NEW FOLDER </h3>
            </div>
        </div>
        </>
    )
}
export default Sidebar



// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { makeStyles } from '@mui/styles';
// import Avatar from '@mui/material/Avatar';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import {useCookies} from 'react-cookie'
// import '@fontsource/poppins'

// const useStyles = makeStyles({
//     sidebarWrapper:{
//         flex:'20%',
//         height:'100vh',
//         width:'100%',
       
//     },
//     navItems:{
       
       
//     },
//     navProfile:{
//        background:'whitesmoke',
//        display:'flex',
//        alignItems:'center',
//        height:'7vh',
//        width:'80%',
//        marginTop:'20px',
//        marginLeft:'10px',
//        padding:'8px 0 8px 10px',
//        borderRadius:'10px',
//        transition: 'all 0.3s linear',
//        '&:hover':{
//            background:'#226220',
//            color:'white'
//        }
//     },
//     icon:{
//         marginRight:'10px'
//     },
//     expandmore:{
//         marginLeft:'10px',
//         cursor:'pointer'
//     },
//        folders:{
//        display:'flex',
//        justifyContent:'center',
//        alignItems:'center',
//        height:'5vh',
//        width:'80%',
//        marginTop:'20px',
//        marginLeft:'10px',
//        padding:'8px 0 8px 2px',
//        borderRadius:'10px',
//        transition: 'all 0.3s linear',
//        '&:hover':{
//         background:'whitesmoke',
//         color:'black'
//     }
//     }
// });
// const Textstyles ={fontSize:'20px', cursor:'pointer', fontFamily:'poppins', letterSpacing:'1px'}
// const navtitle=[
//     {name:'Trash'},
//     {name:'Collaborators'}
// ]
// const Sidebar = () => {
//     const [ folders, setFolders ] = useState([])
//     const [Id, setId] = useCookies(['id'])
//     useEffect(()=>{
//       const getFolders = async()=>{
//         let newId:{token?:string,id?:string} = {...Id}
//         let tokens = newId.token
//          let logs = await axios({
//             method : "GET",
//             withCredentials : true,
//             headers:{
//                 'x-access-token' : tokens!
//             },
//             url : "https://notesxd.herokuapp.com/notes/getfolder",
//         })
//          console.log(logs.data)
         
//          let data:[] = logs.data as []

//         setFolders(data.reverse())
//       }
//       getFolders()
//     },[]) 

//     const classes = useStyles();
//     const username ="Benedict"
//     return (
//         <>
//         <div className={classes.sidebarWrapper}>
//             <div className={classes.navItems}>
//                 <div className={classes.navProfile}>
//                    <Avatar alt="Remy Sharp" src="https://image.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" className={classes.icon}/>
//                    <h3 style={Textstyles}>{username}</h3>
//                 </div>
//                 {folders.map((el:{title:string},index)=>(
//                     <div className={classes.folders} key={index}>
//                   <h3 style={Textstyles} className={classes.folders}>{el.title}</h3>
//                   <ExpandMoreIcon className={classes.expandmore}/>
//                   </div>
//                 ))}
               
//             </div>
//         </div>
//         </>
//     )
// }

// export default Sidebar 
