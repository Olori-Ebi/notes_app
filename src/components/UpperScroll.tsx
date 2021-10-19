import React, {useState} from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const UpperScroll = () => {

    const [value, setValue] = useState(0);

  const handleChange = (event:any, newValue:any) => {
    setValue(newValue);
  };
  
    return (
        <div style={{display:"flex", height: "100%", flexDirection:"column"}}>
        <div style={{ width:"inherit", height:"9%"}}>
            <Box sx={{ width: "54%", bgcolor: '#EAEAEA', position:"absolute"}}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"   
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Four" />
        <Tab label="Item Five" />
        <Tab label="Item Six" />
        <Tab label="Item Seven" />
        <Tab label="Item Eight" />
        <Tab label="Item Nine" />
        <Tab label="Item Ten" />
        <Tab label="Item Eleven" />
        <Tab label="Item Twelve" />
        <Tab label="Item Thirteen" />
        <Tab label="Item Fourteen" />
        <Tab label="Item Fifteen" />
        <Tab label="Item Ten" />
        <Tab label="Item Ten" />
        <Tab label="Item Ten" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
        <Tab label="Item Twen" />
      </Tabs>
    </Box> 
        <span>MoreHorizIcon </span>
        </div>
        <div style={{ width:"inherit", height:"60%", overflow:"scroll", backgroundColor: 'blue', display:"flex", flexDirection:"column", alignItems:"flex-start", paddingLeft:"40px" }}>
            {/* <Box sx={{ width: "100%", height:"50%", overflow:"scroll"}}> */}
                <span style={{padding:"0 0 30px"}}>Tittle of Note</span>
                <hr style={{ width:"100%", border:'1px solid black', marginRight:"20px"}}/>
                <div style={{padding:"20px 0"}}>
                <span style={{padding:"0 50px 0 0"}}>Created By</span> <span>Created By</span>
                </div>
                <div>
                <span style={{padding:"0 45px 0 0"}}>Collaborator</span><span>Collaborator</span>
                </div>
                <div style={{padding:"20px 0"}}>
                <span style={{padding:"20px 40px 20px 0"}}>Last Updated</span><span>Last Updated</span>
                </div>
                <div style={{padding:"0 0 20px 0"}}>
                <span style={{padding:"0 105px 20px 0"}}>Tags</span><span>Tags</span>
                </div>
                <hr style={{ width:"100%", border:'1px solid black'}}/>
            {/* </Box> */}
        </div>
        </div>
    )
}

export default UpperScroll
