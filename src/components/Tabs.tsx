import React from 'react'
import axios from "axios";
import {useContext, useState , useEffect} from 'react'
import { Context } from "../UserContext";
import { Select, MenuItem } from "@mui/material";

import { makeStyles } from '@mui/styles';
import EachNote from './EachNote'
import './fil.css';
import { GitHub } from '@material-ui/icons';

const useStyles = makeStyles({
    tabsWrapper:{
        flex:'30%'
    },
});
interface NotesDetails {
    updatedAt: string
    title : string
    body : string
    tags:string[]
}
const Tabs = () => {
    const { noteLists, handleSetNoteLists } = useContext(Context);
    const classes = useStyles();
    const [select, setSelect] = useState("")
    
let notes = [
    {
    date:"MAY 5",
    title:"Visual Inspiration",
    body:"Let’s collect inspiration for our truck and menu designs!",
    tags:["TagName","foodTruck"]
},
{
    date:"MAY 5",
    title:"Visual Inspiration",
    body:"Let’s collect inspiration for our truck and menu designs!",
    tags:["TagName","foodTruck"]
},
{
    date:"MAY 5",
    title:"Visual Inspiration",
    body:"Let’s collect inspiration for our truck and menu designs!",
    tags:["TagName","foodTruck"]
},
]

useEffect(() => {
 handleSetNoteLists!(notes)
 
}, [])
let  months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  let gh = `https://notesxd.herokuapp.com/notes/desc?sort=${select}`
  console.log('gh 1', gh)

const fetchNotes = async() =>{
    let result:any = null
    let userDetails = window.localStorage.getItem('user')!
    console.log("select 1",select)  
    console.log(JSON.parse(userDetails).token)
    try{
      result = await axios({
        method : "GET",
        headers:{
            'authorization' : JSON.parse(userDetails).token
        },
        withCredentials : true,
        url : `https://notesxd.herokuapp.com/notes/desc?sort=${select}`,
    }) 
        let ret = result.data.map((val:NotesDetails)=>{
        let fg:string = val.updatedAt
        return {
            date:  `${months[parseInt(fg.split('-')[1])].substring(0,3).toUpperCase()} ${fg.split('-')[2].substring(0,2)}`,
            title : val.title,
            body : val.body,
            tags: val.tags
        }
    })  
    handleSetNoteLists!(ret)
    }catch(err:any){
      result = err.message
    }
}

    return (
        <>
        <div className={classes.tabsWrapper} >
        <div className="notes-header"  >
                <div className="noteupdate">
                    {/* <span>Last Updated </span> */}
                    <select name="Last Updated" id="" style={{outline:'none',backgroundColor:'white', border: 'none'}} onChange={(e)=>{
                        setSelect(e.target.value)
                        console.log(select)
                        fetchNotes()
                        }}>
                        <option value="ascending" style={{backgroundColor:'white'}}>Last Updated</option>
                        <option value="descending">First Updated</option>
                    </select>
                    
                </div>
                <div className="button">
                    <button className="notebtn" ><i className="fas fa-plus"></i>NEW NOTE</button> 
                </div>
            </div>
            <div style={{overflow:'scroll', height:'97vh', overflowX: 'scroll'}}>
                {noteLists!.map((val)=>{
                    return (<EachNote date={val.date} title={val.title} body={val.body} tags={val.tags} />)
                })}
            
             </div>
        </div>
        </>
        
    )
}

export default Tabs 
