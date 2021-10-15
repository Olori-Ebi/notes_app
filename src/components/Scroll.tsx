import React from 'react'
import { makeStyles } from '@mui/styles';
import { borderLeft } from '@mui/system';

const useStyles = makeStyles({
    scrollWrapper:{
        flex:'50%',
        borderLeft:"0.5px solid grey"
    }
});

const Scroll = () => {
    const classes = useStyles();
    return (
        <>
        <div className={classes.scrollWrapper}>
           MAIN CONTENTS TO BE HERE
        </div>
        </>
    )
}

export default Scroll 
