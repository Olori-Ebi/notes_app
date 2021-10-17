import React from 'react'
import { makeStyles } from '@mui/styles';
import { styled, alpha } from '@mui/material/styles';
import '@fontsource/noto-sans'
import '@fontsource/poppins'
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

const useStyles = makeStyles({
    headerWrapper:{
     background:'#F8F8F8',
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center',
     height:'62px'
    },
    logo:{
       marginLeft:'55px',
       textTransform:'uppercase',
       color:'#32A05F',
       fontFamily:'poppins',
       fontSize:'18px',
       letterSpacing:'1.5px'
    },
    xd:{
      textTransform:'uppercase',
      color:'black'
    },
    headerSearch:{

    },
    search:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center',
      paddingRight:'40px' 
    }
});

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius:'20px',  
    backgroundColor:'white',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '342px !important',
      height:'25px !important',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
const tname = 'notes'
const Header:React.FC = () => {
    const classes = useStyles();
    return (
        <>
           <div className={classes.headerWrapper}>
                <h3 className={classes.logo}>{tname}<span className={classes.xd}>.xd</span></h3>
              <div className={classes.search}>
                <Search>
                   <SearchIconWrapper>
                     <SearchIcon />
                   </SearchIconWrapper>
                <StyledInputBase
                    placeholder="SEARCH"
                   inputProps={{ 'poppins': 'search' }}
                   />
               </Search>

               <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon color="action" sx={{ fontSize:30}}/>
                 </Badge>
            </div>
            </div>    
        </>
    )
}

export default Header





// import React, { useState, useEffect } from 'react'
// import { makeStyles } from '@mui/styles';
// import Badge from '@mui/material/Badge';
// import {useCookies} from 'react-cookie'
// import axios from 'axios'
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SearchIcon from '@mui/icons-material/Search';

// const useStyles = makeStyles({
//     headerWrapper:{
//      background:'whitesmoke',
//      padding:'5px 10px 5px 0',
//      width:'100%',
//      display:'flex',
//      justifyContent:'space-between',
//      alignItems:'center'
//     },
//     logoImg:{
//       objectFit:'contain',
//       width:'200px',
//       height:'50px'
//     },
//     search:{
//         display: 'flex',
//         alignItems: 'center',
//         paddingRight:'20px'
//     },
//     headerSearch:{
//         marginRight: '15px',
//         background: 'white',
//         borderRadius: '40px',
//         padding: '7px',
//         height: '35px'
//     },
//     headerSearchIn:{
//         border:'none',
//       background:'none',
//       padding:'0',
//       outline:'none',
//     fontSize:'18px',
//     float:'left',
//     lineHeight:'40px',
//     color: 'black',
//     width: '300px',
//     transition: '0.4s',
//     },
//     headerSearchIcon:{
//         width: '40px !important',
//         height: '40px !important',
//         float: 'right',
//         borderRadius: '50%',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         cursor: 'pointer'
//     },
//     notifications:{
//         width: '30px !important',
//         height: '30px !important',
//         cursor: 'pointer'
//     }
// })
// const Header:React.FC = () => {
//     const classes = useStyles();
//     const [ notification, setNotification ] = useState('0')
//     const [Id, setId] = useCookies(['id'])
    

//     useEffect(()=>{
//         const getFolders = async()=>{
//           let newId:{token?:string,id?:string} = {...Id}
//           let tokens = newId.token
//           //  const logs  = await (axios.get('https://notesxd.herokuapp.com/notes/getfolder'))
//            let logs = await axios({
//               method : "GET",
//               withCredentials : true,
//               headers:{
//                   'x-access-token' : tokens!
//               },
//               url : "https://notesxd.herokuapp.com/notes/getNotification",
//           })
//            console.log(logs.data)
//            let data
//            data = '0'
//            if(Array.isArray(logs.data)){
//              data = logs.data.length as number
//            }
           
           
  
//           setNotification(data.toString())
//           console.log(notification)
//         }
//         getFolders()
//       },[]) 
//     return (
//         <>
//            <div className={classes.headerWrapper}>
//                 <img src='/images/notesLogo.png' className={classes.logoImg}/>
//             <div className ={classes.search} >
//                  <div className ={classes.headerSearch}>  
//                   <input className ={classes.headerSearchIn} type ="text" placeholder='Search'/>  
//                   <SearchIcon className ={classes.headerSearchIcon}/>
//                 </div>
//                  <Badge badgeContent={notification} color="error">
//                     <NotificationsNoneIcon color="action" sx={{ fontSize:30}}/>
//                  </Badge>
//             </div> 
//            </div>
//         </>
//     )
// }

// export default Header

