import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    scrollWrapper:{
        flex:'50%'
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
