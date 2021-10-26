import React from 'react'
import { makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
import '@fontsource/noto-sans'
import '@fontsource/poppins'
import UpdateIcon from '@mui/icons-material/Update';
const useStyles = makeStyles({
    wrapper:{
     marginTop:'20px'
    },   
    section_header:{
     display:'flex',
     alignItems:'center',
     marginLeft:'30px'
    },
    section_items:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexWrap:'wrap',
    // background:'#F8F8F8',
    padding:'20px'
    },
    section_box:{
        padding:'10px',
        borderRadius:'20px',
        background:'white',
        boxSizing:'border-box',
        width:'600px',
        marginRight:'15px',
        marginBottom:'15px',
        border:'0.5px solid #32A05F'
    },
    avatar:{
      display:'flex',
      alignItems:'center'
    },
    section_text:{
    },
    section_texts:{
        fontFamily:'poppins',
        fontSize:'15px',
        letterSpacing:'1px'
    },
    section_info:{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center'
    },
})
const details=[
    {
        img:'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWVuJTIwcG9ydHJhaXR8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
        name:'Blake shelton',
        title:'My first ride to the moon, it is a rhapsody of adventures..',
        date:'Oct 15',
        read:'4 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/30/c8/53/30c853b6d3e3dde5c022ef6fe3e5cb3d.jpg',
        name:'Zara larson',
        title:'My akward sexual exploration , explosive orgasms on a power bike',
        date:'Jan 3',
        read:'5 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/54/48/f1/5448f1fcab4ddb4c76fd7cbe8621c85a.jpg',
        name:'Sam Martin',
        title:'United states independence day, 120 years of economic stability and freedom',
        date:'July 4',
        read:'5 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/1f/61/67/1f61674487536e82d188cc8910040d1e.jpg',
        name:'Elton John',
        title:'Node js: antagonizing asynchronousity in javascript?? : learning Ajax XHR',
        date:'May 12',
        read:'3 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/8f/ef/d8/8fefd8952c5406016e1389e2d0beb788.jpg',
        name:'Zara larson',
        title:'Node js: antagonizing asynchronousity in javascript?? : learning Ajax XHR',
        date:'Sep 12',
        read:'3 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/38/46/cc/3846cc646b917d000845a5a81cf92cfa.jpg',
        name:'Mary Jane',
        title:'Developmennt journey at decagon, flipped learning and fast paced execution',
        date:'Feb,7',
        read:'7 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/54/48/f1/5448f1fcab4ddb4c76fd7cbe8621c85a.jpg',
        name:'Sam Martin',
        title:'United states independence day, 120 years of economic stability and freedom',
        date:'July 4',
        read:'5 mins read'
    },
    {
        img:'https://i.pinimg.com/564x/1f/61/67/1f61674487536e82d188cc8910040d1e.jpg',
        name:'Elton John',
        title:'Node js: antagonizing asynchronousity in javascript?? : learning Ajax XHR',
        date:'May 12',
        read:'3 mins read'
    },
]
const MainSection = () => {
    const classes = useStyles();
    return (
        <>
         <div className={classes.wrapper}>
            <div className={classes.section_header}>     
              <UpdateIcon style={{background:'#32A05F', padding:'7px', color:'white', borderRadius:'50px', marginRight:'7px'}}/>
               <h3  style={{fontFamily:'poppins', fontSize:'35px', color:'black',letterSpacing:'1px'}}>Last Updated</h3>
            </div>
            <div className={classes.section_items}>
                {details.map((el, index)=>(
                      <div className={classes.section_box} key={index}>
                      <div className={classes.avatar}>
                         <Avatar alt="Travis Howard" src={el.img} 
                         sx={{width:'35px', height:'35px'}} style={{marginRight:'10px'}}/>
                         <p>{el.name}</p>
                      </div>
                      <div className={classes.section_text}>
                        <h3 className={classes.section_texts}>{el.title}</h3>
                      </div>
                      <div className={classes.section_info}>
                           <p style={{fontFamily:'poppins', fontSize:'13px', color:'#32A05F',  padding:'9px', borderRadius:'50px', cursor:'pointer'}}>{el.date}</p>
                           <p style={{fontFamily:'poppins', fontSize:'13px', color:'#32A05F', cursor:'pointer'}}>{el.read}</p>  
                      </div>
                  </div>
                ))}
            </div>
          </div>  
       </>
    )
}
export default MainSection