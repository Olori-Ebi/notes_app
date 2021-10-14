import React from 'react'
import { makeStyles } from '@mui/styles';
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles({
    headerWrapper:{
     background:'whitesmoke',
     padding:'5px 10px 5px 0',
     width:'100%',
     display:'flex',
     justifyContent:'space-between',
     alignItems:'center'
    },
    logoImg:{
      objectFit:'contain',
      width:'200px',
      height:'50px'
    },
    search:{
        display: 'flex',
        alignItems: 'center',
        paddingRight:'20px'
    },
    headerSearch:{
        marginRight: '15px',
        background: 'white',
        borderRadius: '40px',
        padding: '7px',
        height: '35px'
    },
    headerSearchIn:{
        border:'none',
      background:'none',
      padding:'0',
      outline:'none',
    fontSize:'18px',
    float:'left',
    lineHeight:'40px',
    color: 'black',
    width: '300px',
    transition: '0.4s',
    },
    headerSearchIcon:{
        width: '40px !important',
        height: '40px !important',
        float: 'right',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    notifications:{
        width: '30px !important',
        height: '30px !important',
        cursor: 'pointer'
    }
})
const Header:React.FC = () => {
    const classes = useStyles();
    return (
        <>
           <div className={classes.headerWrapper}>
                <img src='/images/notesLogo.png' className={classes.logoImg}/>
            <div className ={classes.search} >
                 <div className ={classes.headerSearch}>  
                  <input className ={classes.headerSearchIn} type ="text" placeholder='Search'/>  
                  <SearchIcon className ={classes.headerSearchIcon}/>
                </div>
                 <Badge badgeContent={4} color="error">
                    <NotificationsNoneIcon color="action" sx={{ fontSize:30}}/>
                 </Badge>
            </div> 
           </div>
        </>
    )
}

export default Header

